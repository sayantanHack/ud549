describe('Address Book', function(){

  var addressBook , thisContact;

  beforeEach(function() {
    addressBook = new AddressBook(),
    thisContact = new Contact();
  })
  it('should be able to add a contact', function(){

      addressBook.addContact(thisContact);

      expect(addressBook.getContact(0)).toBe(thisContact)
  });

// Deleting the contacts
  it('should be able to delete a contact', function(){
    var addressBook = new AddressBook(),
    thisContact = new Contact();

    addressBook.addContact(thisContact);
    addressBook.deleteContact(0);

    // expect is here used for if element are deleted then it will no longer show it.
    expect(addressBook.getContact(0)).not.toBeDefined();
  });

});

describe('Async Address Book', function(){
  it('should grab initial contacts', function(){
      var addressBook = new AddressBook();

      addressBook.getInitialContacts();
      expect.(addressBook.initialComplete).toBe(true);
  });
});
