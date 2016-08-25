/**
 * Copyright reelyActive 2016
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
      return json;
    }

    var get = function(url, callback) {
      if(!url || (typeof url !== 'string')) {
        return callback(null, null);
      }
      if(stories.hasOwnProperty(url)) {
        return callback(stories[url], url);
      }
      $http.defaults.headers.common.Accept = 'application/json, text/plain';
      $http.get(url)
        .success(function(data, status, headers, config) {
          switch(typeof data) {
            case 'string':
              data = extractFromHtml(data);
            case 'object':
              stories[url] = data;
              callback(data, url);
          }
        })
        .error(function(data, status, headers, config) {
          console.log('cormorant: GET ' + url + ' returned status ' + status);
          stories[url] = null;
          callback(null, url);
        });
    };

    return {
      getStory: get,
      getStories: function() { return stories; }
    }
  });
