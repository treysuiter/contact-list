
export default {
    contactHTML: (contact) => {
        return `
        <div class="contact">
        <h3>Name: ${contact.name}</h3>
        <p>Title: ${contact.title}</p>
        <p>Address: ${contact.address}</p>
        <p>Phone Number: ${contact.phoneNumber}</p>
        </div>
        `
    }
}