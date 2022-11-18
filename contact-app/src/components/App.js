import "./App.css";
import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { v4 as uuid } from "uuid";
import ContactDetails from "./ContactDetails";
import api from "../api/contacts";
import Navbar from "./Navbar";
import UpdateContact from "./UpdateContact";
//import ContctsCrudContextProvider from "../context/ContactCrudContexts";
export const AppContext = createContext();
function App() {
  const lOCAL_STORAGE_KEY = "contacts";
  const [contacts, setcontact] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //add Data(post call)
  const addContactHandler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post("/contacts", request);

    setcontact([...contacts, response.data]);
  };
  //update
  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const newContactList = contacts.map((con) => {
      if (con.id === contact.id) {
        con.name = contact.name;
        con.cell = contact.cell;
      }
      return con;
    });
    setcontact(newContactList);
  };
  //Delete
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setcontact(newContactList);
  };

  //Search
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newLists = contacts.filter((contact) => {
        return contact.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newLists);
    }
    else{
      setSearchResults(contacts);
    }
  };

  //retrieveContacts/Fetching data(post call)
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    if (response.data) setcontact(response.data);
  };

  useEffect(
    () => {
      const getAllContacts = async () => {
        const allContacts = await retrieveContacts();
        if (allContacts) setcontact(allContacts);
      };
      getAllContacts();
    },[]);

  return (
    <div className="App">
      <AppContext.Provider value={{ removeContactHandler }}>
        <Router>
          <Header />
          {/* <ContctsCrudContextProvider> */}
          <Navbar />
          <Routes>
            <Route
              path="/add"
              element={<AddContact addContactHandler={addContactHandler} />}
            />
            <Route
              path="/"
              element={
                <ContactList
                  contacts={searchTerm.length < 1 ? contacts : searchResults}
                  // getContactId={removeContactHandler}
                  term={searchTerm}
                  searchKey={searchHandler}
                />
              }
            />
            <Route path="/details/:id" element={<ContactDetails />} />
            <Route
              path="/update/:id"
              element={
                <UpdateContact updateContactHandler={updateContactHandler} />
              }
            />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
          {/* </ContctsCrudContextProvider> */}
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
