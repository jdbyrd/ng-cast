angular.module('video-player')

  .component('app', { 
    templateUrl: 'src/templates/app.html',
    controller: function(youTube) {
      
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      
      this.searchResults = function(input) {
        youTube.search(input, this.selectVideo);
      };

      this.selectVideo = function(results) {
        this.videos = results;
        this.currentVideo = results[0];
      };
      
      this.onClick = function(clickedVideo) {
        this.currentVideo = clickedVideo;
      };
      
      this.onClick = this.onClick.bind(this);
      this.selectVideo = this.selectVideo.bind(this);
      this.searchResults = this.searchResults.bind(this);
      
      youTube.search('rick roll', this.selectVideo);
    }
  });