import React from 'react'
import { useState } from 'react';
import DataGridTable from './components/dataTable/DataTable'
import Add from './Add';
import AddButton from './components/button/AddButton';


const Documents = ({ documents, setDocuments, clients, setClients }) => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'customerId', headerName: 'Customer ID', width: 150 },
        { field: 'startDate', headerName: 'Start Date', width: 150 },
        { field: 'duration', headerName: 'Duration', width: 150 },
        { field: 'comment', headerName: 'Comment', width: 200 },
        { field: 'contractValue', headerName: 'Contract Value', width: 150 },
        { field: 'type', headerName: 'Type', width: 150 },
      ];
    
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
      <DataGridTable  data={documents} columns={columns} />
    </div>
  )
}

export default Documents
