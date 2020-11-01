const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_CONTACTS":
      return {
        ...state,
        contacts: action.contacts,
      };

    case "ADD_CONTACT":
      let newContact = action.payload;
      let existingIds = state.contacts.map((contact) => {
        return contact.id;
      });
      let newId = Math.max(...existingIds) + 1;
      newContact.id = newId;
      return {
        ...state,
        contacts: state.contacts.concat(newContact),
      };

    case "REMOVE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    // case "SET_ERROR":
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };

    default:
      return state;
  }
};

export default Reducer;
