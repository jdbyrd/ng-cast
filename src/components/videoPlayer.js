angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      currentVideo: '<'
    },
    controller: function() {
    
      this.urlMaker = function(id) {
        let prefix = 'https://www.youtube.com/embed/';
        return prefix += id;
      };
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
