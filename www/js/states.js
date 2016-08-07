angular.module('app')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html'
    })
    .state('app.contacts', {
      url: '/contacts',
      views: {
        'menuContent': {
          templateUrl: 'js/contacts/templates/contacts.html',
          controller: 'ContactsController as ContactsController'
        }
      }
    })
    .state('app.detail', {
      url: '/detail/:contactId',
      views: {
        'menuContent': {
          templateUrl: 'js/contacts/templates/detail.html',
          controller: 'DetailController as DetailController'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/contacts');
});
