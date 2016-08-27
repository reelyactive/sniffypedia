/*
 * This Sniffypedia is made available under the Open Database License:
 * http://opendatacommons.org/licenses/odbl/1.0/.
 * Any rights in individual contents of the database are licensed under
 * Creative Commons Attribution-ShareAlike 4.0 International:
 * https://creativecommons.org/licenses/by-sa/4.0/
 */


SNIFFYPEDIA_STORY = {
  "@context": {
    "schema": "http://schema.org/"
  },
  "@graph": [
    {
      "@id": "product",
      "@type": "schema:Product",
      "schema:name": "Sniffypedia",
      "schema:image": "http://sniffypedia.org/images/working-logo.png"
    }
  ]
};


/**
 * sniffypedia Module
 * All of the JavaScript specific to the Sniffypedia is contained inside this
 * angular module.  The only external dependencies are:
 * - AngularUI Bootstrap
 * - cormorant (reelyActive)
 * - cuttlefish (reelyActive)
 */
angular.module('sniffypedia', [ 'ui.bootstrap', 'reelyactive.cormorant',
                                'reelyactive.cuttlefish' ])


/**
 * InteractionCtrl Controller
 * Handles the manipulation of all variables accessed by the HTML view.
 */
.controller('InteractionCtrl', function($scope, cormorant) {

  // Variables accessible in the HTML scope
  $scope.index = sniffypedia_index;
  $scope.protocol = 'Select protocol';
  $scope.identifier = 'Select identifier';
  $scope.value = 'Select value';
  $scope.story = SNIFFYPEDIA_STORY;

  $scope.updateStory = function(url) {
    delete $scope.story;
    cormorant.getStory(url, function(story, url) {
      $scope.story = story;
    });
  }

});
