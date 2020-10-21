import React from "react";
import Contact from "./Contact";

const ContactsList = ({ contacts }) => {
  return (
    <div className="contacts-list">
      <h1>Mis contactos</h1>
      <ul>
        {contacts.map((contact) => (
          <Contact
            name={contact.name}
            surnames={contact.surnames}
            phone={contact.phone}
            email={contact.email}
            company={contact.company}
            sector={contact.sector}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
