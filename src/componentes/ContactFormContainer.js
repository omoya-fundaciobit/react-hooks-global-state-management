import { connect } from "react-redux";
import { addContact } from "../store/actions/actions";

// Importamos el formulario de Todos
import ContactForm from "../componentes/ContactForm";

const mapStateToProps = (state) => ({});

// Despacharemos la acción de tipo addContact y se la asignaremos
// a la prop llamada 'submit' del componente TodoList
const mapDispatchToProps = (dispatch) => {
  return {
    submit: (name, surnames, phone, email, company, sector) => {
      // Despacha la acción que actualiza el store
      dispatch(addContact(name, surnames, phone, email, company, sector)); // LO QUE REALMENTE SE EJECUTA ES ESTO
    },
  };
};

const ContactFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);

export default ContactFormContainer;
