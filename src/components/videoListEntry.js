angular.module('video-player')

  .component('videoListEntry', {
    bindings: {
      click: '<',
      entry: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html',
  });
