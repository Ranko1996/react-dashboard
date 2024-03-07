import React, { useState } from "react";
import "./add.css";

const Add = ({ setOpen, setClients }) => {
  const [clientName, setClientName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Stvaranje novog objekta klijenta
    const newClient = {
      id: Math.random().toString(36).substr(2, 9), // Generiranje jedinstvenog ID-a
      name: clientName,
    };

    // Dodavanje novog klijenta u stanje koristeći setClients
    setClients((prevClients) => [...prevClients, newClient]);

    // Resetiranje inputa nakon dodavanja klijenta
    setClientName("");

    // Zatvaranje modalnog prozora
    setOpen(false);
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h1>Add New Client</h1>
        <form onSubmit={handleSubmit}>
          <div className="item">
            <label>Client Name</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Enter client name"
            />
          </div>
          <button type="submit">Add Client</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
