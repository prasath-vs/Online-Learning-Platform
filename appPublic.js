// app.js
var app = angular.module('eLearningApp', []);

app.controller('dashboardController', function($scope) {
  // Example course data
  $scope.courses = [
    { 
      title: 'Course 1',
      description: 'Description for Course 1',
      videoUrl: 'vid.mp4',
      pdfUrl: 'course1.pdf'
    },
    { 
      title: 'Course 2',
      description: 'Description for Course 2',
      videoUrl: 'vid2.mp4',
      pdfUrl: 'course2.pdf'
    },
    { 
        title: 'Course 3',
        description: 'Description for Course 3',
        videoUrl: 'vid3.mp4',
        pdfUrl: 'course2.pdf'
      },
      { 
        title: 'Course 4',
        description: 'Description for Course 4',
        videoUrl: 'vid4.mp4',
        pdfUrl: 'course2.pdf'
      },
    // Add more courses here...
  ];
});
