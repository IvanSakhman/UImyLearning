'use strict';
var angular = require('angular');
module.exports = angular
  .module('app.main.component', [])
  .component('appMain', {
    templateUrl: '/app/js/main/templates/main.template.html',
    controller: MainController,
    transclude: true,
    $routeConfig:
      [
        {path: '/cars', name: 'CarsLink', component: 'carInfoComponent', useAsDefault: true },
        {path: '/contacts', name: 'ContactsLink', component: 'contacts' }
      ]
    });

function MainController(){
  var ctrl = this;
}
