import './App.css';

import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create_Vendor from './components/docs/Create_Vendor';
import Header from './components/initialpage/Sidebar/Header';
import Sidebar from './components/initialpage/Sidebar/sidebar';
import Dashboard from './components/MainPage/Main/Dashboard';
import FileUpload from './components/File/FileUpload';
import ViewDocuments from './components/docs/ViewDocuments';
import DocumentList from './components/docs/DocumentList';
import PdfView from './components/docs/PdfView';
import Pdfview2 from './components/docs/Pdfview2';
import Catlist from './components/docs/Catlist';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Sidebar/>
    <Routes>
     
        <Route path="/" element={<Dashboard />} />
        <Route path="/docs" element={<Dashboard />} />


        <Route path="/docs/add" element={<Create_Vendor />} />
        <Route path="/fileupload" element={<FileUpload />} />
        
        <Route path="/ViewDocuments/:id/:document_id" element={<ViewDocuments />}/>
        <Route path="/pdfview/:name/:recordId" element={<PdfView />}/>
        <Route path="/pdfview2/:name" element={<Pdfview2 />}/>

        <Route path="/docs/cat" element={<Catlist />} />

        <Route path="/docs/list" element={<DocumentList />} />
        
            
     
    </Routes>
  </BrowserRouter>

      
    </div>
  );
}

export default App;
