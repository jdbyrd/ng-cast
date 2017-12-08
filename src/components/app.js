angular.module('video-player')

  .component('app', { 
    templateUrl: 'src/templates/app.html',
    controller: function() {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      
      this.click = function(clickedVideo) {
        this.currentVideo = clickedVideo;
      };
      this.click = this.click.bind(this);
    }
  });