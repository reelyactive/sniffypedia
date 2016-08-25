/**
 * Copyright reelyActive 2016
 * We believe in an open Internet of Things
 */


/**
 * visualisation Module
 * All of the JavaScript specific to the visualisation is contained inside this
 * angular module.  The only external dependencies are:
 * - cormorant and cuttlefish (reelyActive)
 */
angular.module('visualisation', [ 'reelyactive.cormorant',
                                  'reelyactive.cuttlefish' ])

/**
 * BubbleCtrl Controller
 * Handles the manipulation of all variables accessed by the HTML view.
 */
.controller('BubbleCtrl', function($scope, $location, cormorant) {
  var url = $location.absUrl();

  cormorant.getStory(url, function(story, url) {
    $scope.story = story;
  });
});
