angular.module('educatorDashboardApp', [])
    .controller('EducatorController', function($scope) {
        // Initialize newCourse object for adding courses
        $scope.newCourse = {};

        // Function to add a new course
        $scope.addCourse = function() {
            // Add course logic here
            // Once course is added, it will be displayed in the general public dashboard upon admin approval
            alert("Course added successfully!");
            // Clear the form after adding course
            $scope.newCourse = {};
        };

        // Function to send request for course approval to admin
        $scope.sendRequest = function() {
            // Send request logic here
            alert("Request sent to admin for course approval!");
        };
    });
