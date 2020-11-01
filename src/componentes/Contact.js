import React, { useState, useContext } from "react";
import { Context } from "../store/Store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Contact = (props) => {
  const [fullData, setFullData] = useState(false);
  const [state, dispatch] = useContext(Context);

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

  let mySector = props.sector;
  return (
    <li style={setBackgroundColor(mySector)}>
      <div
        className="row"
        onMouseEnter={() => setFullData(!fullData)}
        onMouseLeave={() => setFullData(!fullData)}
      >
        <div className="contact-column-left">
          <div className="avatar-container">
            {" "}
            <img
              className="avatar"
              src={`https://avatars.dicebear.com/api/bottts/${props.surnames.slice(
                2,
                -2
              )} ${props.sector}.svg `}
              alt={`${props.name} ${props.surnames}`}
              width="50"
              height="50"
            ></img>
          </div>{" "}
        </div>
        <div className="contact-column-right">
          {fullData ? (
            <div>
              <p>
                {`NOMBRE: ${props.name} ${props.surnames}`}
                <FontAwesomeIcon
                  style={{ float: "right" }}
                  onClick={() => {
                    console.log("deleting", props.id);
                    let payload = props.id;
                    dispatch({ type: "REMOVE_CONTACT", payload });
                  }}
                  icon={faTrash}
                />
              </p>
              <p>{`TELÉFONO: ${props.phone}`}</p>
              <p>{`EMAIL: ${props.email}`}</p>
              <p>{`EMPRESA: ${props.company}`}</p>
              <p>{`Sector: ${props.sector}`}</p>
            </div>
          ) : (
            <div>
              <p className="contact-header">{`${props.name}`}</p>
              <p className="contact-header">{`${props.phone}`}</p>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default Contact;
