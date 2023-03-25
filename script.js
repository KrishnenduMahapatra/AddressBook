let contacts = [];

function addContact() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    if (name && email && phone && address) {
        contacts.push({ name, email, phone, address });
        displayContacts();
        clearFields();
    } else {
        alert("Please fill in all fields.");
    }
}

function displayContacts() {
    const contactList = document.getElementById("contacts");
    contactList.innerHTML = "";
    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${contact.name}</strong><br>
            Email: ${contact.email}<br>
            Phone: ${contact.phone}<br>
            Address: ${contact.address}<br>
            <button onclick="editContact(${i})">Edit</button>
            <button onclick="deleteContact(${i})">Delete</button>
        `;
        contactList.appendChild(li);
    }
}

function clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
}

function deleteContact(index) {
    contacts.splice(index, 1);
    displayContacts();
}

function editContact(index) {
    const contact = contacts[index];
    document.getElementById("name").value = contact.name;
    document.getElementById("email").value = contact.email;
    document.getElementById("phone").value = contact.phone;
    document.getElementById("address").value = contact.address;
    document.getElementById("submit").style.display = "none";
    document.getElementById("update").style.display = "inline-block";
    document.getElementById("update").addEventListener("click", function () {
        contacts[index] = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            address: document.getElementById("address").value,
        };
        displayContacts();
        clearFields();
        document.getElementById("submit").style.display = "inline-block";
        document.getElementById("update").style.display = "none";
    });
}

function searchContact() {
    const searchTerm = document.getElementById("search").value;
    const filteredContacts = contacts.filter(function (contact) {
        return (
            contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.address.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });
    displaySearchResults(filteredContacts);
}

function displaySearchResults(results) {
    const contactList = document.getElementById("contacts");
    contactList.innerHTML = "";
    for (let i = 0; i < results.length; i++) {
        const contact = results[i];
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${contact.name}</strong><br>
            Email: ${contact.email}<br>
            Phone: ${contact.phone}<br>
            Address: ${contact.address}<br>
            <button onclick="editContact(${i})">Edit</button>
            <button onclick="deleteContact(${i})">Delete</button>
        `;
        contactList.appendChild(li);
    }
}

displayContacts();
