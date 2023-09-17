import React from "react";
import ContactPicker from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  //STATE
  contact,
  name,
  date,
  time,
  duplicates,
  // ARRAY
  contacts,
  //FUNCTIONS
  setContact,
  setName,
  setDate,
  setTime,
  handleSubmit,
}) => {
  return (
    <>
      <ContactPicker
        //STATES
        contact={contact}
        //FUNCTIONS
        setContact={setContact}
        contacts={contacts}
      />
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          type="text"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={getTodayString()}
        />
        <label htmlFor="time">Time:</label>
        <input
          type="text"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {duplicates && <p>Date is a duplicate.</p>}
        <button type="submit"> Add appointment</button>
      </form>
    </>
  );
};
export default AppointmentForm;
