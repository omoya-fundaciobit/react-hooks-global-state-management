// Id Incremental para identificar las Tareas (Todos)
let nextContactId = 0;

export const addContact = (name, surnames, phone, email, company, sector) => {
  return {
    type: "ADD_CONTACT",
    payload: {
      id: nextContactId++,
      name: name,
      surnames: surnames,
      phone: phone,
      email: email,
      company: company,
      sector: sector,
    },
  };
};

export const deleteContact = (id) => {
  return {
    type: "DELETE_CONTACT",
    payload: { id },
  };
};

// export const showFullContact = (id) => {
//   return {
//     type: "SHOW_FULL_CONTACT",
//     payload: { id },
//   };
// };
