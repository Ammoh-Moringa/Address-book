// business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

// business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}


function Addresses(street, city, county) {
  this.street = street;
  this.city = city;
  this.county = county;
}


Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
}

// user interface logic
$(document).ready(function () {
  $("form#new-contact").submit(function (event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedStreet = $("input#new-street").val();
    var inputtedCity = $("input#new-city").val();
    var inputtedCounty = $("input#new-county").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);
    var newAddress = new Addresses(inputtedStreet, inputtedCity, inputtedCounty);
    newContact.addresses.push(newAddress);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function () {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".street").text(newAddress.street);
      $(".city").text(newAddress.city);
      $(".county").text(newAddress.county)
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-street").val("");
    $("input#new-city").val("");
    $("input#new-county").val("");

  });


  $("#add-address").click(function () {
    $("#new-addresses").append('<div class="new-address">' +
      '<div class="form-group">' +
      '<label for="new-street">Street</label>' +
      '<input type="text" class="form-control new-street">' +
      '</div>' +
      '<div class="form-group">' +
      '<label for="new-city">City</label>' +
      '<input type="text" class="form-control new-city">' +
      '</div>' +
      '<div class="form-group">' +
      '<label for="new-county">County</label>' +
      '<input type="text" class="form-control new-county">' +
      '</div>' +
      '</div>');
  });
});