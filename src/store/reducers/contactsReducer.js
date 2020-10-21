let initialState = [
  {
    id: 0,
    name: "Oscar",
    surnames: "Moya Mesa",
    phone: "971555554",
    email: "mail@mail.com",
    company: "Fundacio Bit",
    sector: "Tecnológico",
  },
];

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
    default:
      return state;
  }
};

export default contactsReducer;
