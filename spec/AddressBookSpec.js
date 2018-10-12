describe('Address Book', function(){
  it('should be able to add a contact', function(){
      var addressBook = new AddressBook(),
          thisContact = new Contact();

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
