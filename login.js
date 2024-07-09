angular.module('loginApp', [])
    .controller('LoginController', function($scope, $window) {
        $scope.login = function() {
            // Perform login authentication and retrieve user role (admin, educator, general)
            var userRole = $scope.userType;
            
            // Redirect to corresponding dashboard based on user role
            switch (userRole) {
                case "admin":
                    $window.location.href = 'admin_dashboard.html';
                    break;
                case "educator":
                    $window.location.href = 'educator_dashboard.html';
                    break;
                case "general":
                    $window.location.href = 'newPublic.html';
                    break;
                default:
                    alert("Invalid user role!");
            }
        };
    });
