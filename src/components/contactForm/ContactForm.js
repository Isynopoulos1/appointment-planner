import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  onSubmit,
  duplicates,
}) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <label name={name} htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label phone={phone} htmlFor="phone">
          Phone:
        </label>
        <input
          type="text"
          id="phone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label email={email} htmlFor="email">
          E-mail:
        </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {duplicates && <p>Name is a duplicate.</p>}
        <button type="submit"> Add Contact</button>
      </form>
    </>
  );
};

export default ContactForm;
