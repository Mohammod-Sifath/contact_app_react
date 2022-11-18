import React, { useEffect,useRef } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  // const {contacts,retrieveContacts}=useContactsCrud();
  // const deleteContactHandler = (id) => {
  //   props.getContactId(id);
  // };
  // useEffect(()=>{
  // },[]);

  //const inputEl=useRef("");
  const getSearchTerm=(e)=>{
    props.searchKey(e.target.value);
  }
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        // clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className="bg-[#c084fc] w-screen h-screen">
      <div className=" flex justify-around text-lg font-mono">
        <h2>Contact List</h2>
        <Link to="/add">
          <button className="rounded-full bg-gray-400 px-2 text-white">Add Contact</button>
        </Link>
      </div>
      <div>
        <input
          //ref={inputEl}
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          placeholder="search contact"
          value={props.term}
          onChange={getSearchTerm}
        />
        <i className="search icon"></i>
      </div>
      <div>{renderContactList.length>0 ? renderContactList:"No contacts available"}</div>
    </div>
  );
};
export default ContactList;
