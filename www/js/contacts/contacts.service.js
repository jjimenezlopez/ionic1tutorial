angular.module('app.contacts')

.service('ContactsService', function ($http) {
  var me = this;

  me.getContacts = getContacts;
  me.getContact = getContact;

  function getContacts() {
    return $http.get('http://jsonplaceholder.typicode.com/users')
      .then(function (result) {
        return result.data;
      });
  }

  function getContact(id) {
      return $http.get('http://jsonplaceholder.typicode.com/users/' + id)
        .then(function (result) {
          return result.data;
        });
  }

  return me;
});
