import contactList from "./ContactList"
import contactForm from "./ContactForm"

const mainContainer = document.querySelector("#container")

mainContainer.innerHTML = /*html*/ `
<form action="">
  <fieldset>
    <label for "name">Name</label>
    <input type="text" name="name" id="name">
  </fieldset>
  <fieldset>
    <label for "title">Title</label>
    <input type="text name=" title" id="title">
  </fieldset>
  <fieldset>
    <label for "address">Address</label>
    <input type="text" name="address" id="address">
  </fieldset>
  <fieldset>
    <label for "phoneNumber">Phone Number</label>
    <input type="text" name="phoneNumber" id="phoneNumber">
  </fieldset>
  <button type="button" id="saveButton">Save Contact</button>
</form>
<section id="contactList"></section>
`

contactList.allContactsToDom()
contactForm.saveContactForm()