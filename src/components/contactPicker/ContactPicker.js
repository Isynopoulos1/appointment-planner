import React from "react";

export const ContactPicker = ({ contacts, contact, setContact }) => {
  return (
    <>
      <select
        onChange={(e) => setContact(e.target.value)}
        value={contact}
        name="contact"
      >
        <option value="">No contact selected</option>{" "}
        {/* Opción predeterminada */}
        {contacts.map((contact, index) => (
          <option key={index} value={contact.name}>
            {contact.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default ContactPicker;
