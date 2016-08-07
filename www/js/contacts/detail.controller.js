angular.module('app.contacts')

.controller('DetailController', function ($stateParams, ContactsService) {
  var me = this;

  initialize();

  function initialize() {
    ContactsService.getContact($stateParams.contactId)
      .then(function (contact) {
        me.contact = contact;
      });
  }

  return me;
});
