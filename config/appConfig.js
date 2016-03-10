'use strict';

/**
 * @ngdoc constant
 * @name ingredifriendswebApp.env
 * @description
 * # env
 * Provider in the ingredifriendswebApp.
 */
angular.module('ingredifriendswebApp')
  .constant('ingredifriendswebConfig', {
    api: {
      url: '@@api.url'
    }
  });
