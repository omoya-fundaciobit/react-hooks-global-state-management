import React from "react";
import "./App.css";
// import ContactsContainer from "./componentes/ContactsContainer";
// import ContactFormContainer from "./componentes/ContactFormContainer";

import ContactsList from "./componentes/ContactsList";
import ContactForm from "./componentes/ContactForm";

import Store from "./store/Store";

function App() {
  return (
    <Store>
      {" "}
      <div className="App">
        <div className="row">
          <div className="column-left">
            <ContactForm></ContactForm>
          </div>
          <div className="column-right">
            {" "}
            <ContactsList></ContactsList>
          </div>
        </div>
      </div>
    </Store>
  );
}

export default App;
