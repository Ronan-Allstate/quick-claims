import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Components/Webpages/Menu';
import Search from './Components/Webpages/Search';
import NewClaims from './Components/Webpages/NewClaims';
import ClaimsTable from './Components/ClaimsTable/ClaimsTable';
import FindClaimsPage from './Components/ClaimsTable/FindClaims';
import AddClaims from './Components/AddClaims/AddClaims';

function App() {

const [searchTerm, setSearchTerm] = useState("");

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/addClaims' element={<AddClaims />}/>
        <Route path='/find' element={
        <FindClaimsPage searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
        />

        <Route path='/find/:id' element= {
          <FindClaimsPage searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
        />

        <Route path='claimTable' element={<ClaimsTable />}/>
        <Route path="/" element = { <h1>Welcome to the Payments system</h1>}/>
        <Route path="*" element = { <h1>Sorry - that page doesn't exist</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
