import React, { useState } from "react";
import { BsCalendar } from "react-icons/bs";
import "./add.css";

const Add = ({ setOpen, clients, documents, setDocuments }) => {
  const [documentName, setDocumentName] = useState("");
  const [selectedDocumentType, setSelectedDocumentType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [duration, setDuration] = useState("");
  const [clientId, setClientId] = useState("");
  const [comment, setComment] = useState(""); // Dodali smo stanje za komentar

  console.log(clients);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDocument = {
      id: documents.length + 1,
      name: documentName,
      customerId: clientId,
      startDate: startDate,
      duration: duration + " months",
      comment: comment, // Dodali smo komentar u objektu dokumenta
      contractValue: "",
      type: selectedDocumentType.toUpperCase() + " DOCUMENTS",
    };

    setDocuments(currentDocuments => [...currentDocuments, newDocument]);
    console.log({
      documentName,
      selectedDocumentType,
      clientId,
      startDate,
      duration,
      comment, // Dodali smo komentar u ispisu
    });
    setOpen(false);
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
            <select
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
            >
              <option value="">Select a client</option>
              {clients.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.name}
                </option>
              ))}
            </select>
          </div>
          <div className="item">
            <label>Start Date</label>
            <div className="date-input-container">
              <BsCalendar className="calendar-icon" />
              <input
                id="datePicker"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
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
          <div className="item">
            <label>Comment</label>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Enter comment"
            />
          </div>
          <button type="submit">Add Document</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
