export default {

    loadContacts() {
        return fetch("http://localhost:8088/contacts")
            .then(response => response.json())
    },
    saveContact(contactToBeSaved) {
        console.log(contactToBeSaved)
        return fetch("http://localhost:8088/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactToBeSaved)
        }
        )
    }
}