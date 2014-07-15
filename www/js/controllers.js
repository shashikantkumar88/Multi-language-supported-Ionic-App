angular.module('starter.controllers', ['pascalprecht.translate'])
        .config(function($translateProvider) {
            $translateProvider.useStaticFilesLoader({
                prefix: 'json/',
                suffix: '.json'
            });
            $translateProvider.preferredLanguage('en-US');
        })
        .controller('DashCtrl', function($scope) {
        })

        .controller('FriendsCtrl', function($scope, Friends) {
            $scope.friends = Friends.all();
        })

        .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
            $scope.friend = Friends.get($stateParams.friendId);
        })

        .controller('AccountCtrl', function($scope, $translate) {
            $scope.changeLanguage = function(key) {
                $translate.use(key);
            };
        });
