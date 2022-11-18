// import { createContext, useContext, useState } from "react";
// import api from "../api/contacts";

// const createCrudContext = createContext();

// export function ContctsCrudContextProvider({ children }) {
//   const [contacts, setcontact] = useState([]);
//   //retrieveContacts/Fetching data(post call)
//   const retrieveContacts = async () => {
//     const response = await api.get("/contacts");
//    if(response.data) setcontact(response.data);
//   };
//   const value = {
//     value,retrieveContacts
//   };
//   return (
//     <ContctsCrudContext.Provider value={value}>
//       {children}
//     </ContctsCrudContext.Provider>
//   );
// }
// export function useContext() {
//   return useContext(ContactsCrudContext);
// }
