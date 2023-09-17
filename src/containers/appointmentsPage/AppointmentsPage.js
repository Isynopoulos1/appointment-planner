import React, { useState, useEffect } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  addAppointments,
  appointments,
  contacts,
}) => {
  /*
  Define state variables for 
  appointment info
  */

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duplicates, setDuplicates] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    const isDuplicated = appointments.some(
      (appointment) => appointment.date === date
    );
    if (!isDuplicated) {
      addAppointments(name, contact, date, time);
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
  }, [date]);

  return (
    <div>
      <section>
        <h2>
          Appointments
          <AppointmentForm
            //STATE
            contact={contact}
            name={name}
            date={date}
            time={time}
            duplicates={duplicates}
            // ARRAY
            contacts={contacts}
            //FUNCTIONS
            setContact={setContact}
            setName={setName}
            setDate={setDate}
            setTime={setTime}
            handleSubmit={handleSubmit}
          />
        </h2>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={appointments} type="appointment" />
      </section>
    </div>
  );
};

export default AppointmentsPage;
