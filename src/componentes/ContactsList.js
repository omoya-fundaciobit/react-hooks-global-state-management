import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/Store";
import Contact from "./Contact";
import "../styles/ContactList.css";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const ContactsList = ({ props }) => {
  const [input, setInput] = useState("");
  const [state, dispatch] = useContext(Context);

  // ADD CONTACTS AFTER COMPONENT MOUNT
  // Retrieve the posts array and exclusion terms. Executes only on mounting.
  useEffect(() => {
    axios
      .get("http://localhost:4000/")
      .then((result) => {
        let contacts = result.data.results;
        dispatch({ type: "SET_CONTACTS", contacts });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // FILTER CONTACTS
  const inputValueisSubstringOfContact = (contact) => {
    return (
      contact.name.includes(input) ||
      contact.surnames.includes(input) ||
      contact.sector.includes(input) ||
      contact.company.includes(input)
    );
  };

  let filteredContacts = state.contacts
    ? state.contacts.filter(inputValueisSubstringOfContact)
    : [];

  return (
    <div className="contacts-list">
      <span>
        <input
          className="search-area"
          placeholder="Busca contactos"
          onChange={(e) => setInput(e.target.value)}
        ></input>
      </span>
      <span>
        {" "}
        <FontAwesomeIcon
          style={{ float: "right", color: "lightgray" }}
          icon={faSearch}
        />
      </span>

      <ul>
        {filteredContacts.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
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
