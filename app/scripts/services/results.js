'use strict';

/**
 * @ngdoc service
 * @name wideCmsAngularApp.templateColor
 * @description
 * # user/view
 * Service in the wideCmsAngularApp.
 */
angular.module('speedyApp').factory('ResultsSrv', [
    function () {

        var data = [
        ];

        var storedData = JSON.parse(window.localStorage.getItem('speedy_results'));

        if (storedData === null || storedData.length === 0)
        {
            storedData = data;
            localStorage.setItem('speedy_results', JSON.stringify(storedData));
        }

        return {
            get: function () {
                return data;
            },
            put: function (arr) {
                data.push(arr.time);
                localStorage.setItem('speedy_results', JSON.stringify(data));
            },
            delete: function (key) {
                data.splice(key, 1);
            }
        };
    }
]);
