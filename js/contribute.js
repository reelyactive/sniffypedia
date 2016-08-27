/*
 * This Sniffypedia is made available under the Open Database License:
 * http://opendatacommons.org/licenses/odbl/1.0/.
 * Any rights in individual contents of the database are licensed under
 * Creative Commons Attribution-ShareAlike 4.0 International:
 * https://creativecommons.org/licenses/by-sa/4.0/
 */


/**
 * Contribute Module
 * All of the JavaScript specific to the contribute page is contained inside
 * this angular module.  The only external dependencies are:
 * - AngularUI Bootstrap
 * - cormorant (reelyActive)
 * - cuttlefish (reelyActive)
 */
angular.module('contribute', [ 'ui.bootstrap', 'reelyactive.cormorant',
                               'reelyactive.cuttlefish' ])


/**
 * ContributionCtrl Controller
 * Handles the manipulation of all variables accessed by the HTML view.
 */
.controller('ContributionCtrl', function($scope, cormorant) {

  // Variables accessible in the HTML scope
  $scope.graph = { 
    product: { "@id": "product", "@type": "schema:Product" }
  };
  $scope.json = {
    "@context": { "schema": "http://schema.org/" },
    "@graph": [ $scope.graph.product ]
  };
  $scope.product = {};

  // Handle representation form change
  $scope.change = function () {
    for(var key in $scope.product) {
      if($scope.product.hasOwnProperty(key)) {
        if(key === 'manufacturer') {
          var hasNonEmptyManufacturerField = false;
          $scope.graph.product["schema:manufacturer"] = 
                                         { "@type": "schema:Organization" };
          for(var field in $scope.product.manufacturer) {
            if($scope.product.manufacturer.hasOwnProperty(field)) {
              if(!$scope.product.manufacturer[field].length) {
                delete $scope.graph.product["schema:manufacturer"][field];
              }
              else {
                hasNonEmptyManufacturerField = true;
                $scope.graph.product["schema:manufacturer"]["schema:" + field]
                                         = $scope.product.manufacturer[field];
              }
            }
          }
          if(!hasNonEmptyManufacturerField) {
            delete $scope.graph.product["schema:manufacturer"];
          }
        }
        else if(!$scope.product[key].length) {
          delete $scope.graph.product["schema:" + key];
        }
        else {
          $scope.graph.product["schema:" + key] = $scope.product[key];
        }
      }
    }
  };


  // Fetch story using cormorant
  $scope.fetchStory = function(url) {
    cormorant.getStory(url, function(story) {
      if(story) {
        $scope.fetchedStory = JSON.stringify(story, null, "  ");
      }
      else {
        $scope.fetchedStory = 'No JSON-LD representation of your product was found at the fetched URL.  Try again?';
      }
    });
  }

});
