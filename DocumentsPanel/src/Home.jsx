import React from 'react'
import { useState } from 'react';
import Add from './Add';
import { BsFillArchiveFill } from 'react-icons/bs'
import { 
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line 
} from 'recharts';
import BarChartBox from './components/barChartBox/BarChartBox';
import PieChartBox from './components/pieCartBox/PieChartBox';

function Home({ documents, setDocuments, clients, setClients }) {

// Prvo definirajte objekte koji će brojati svaki tip dokumenata
let documentCounts = {
    "FINANCIAL DOCUMENTS": 0,
    "TEHNICAL DOCUMENTS": 0,
    "EDUCATIONAL DOCUMENTS": 0,
    "OFFICIAL DOCUMENTS": 0
};
let documentCountsArray = [];
// Iterirajte kroz niz `documentsData` i brojite tipove dokumenata
documents.forEach(document => {
    documentCounts[document.type] += 1;
});
for (const type in documentCounts) {
    documentCountsArray.push({ type: type, count: documentCounts[type] });
}
// console.log(documentCountsArray);

// Ispisujemo rezultate

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      const [isModalOpen, setIsModalOpen] = useState(false);
     
      const handleAddDocumentClick = () => {
        setIsModalOpen(true); // Otvorite modal

        // Ovdje možete dodati logiku za dodavanje novog dokumenta
    }

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DOCUMENTS</h3>
            <button onClick={handleAddDocumentClick} className="add-document-btn">Add Document</button>
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
    </div>
        {/* <BarChartBox data={documentCountsArray} />
        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
            
        
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div> */}
    </main>
  )
}

export default Home