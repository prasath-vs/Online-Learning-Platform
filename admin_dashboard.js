angular.module('adminDashboardApp', [])
    .controller('AdminController', function($scope) {
        // Sample data for courses and educators (replace with actual data)
        $scope.courses = [
            { id: 1, name: 'Course 1', description: 'Description for Course 1' },
            { id: 2, name: 'Course 2', description: 'Description for Course 2' },
            { id: 3, name: 'Course 3', description: 'Description for Course 3' }
        ];

        // Function to add a new course
        $scope.addCourse = function() {
            // Add new course to localStorage
            localStorage.setItem('courses', JSON.stringify($scope.courses));
        };

        // Function to edit a course
        $scope.editCourse = function(course) {
            // Edit course logic
            // Update localStorage after editing
            localStorage.setItem('courses', JSON.stringify($scope.courses));
        };

        // Function to delete a course
        $scope.deleteCourse = function(course) {
            // Delete course logic
            // Update localStorage after deleting
            localStorage.setItem('courses', JSON.stringify($scope.courses));
        };
    });



admin_dashboard.js
