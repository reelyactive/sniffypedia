/**
 * Copyright reelyActive 2016-2017
 * We believe in an open Internet of Things
 */

angular.module('reelyactive.cormorant', [])

  .factory('cormorant', function cormorantFactory($http) {

    var stories = {};

    function extractFromHtml(html) {
      var tagIndex = html.search(/(<script\s*?type\s*?=\s*?"application\/ld\+json">)/);
      if(tagIndex < 0) {
        return null;
      }
      var startIndex = html.indexOf('>', tagIndex) + 1;
      var stopIndex = html.indexOf('</script>', startIndex);
      var jsonString = html.substring(startIndex, stopIndex);

      try {
        json = JSON.parse(jsonString);
      }
      catch(e) {
        console.log(e);
        console.log(jsonString);
        return null;
      }
      return graphify(json);
    }

    function graphify(json) {
      var graph = [];
      var addSchemaPrefix = false;
      if((json === null) || (typeof json !== 'object')) {
        return null;
      }
      if(!json.hasOwnProperty('@context')) {
        console.log('cormorant.js: missing @context', json);
        return graph;
      }

      if(isSchemaOrg(json['@context'])) {
        addSchemaPrefix = true;
      }
      else if(!(json['@context'].hasOwnProperty('schema') &&
                isSchemaOrg(json['@context'].schema))) {
        // TODO: handle other contexts
        console.log('cormorant.js: unsupported @context', json['@context']);
        return graph;
      }

      if(json.hasOwnProperty('@graph')) {
        graph = json['@graph'];
      }
      else {
        delete json['@context'];
        graph.push(json);
      }

      if(addSchemaPrefix) {
        for(var cItem = 0; cItem < graph.length; cItem++) {
          var item = graph[cItem];
          addPropertyPrefix(item, 'schema:');
        }
      }

      return graph;
    }

    function isSchemaOrg(context) {
      if((context === 'http://schema.org') ||
         (context === 'http://schema.org/')) {
        return true;
      }
      return false;
    }

    function addPropertyPrefix(item, prefix) {
      if(item instanceof Array) {
        for(var cIndex = 0; cIndex < item.length; cIndex++) {
          addPropertyPrefix(item[cIndex], prefix);
        }
      }
      else if(typeof item === 'object') {
        for(property in item) {
          if(property === '@type') {
            item[property] = prefix + item[property];
          }
          else if(property.substr(0, 1) !== '@') {
            item[prefix + property] = item[property];
            delete item[property];
            if(typeof item[prefix + property] === 'object') {
              addPropertyPrefix(item[prefix + property], prefix);
            }
          }
        }
      }
    }

    function addContextToGraph(graph) {
      if((graph === null) || !(graph instanceof Array)) {
        return null;
      }

      return {
        '@context': { schema: 'http://schema.org' },
        '@graph': graph
      };
    }

    function getStoryTypes(story) {
      var types = [];

      if(story && story.hasOwnProperty('@graph') &&
         story['@graph'] instanceof Array) {
        for(var cType = 0; cType < story['@graph'].length; cType++) {
          types.push(story['@graph'][cType]['@type']);
        }
      }

      return types;
    }

    function combine(story1, story2) {
      var types1 = getStoryTypes(story1);
      var types2 = getStoryTypes(story2);

      if(types1.length > 0) {
        var combined = Object.assign({}, story1);
        for(var cType = 0; cType < types2.length; cType++) {
          var index = types1.indexOf(types2[cType]);
          if(index < 0) {
            combined['@graph'].push(story2['@graph'][cType]);
          }
          else {
            combined['@graph'][index] = story2['@graph'][cType];
          }
        }
        return combined;
      }
      return story1;
    }

    var get = function(url, callback) {
      if(!url || (typeof url !== 'string')) {
        return callback(null, null);
      }
      if(stories.hasOwnProperty(url)) {
        return callback(stories[url], url);
      }
      $http.defaults.headers.common.Accept = 'application/json, text/plain';
      $http({ method: 'GET', url: url })
        .then(function(response) { // Success
          switch(typeof response.data) {
            case 'string':
              stories[url] = addContextToGraph(extractFromHtml(response.data));
              return callback(stories[url], url);
            case 'object':
              stories[url] = addContextToGraph(graphify(response.data));
              return callback(response.data, url);
          }
        }, function(response) {    // Error
          console.log('cormorant.js: GET ' + url + ' returned status ' +
                      response.status);
          stories[url] = null;
          return callback(null, url);
      });
    };

    var getCombined = function(url1, url2, id, callback) {
      get(url1, function(story1) {
        if(!story1) {
          return callback(null, id);
        }
        get(url2, function(story2) {
          if(!story2) {
            return callback(story1, id);
          }
          var combinedStory = combine(story1, story2);
          callback(combinedStory, id);
        });
      });
    };

    return {
      getStory: get,
      getCombinedStory: getCombined,
      getStories: function() { return stories; }
    }
  });
