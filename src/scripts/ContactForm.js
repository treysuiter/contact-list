import contactCollection from "./ContactCollection"
import contactList from "./ContactList.js"

export default {
    saveContactForm () {

        const saveButton = document.querySelector("#saveButton")

        saveButton.addEventListener("click", () => {
        
        const name = document.querySelector("#name")
        const title = document.querySelector("#title")
        const address = document.querySelector("#address")
        const phoneNumber = document.querySelector("#phoneNumber")

        const newContact = {
            "name": name.value,
            "title": title.value,
            "address": address.value,
            "phoneNumber": phoneNumber.value
        }

        contactCollection.saveContact(newContact)
        .then(contactList.allContactsToDom)



    })}
}