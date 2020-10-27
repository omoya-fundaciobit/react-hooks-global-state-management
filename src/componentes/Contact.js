import React, { useState } from "react";
// import "../../src/styles/ContactContainer.css";

const Contact = (props) => {
  const [visible, setVisible] = useState(false);

  const setBackgroundColor = (sector) => {
    if (sector === "Tecnología") {
      return { backgroundColor: "lightblue" };
    } else if (sector === "Agricultura") {
      return { backgroundColor: "lightgreen" };
    } else if (sector === "Investigación") {
      return { backgroundColor: "lightyellow" };
    }
    return null;
  };

  console.log(visible);
  let mySector = props.sector;
  return (
    <li style={setBackgroundColor(mySector)}>
      {/* <li style={{ backgroundColor: "ligthblue" }}> */}
      <p
        className="contact-header"
        onClick={() => setVisible(!visible)}
      >{`${props.name} ${props.phone}`}</p>
      {visible ? (
        <div>
          <p>{`NOMBRE: ${props.name} ${props.surnames}`}</p>
          <p>{`TELÉFONO: ${props.phone}`}</p>
          <p>{`EMAIL: ${props.email}`}</p>
          <p>{`EMPRESA: ${props.company}`}</p>
          <p>{`Sector: ${props.sector}`}</p>
        </div>
      ) : null}
    </li>
  );
};

export default Contact;
