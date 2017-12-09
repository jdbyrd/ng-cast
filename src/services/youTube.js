angular.module('video-player')
  .service('youTube', function($http) {
    this.getVideos = function(query, callback) {
      options = {
        q: query,
        part: 'snippet',
        maxResults: 5,
        videoEmbeddable: 'true',
        type: 'video',
        key: window.YOUTUBE_API_KEY
      };
      params = {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY
      };
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: options,
        //data: options
      }).then(function successCallback(response) {
        console.log('success');
        console.log('success', response.data.items);
        callback(response.data.items);
      }, function errorCallback(response) {
        console.log('error', response);
      });
    };
  });
