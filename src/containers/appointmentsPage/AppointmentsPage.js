import React, { useState, useEffect } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  appointments,
  contacts,
  newAppointment,
}) => {
  /*
  Define state variables for 
  appointment info
  */

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");
  const [duplicates, setDuplicates] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    const isDuplicated = contacts.some((contact) => contact.name === name);
    if (isDuplicated) {
      newAppointment(name, contact, date, time);
      // Clear the form input fields
      setName("");
      setContact("");
      setDate("");
      setTime("");
    } else {
      setDuplicates(true);
    }
  };

  useEffect(() => {
    setDuplicates(false);
  }, [name]);
  // console.log("appointment", contacts);
  return (
    <div>
      <section>
        <h2>
          Appointments
          <AppointmentForm
            //STATE
            contact={contact}
            duplicates={duplicates}
            title={title}
            date={date}
            time={time}
            //FUNCTIONS
            setContact={setContact}
            setTitle={setTitle}
            setDate={setDate}
            setTime={setTime}
            handleSubmit={handleSubmit}
          />
        </h2>
      </section>
      <hr />
      <section>
        <h2>
          Appointments
          <TileList data={appointments} />
        </h2>
      </section>
    </div>
  );
};

export default AppointmentsPage;
