import React from "react";
import "../../src/styles/ContactContainer.css";

const Contact = (props) => {
  return (
    <li>
      <p className="contact-header">{`${props.name} ${props.phone}`}</p>
      <div className="contact-secondary-data">
        <p>{`NOMBRE: ${props.name} ${props.surnames}`}</p>
        <p>{`TELÉFONO: ${props.phone}`}</p>
        <p>{`EMAIL: ${props.email}`}</p>
        <p>{`EMPRESA: ${props.company}`}</p>
        <p>{`Sector: ${props.sector}`}</p>
      </div>
    </li>
  );
};

export default Contact;
