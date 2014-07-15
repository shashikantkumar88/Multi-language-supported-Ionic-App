angular.module('starter.controllers', ['pascalprecht.translate'])
        .controller('DashCtrl', function($scope) {
        })
        .controller('FriendsCtrl', function($scope, Friends, $translate) {
            $scope.curlang = $translate.use();
            $scope.friends = Friends.all($scope.curlang);
        })

        .controller('FriendDetailCtrl', function($scope, $stateParams, Friends, $translate) {
            $scope.curlang = $translate.use();
            $scope.friend = Friends.get($stateParams.friendId);
        })

        .controller('AccountCtrl', function($scope, $translate) {
            $scope.curlang = $translate.use();
            $scope.changeLanguage = function(key) {
                $translate.use(key);
                $scope.curlang = key;
            };
        });
