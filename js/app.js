angular.module('miniRouting', ['ui.router']).config(function($urlRouterProvider, $stateProvider) {

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'home/homeTmpl.html',
    controller: 'homeCtrl'
  })
  .state('settings', {
    url: '/settings',
    templateUrl: 'settings/settingsTmpl.html',
    controller: 'settingsCtrl'
  })
  .state('products', {
    url: '/products/:id',
    templateUrl: 'products/productsTmpl.html',
    controller: 'productsCtrl'
  });

  $urlRouterProvider.otherwise('/');

});
