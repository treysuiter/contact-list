import contactCollection from "./ContactCollection.js"
import contactHTMLBuilder from "./ContactHTMLBuilder.js"

// A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component.

export default {
    allContactsToDom() {
        contactCollection.loadContacts()
        .then(response => {
            const contactListContainer = document.querySelector("#contactList")
            let contactListHTML = ""
            for (let contact of response) {
                contactListHTML += contactHTMLBuilder.contactHTML(contact)
            }
            contactListContainer.innerHTML = contactListHTML
        })
    }
}










// const buildAllHtml = (allContacts) => {
//     const contactListContainer = document.querySelector("#container")
//     let contactListHTML = ""
//     for (singleContact in allContacts) {
//         contactListHTML += contactHTMLBuilder.contactHTML(contact)
//     }
//     contactListContainer.innerHTML = contactListHTML

// }
// export default {
//     buildContactList() {
//         contactCollection().then(buildAllHtml(response))
//     }
// }
