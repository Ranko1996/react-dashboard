import React from 'react'
import { useState } from 'react';
import DataGridTable from './components/dataTable/DataTable'
import Add from './Add';
import AddButton from './components/button/AddButton';


const Documents = ({ documents, setDocuments, clients, setClients }) => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleAddDocumentClick = () => {
        setIsModalOpen(true); // Otvorite modal

        // Ovdje možete dodati logiku za dodavanje novog dokumenta
        }
  return (
    <div className='main-container'>
    <div className='main-title'>
        <h3>DOCUMENTS</h3>
        <AddButton onClick={handleAddDocumentClick}>Add Document</AddButton>
    </div>
    {isModalOpen && <Add setOpen={setIsModalOpen} clients={clients} documents={documents} setDocuments={setDocuments} />}
      <DataGridTable documents={documents} />
    </div>
  )
}

export default Documents
