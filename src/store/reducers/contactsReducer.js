let initialState = [];

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          surnames: action.payload.surnames,
          phone: action.payload.phone,
          email: action.payload.email,
          company: action.payload.company,
          sector: action.payload.sector,
        },
      ];

    case "DELETE_CONTACT":
      return initialState.filter((contact) => contact.id !== action.payload.id);
    default:
      return state;
  }
};

export default contactsReducer;
