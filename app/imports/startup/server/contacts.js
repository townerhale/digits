import { Contacts} from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  { first: 'Phillip',
    last: 'Johnson',
    address: 'blah',
    telephone: '322',
    email: 'blah@edu'
},
{
  first: 'Phillip',
  last: 'Johnson',
    address: 'blah',
    telephone: '322',
    email: 'blah@edu'},

  {
    first: 'Phillip',
    last: 'Johnson',
      address: 'blah',
      telephone: '322',
      email: 'blah@edu'},

  {first: 'Phillip', last: 'Johnson', address: 'blah', telephone: '322', email: 'blah@edu'},

];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactsSeeds, function seedContacts(stuff) {
    Contacts.insert(stuff);
  });
}
