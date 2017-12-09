angular.module('video-player')

  .component('app', { 
    templateUrl: 'src/templates/app.html',
    controller: function(youTube) {
      
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      
      this.searchApi = function(input) {
        youTube.getVideos(input, this.search);
      };

      this.search = function(results) {
        this.videos = results;
        this.currentVideo = results[0];
      };
      
      this.click = function(clickedVideo) {
        this.currentVideo = clickedVideo;
      };
      
      this.click = this.click.bind(this);
      this.search = this.search.bind(this);
      this.searchApi = this.searchApi.bind(this);
      
      youTube.getVideos('rick roll', this.search);
    }
  });