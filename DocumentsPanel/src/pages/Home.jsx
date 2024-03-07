import React from 'react'
import { useState } from 'react';
import Add from '../components/add/Add';
import { BsFillArchiveFill } from 'react-icons/bs'
import { 
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line 
} from 'recharts';
import PieChartBox from '../components/pieCartBox/PieChartBox';
import AddButton from '../components/button/AddButton';

function Home({ documents, setDocuments, clients, setClients }) {

let documentCounts = {
    "FINANCIAL DOCUMENTS": 0,
    "TEHNICAL DOCUMENTS": 0,
    "EDUCATIONAL DOCUMENTS": 0,
    "OFFICIAL DOCUMENTS": 0
};
let documentCountsArray = [];
documents.forEach(document => {
    documentCounts[document.type] += 1;
});
for (const type in documentCounts) {
    documentCountsArray.push({ type: type, count: documentCounts[type] });
}

const data1 = clients.map(client => {
    const docsNum = documents.filter(doc => doc.customerId === client.id).length;
    return { client: client.name, docsNum };
  });
  
      const [isModalOpen, setIsModalOpen] = useState(false);
     
      const handleAddDocumentClick = () => {
        setIsModalOpen(true);
        }

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DOCUMENTS</h3>
         
        </div>
        {isModalOpen && <Add setOpen={setIsModalOpen} clients={clients} documents={documents} setDocuments={setDocuments} />}
    
        <div className='main-cards'>
        <div className='card'>
            <div className='card-inner'>
                <h3>OFFICIAL DOCUMENTS</h3>
                <BsFillArchiveFill className='card_icon'/>
            </div>
            <h1>{documentCounts["OFFICIAL DOCUMENTS"]}</h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>TEHNICAL DOCUMENTS</h3>
                <BsFillArchiveFill className='card_icon'/>
            </div>
            <h1>{documentCounts["TEHNICAL DOCUMENTS"]}</h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>FINANCIAL DOCUMENTS</h3>
                <BsFillArchiveFill className='card_icon'/>
            </div>
            <h1>{documentCounts["FINANCIAL DOCUMENTS"]}</h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>EDUCATIONAL DOCUMENTS</h3>
                <BsFillArchiveFill className='card_icon'/>
            </div>
            <h1>{documentCounts["EDUCATIONAL DOCUMENTS"]}</h1>
        </div>
    </div>
    <div className='charts'>
        <PieChartBox documents={documentCountsArray} />
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={500} height={300} data={data1}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="client" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="docsNum" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>

    </div>
    </main>
  )
}

export default Home