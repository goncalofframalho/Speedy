'use strict';

/**
 * @ngdoc function
 * @name speedyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the speedyApp
 */
angular.module('speedyApp')
 .controller('ResultsCtrl', [
   'ResultsSrv',

   function (ResultsSrv) {

     var self = this;

     self.data = [1.30, 1.40, 1.20, 1.56, 0.56, 2.00];

     self.setData = function () {
       //self.data = ResultsSrv.get();
       //self.data = [1.30, 1.40, 1.20, 1.56, 0.56, 2.00];
       console.log(self.data);
     }();

     self.getData = function () {
       return ResultsSrv.get();
     };

     self.labels = [
       1, 2, 3, 4, 5, 6
     ];

     self.series = [
       'Serie A'
     ];

  }]);
