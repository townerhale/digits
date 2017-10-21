import { Contacts } from '../../api/contacts/contacts.js';
import { Meteor } from 'meteor/meteoor';

Meteor.publish('Contacts', function publishContactsData(){
  return Contacts.find();
});
