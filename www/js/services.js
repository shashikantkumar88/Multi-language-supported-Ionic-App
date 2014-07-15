angular.module('starter.services', [])

        /**
         * A simple example service that returns some data.
         */
        .factory('Friends', function($http, $translate) {
//            // Might use a resource here that returns a JSON array
//
//            // Some fake testing data
            var friends = [];
            return {
                all: function() {
                    var lists = [];
                    $http.get('assets/friendlist.json').success(
                            function(data) {
                                friends = data;
                                for (var i = 0; i < friends.length; i++) {
                                    if (friends[i].lang === $translate.use()) {
                                        lists.push(friends[i]);
                                    }
                                }
                            }
                    );
                    return lists;
                },
                get: function(friendId) {
                    // Simple index lookup
                    return friends[friendId - 1];
                }
            };
        });
