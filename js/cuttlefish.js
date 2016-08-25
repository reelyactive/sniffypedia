/**
 * Copyright reelyActive 2016
 * We believe in an open Internet of Things
 */


DEFAULT_BUBBLE_SIZE = '240px';
BUBBLE_TEMPLATE_URL = '/bubble.html'; // May or may not need a leading slash!
TYPE_PERSON = 'Person';
TYPE_PRODUCT = 'Product';
TYPE_PLACE = 'Place';
TYPE_ORGANIZATION = 'Organization';
DEFAULT_IMAGE = {};
DEFAULT_IMAGE[TYPE_PERSON] = 'images/default-person.png';
DEFAULT_IMAGE[TYPE_PRODUCT] = 'images/default-product.png';
DEFAULT_IMAGE[TYPE_PLACE] = 'images/default-place.png';
DEFAULT_IMAGE_UNSUPPORTED = 'images/default-unsupported.png';
UNSUPPORTED_STORY_JSON = {
  "schema:name": "Unsupported Story",
  "schema:image": DEFAULT_IMAGE_UNSUPPORTED
};


angular.module('reelyactive.cuttlefish', [ 'ngAnimate', 'ui.bootstrap' ])

  .directive('bubble', function() {

    function link(scope, element, attrs) {

      function update() {
        scope.types = [];
        scope.size = scope.size || DEFAULT_BUBBLE_SIZE;
        scope.toggle = scope.toggle || false;
        scope.visible = scope.visible || [];

        if(scope.json && scope.json.hasOwnProperty("@graph")) {
          var graph = scope.json["@graph"];
          for(var cItem = 0; cItem < graph.length; cItem++) {
            switch(graph[cItem]["@type"]) {
              case 'schema:Person':
                scope.person = formatItem(graph[cItem], TYPE_PERSON);
                scope.types.push(TYPE_PERSON);
                break;
              case 'schema:Product':
                scope.product = formatItem(graph[cItem], TYPE_PRODUCT);
                scope.types.push(TYPE_PRODUCT);
                break;
              case 'schema:Place':
                scope.place = formatItem(graph[cItem], TYPE_PLACE);
                scope.types.push(TYPE_PLACE);
                break;
              case 'schema:Organization':
                scope.organization = formatItem(graph[cItem],
                                                TYPE_ORGANIZATION);
                scope.types.push(TYPE_ORGANIZATION);
                break;
            }
            scope.itemID = Bubble.generateID(graph[cItem]["@id"]);
          }
        }
        else {
          scope.product = UNSUPPORTED_STORY_JSON;
          scope.types.push(TYPE_PRODUCT);
          scope.unsupported = true;
        }
        //scope.types = Bubble.availableTypes(scope.visible, scope.types);
        if(scope.types.length > 0) {
          scope.current = scope.types[0];
          scope.bubble = new Bubble(scope);
        }
      }

      function formatItem(item, type) {
        if(!item.hasOwnProperty("schema:image")) {
          item["schema:image"] = DEFAULT_IMAGE[type];
        }
        return item;
      }
      
      scope.$on('$destroy', function() {
        scope.bubble.removed();
      });

      scope.$watch(attrs.json, function(json) {
        update();
      });
    }

    return {
      restrict: "E",
      scope: {
        json: "=",
        size: "@",
        toggle: "=",
        visible: "@"
      },
      link: link,
      templateUrl: BUBBLE_TEMPLATE_URL
    }
  });
