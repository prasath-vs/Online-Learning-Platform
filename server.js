// admin_dashboard.js

angular.module('adminDashboardApp', [])
    .controller('AdminController', function($scope, $http) {
        $scope.newCourse = {};
        $scope.courses = [];
        $scope.educators = [];

        // Fetch courses
        $http.get('/courses')
            .then(function(response) {
                $scope.courses = response.data;
            })
            .catch(function(error) {
                console.error('Error fetching courses:', error);
            });

        // Add course
        $scope.addCourse = function() {
            $http.post('/courses', $scope.newCourse)
                .then(function(response) {
                    $scope.courses.push(response.data);
                    $scope.newCourse = {};
                })
                .catch(function(error) {
                    console.error('Error adding course:', error);
                });
        };

        // Edit course
        $scope.editCourse = function(course) {
            // Implement edit functionality
        };

        // Delete course
        $scope.deleteCourse = function(course) {
            $http.delete('/courses/' + course._id)
                .then(function() {
                    var index = $scope.courses.indexOf(course);
                    $scope.courses.splice(index, 1);
                })
                .catch(function(error) {
                    console.error('Error deleting course:', error);
                });
        };

        // Approve educator
        $scope.approveEducator = function(educator) {
            // Implement approve functionality
        };

        // Decline educator
        $scope.declineEducator = function(educator) {
            // Implement decline functionality
  };
});