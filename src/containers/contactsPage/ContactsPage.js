import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicates, setDuplicates] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

    const isDuplicated = contacts.some((contact) => contact.name === name);

    if (!isDuplicated) {
      addContact(name, phone, email);
      // Clear the form input fields
      setName("");
      setPhone("");
      setEmail("");
    } else {
      setDuplicates(true);
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    // Reset isDuplicate to false when the name changes
    setDuplicates(false);
  }, [name]);

  console.log("contacts", contacts);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          // STATE
          name={name}
          duplicates={duplicates}
          phone={phone}
          email={email}
          // FUNCTIONS
          setPhone={setPhone}
          setName={setName}
          setEmail={setEmail}
          onSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} />
        {/* recorrer el array de contactos utilizando map para mostrar cada nombre
        de contacto en la lista. */}
        <ul>
          {contacts.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};
