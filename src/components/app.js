angular.module('video-player')

  .component('app', { 
    templateUrl: 'src/templates/app.html',
    controller: function(youTube) {
      
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      this.search = function(results) {
        this.videos = results;
        this.currentVideo = results[0];
      };
      this.click = function(clickedVideo) {
        this.currentVideo = clickedVideo;
      };
      this.click = this.click.bind(this);
      this.search = this.search.bind(this);
      youTube.getVideos('rick roll', this.search);
    }
  });