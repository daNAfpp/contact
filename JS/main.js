function addContact() {
  let img = document.getElementById("img");
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let contact = {
    img: img,
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
  };
  let photo = document.querySelector("#photo-upload");

  var contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  contacts.push(contact);

  localStorage.setItem("contacts", JSON.stringify(contacts));

  clearForm();
  displayContacts();
}

function deleteContact() {}

function clearForm() {
  document.getElementById("img").value = "";
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("phoneNumber").value = "";
}

function displayContacts() {
  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

  let contactList = document.getElementById("contactList");
  contactList.innerHTML = "";

  contacts.forEach(function (contact, index) {
    let listItem = document.createElement("li");
    listItem.textContent =
      contact.img +
      " " +
      contact.firstName +
      " " +
      contact.lastName +
      " - " +
      contact.phoneNumber;
    contactList.appendChild(listItem);
  });
}
function displayContacts() {
  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  let contactContainer = document.getElementById("contact-container1");

  console.log(contactContainer);

  contactContainer.innerHTML = "";

  contacts.forEach(function (contact, index) {
    let contactDiv = document.createElement("div");
    contactDiv.textContent =
      contact.firstName + " " + contact.lastName + " - " + contact.phoneNumber;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.onclick = function () {
      deleteContact(index);
    };

    let editButton = document.createElement("button");
    editButton.textContent = "Редактировать";
    editButton.onclick = function () {
      editContact(index);
    };

    contactDiv.appendChild(deleteButton);
    contactDiv.appendChild(editButton);

    contactContainer.appendChild(contactDiv);
  });
}

displayContacts();
