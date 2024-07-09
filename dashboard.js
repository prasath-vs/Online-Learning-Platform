angular.module('dashboardApp', [])
    .controller('DashboardController', function($scope, $window) {
        // Retrieve user information from localStorage
        var userEmail = localStorage.getItem('userEmail');
        var userType = localStorage.getItem('userType');

        // Set user information in the scope
        $scope.userEmail = userEmail;
        $scope.userType = userType;

        // Function to logout
        $scope.logout = function() {
            // Clear user information from localStorage
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userType');

            // Redirect to login page
            $window.location.href = 'login.html';
        };
    });
