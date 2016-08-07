angular.module('app.contacts')

.controller('ContactsController', function ($ionicLoading, ContactsService) {
  var me = this;

  initialize();

  function initialize() {
    $ionicLoading.show();

    ContactsService.getContacts()
      .then(function (contacts) {
        $ionicLoading.hide();
        me.contacts = contacts;
      });
  }

  return me;
});
