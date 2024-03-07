import { useState } from 'react';
import DataGridTable from '../components/dataTable/DataTable'

import AddButton from '../components/button/AddButton';
import AddClient from '../components/add/AddClient';


const Clients = ({ documents, setDocuments, clients, setClients }) => {
  console.log(documents)
  console.log(clients)
    const columns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'name', headerName: 'Name', width: 150 },
    ];
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleAddClientClick = () => {setIsModalOpen(true);}
  return (
    <div className='main-container'>
    <div className='main-title'>
        <h3>DOCUMENTS</h3>
        <AddButton onClick={handleAddClientClick}>Add Client</AddButton>
    </div>
    {isModalOpen && <AddClient setOpen={setIsModalOpen} clients={clients} setClients={setClients} />}
      <DataGridTable  data={clients} columns={columns} />
    </div>
  )
}

export default Clients
