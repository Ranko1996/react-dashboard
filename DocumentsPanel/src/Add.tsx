import React, { useState } from "react";
import "./add.css";

const Add = ({ setOpen }) => {
  const [documentName, setDocumentName] = useState("");
  const [selectedDocumentType, setSelectedDocumentType] = useState("");
  const [clientName, setClientName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ovdje bi išla logika za slanje podataka na server
    console.log({
      documentName,
      selectedDocumentType,
      clientName,
      startDate,
      duration,
    });

    setOpen(false); // Zatvara modal
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h1>Add New Document</h1>
        <form onSubmit={handleSubmit}>
          <div className="item">
            <label>Document Name</label>
            <input
              type="text"
              value={documentName}
              onChange={(e) => setDocumentName(e.target.value)}
              placeholder="Enter document name"
            />
          </div>
          <div className="item">
            <label>Document Type</label>
            <select
              value={selectedDocumentType}
              onChange={(e) => setSelectedDocumentType(e.target.value)}
            >
              <option value="">Select document type</option>
              <option value="official">OFFICIAL DOCUMENTS</option>
              <option value="technical">TEHNICAL DOCUMENTS</option>
              <option value="financial">FINANCIAL DOCUMENTS</option>
              <option value="educational">EDUCATIONAL DOCUMENTS</option>
            </select>
          </div>
          <div className="item">
            <label>Client Name</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Enter client name"
            />
          </div>
          <div className="item">
            <label>Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="item">
            <label>Duration (months)</label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="Enter duration in months"
            />
          </div>
          <button type="submit">Add Document</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
