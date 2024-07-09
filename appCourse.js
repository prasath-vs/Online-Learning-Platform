// app.js
var app = angular.module('courseApp', []);

app.controller('courseController', function($scope) {
  // Example video data
  $scope.videos = [
    { title: 'Course 1', url: 'vid.mp4' },
    { title: 'Course 2', url: 'vid2.mp4' },
    { title: 'Course 3', url: 'vid3.mp4' },
    { title: 'Course 4', url: 'vid4.mp4' },
    // Add more videos here...
  ];

  // Function to play video
  $scope.playVideo = function(video) {
    // You can add logic here to play the video
    console.log('Playing video:', video.title);
  };
});
