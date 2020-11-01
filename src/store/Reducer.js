const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_CONTACTS":
      return {
        ...state,
        contacts: action.contacts,
      };

    case "ADD_CONTACT":
      console.log("Adding");
      return {
        ...state,
        contacts: state.contacts.concat(action.newContact),
      };

    case "REMOVE_CONTACT":
      return {
        ...state,
        posts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
