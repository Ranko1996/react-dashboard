import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { clientsData, documentsData } from './data';
import Sidebar from './pages/Sidebar';
import Header from './pages/Header';
import Home from './pages/Home';
import Documents from './pages/Documents';
import Clients from './pages/Clients';


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [documents, setDocuments] = useState(documentsData);
  const [clients, setClients] = useState(clientsData);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <Router>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Routes>
          <Route path="/" element={<Home documents={documents} setDocuments={setDocuments} clients={clients} setClients={setClients} />} />
          <Route path="/documents" element={<Documents documents={documents} setDocuments={setDocuments} clients={clients} setClients={setClients} /> } />
          <Route path="/clients" element={<Clients documents={documents} setDocuments={setDocuments} clients={clients} setClients={setClients} /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
