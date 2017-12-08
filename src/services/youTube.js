angular.module('video-player')
  .service('youTube', function($http) {
    this.getVideos = function(query) {
      options = {
        q: query,
        maxResults: 5,
        videoEmbeddable: 'true',
        type: 'video',
        part: 'snippet',
        key: window.YOUTUBE_API_KEY
      };
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        data: options
      }).then(function successCallback(response) {
        console.log('success');
      }, function errorCallback(response) {
        console.log('error');
      });
    };
  });
