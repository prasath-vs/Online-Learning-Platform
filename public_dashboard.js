angular.module('publicDashboardApp', [])
    .controller('PublicController', function($scope) {
        // Retrieve courses from localStorage
        var storedCourses = localStorage.getItem('courses');
        if (storedCourses) {
            $scope.courses = JSON.parse(storedCourses);
        } else {
            $scope.courses = []; // Set default value if no courses are stored
        }
    });
