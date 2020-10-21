import { connect } from "react-redux";

import ContactsList from "./ContactsList";

const mapStateToProps = (state) => {
  return {
    contacts: state.contactsState,
  };
};

const mapDispatchToProps = (dispatch) => {};

const ContactsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsList);

export default ContactsContainer;
