'use strict';

/**
 * @ngdoc function
 * @name speedyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the speedyApp
 */
angular.module('speedyApp')
 .controller('CounterCtrl', [
   '$timeout',
   '$interval',
   'dateFilter',
   'ResultsSrv',

   function ($timeout, $interval, dateFilter, ResultsSrv) {

     var self = this;

     self.fCounting = false;
     self.fInspect = false;
     self.inspectTime = '0';
     self.timeFormat = 'mm:ss';
     self.currentTime = 0;
     self.timer = dateFilter(new Date(self.currentTime), self.timeFormat);

     self.start = function() {
       console.log('Started');
       self.fInspect = false;
       self.fCounting = true;

       self.interval = $interval( function() {
         self.currentTime += 1000;
         self.timer = dateFilter(new Date(self.currentTime), self.timeFormat);
         console.log('Timer: ' + self.currentTime);
       }, 1000);

     };

     self.stop = function() {
       console.log('Stopped');
       self.fCounting = false;

       if (self.interval) {
         $interval.cancel(self.interval);
       }

       var newTime = {
         'date': dateFilter(new Date(), 'd/M/yy'),
         'time': self.timer,
         'inspection_time': self.inspectTime
       };
       //console.log(newTime);
       ResultsSrv.put(newTime);
     };

     self.inspect = function(time) {
       if (!self.fInspect && !self.fCounting) {
         console.log('Inspecting');
         self.fInspect = true;

         $timeout(function() {
             self.start();
         }, time);
       }
     };

     self.reset = function() {
       self.fCounting = false;
       self.fInspect = false;
       self.timer = '00.00';
     };

  }]);
