import { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserContext } from './contexts/UserContext';
import './App.css';
import Menu from './components/Menu';
import Login from './components/Login';
import FindClaims from './components/ClaimsTable/FindClaims';
import AddClaims from './components/AddClaims/AddClaims';
import store from './store/store';
import ProtectedRoute from './components/ProtectedRoute';
import EditClaims from './components/EditClaims/EditClaims';
import LoadClaimForEditing from './components/EditClaims/LoadClaimForEditing';
import FindClaimsStatus from './components/ClaimsTable/FindClaimsStatus';
import FindClaimsInsuranceType from './components/ClaimsTable/FindClaimsInsuranceType'
import AddClaimsProperty from './components/AddClaims/AddClaimsProperty';
import AddClaimsMotor from './components/AddClaims/AddClaimsMotor';
import AddClaimsPet from './components/AddClaims/AddClaimsPet';

function App() {

const [searchTerm, setSearchTerm] = useState("");

const [currentUser, setCurrentUser] = useState({ name : "", role : ""});

  return (
    <BrowserRouter>
      <Provider store={store}>
        <UserContext.Provider value={{user:currentUser, setUser:setCurrentUser }}>
          <Menu />
          <Routes>
            <Route path="/login" element = {<Login />} />

            <Route path="/newClaims" element = {
              <ProtectedRoute path="newClaims" roles={["MANAGER"]} element = {<AddClaims />} />}
            />

            <Route path="/newClaimsProperty" element = {
              <ProtectedRoute path="newClaimsProperty" roles={["MANAGER"]} element = {<AddClaimsProperty />} />}
            />

            <Route path="/newClaimsMotor" element = {
              <ProtectedRoute path="newClaimsProperty" roles={["MANAGER"]} element = {<AddClaimsMotor />} />}
            />

            <Route path="/newClaimsPet" element = {
              <ProtectedRoute path="newClaimsPet" roles={["MANAGER"]} element = {<AddClaimsPet />} />}
            />

            <Route path="/editClaims/:id" element = {
              <ProtectedRoute path="editClaims" roles={["MANAGER"]} element = {<LoadClaimForEditing />} />}
            />

            <Route path="/find" element = {
                  <ProtectedRoute path="find" roles={["USER", "MANAGER"]} element = {
                  <FindClaims searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> }
                />
            } />

            <Route path="/findStatus" element = {
                  <ProtectedRoute path="findStatus" roles={["USER", "MANAGER"]} element = {
                  <FindClaimsStatus searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> }
                />
            } />

            <Route path="/findInsuranceType" element = {
                  <ProtectedRoute path="findInsuranceType" roles={["USER", "MANAGER"]} element = {
                  <FindClaimsInsuranceType searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> }
                />
            } />

            <Route path="/find/:orderId" element = {<ProtectedRoute roles={["USER", "MANAGER"]} 
              element = {
                <FindClaims path="find" searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> }
              /> }
            />

            <Route path="/findStatus/:orderId" element = {<ProtectedRoute roles={["USER", "MANAGER"]} 
              element = {
                <FindClaimsStatus path="findStatus" searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> }
              /> }
            />

            <Route path="/findInsuranceType/:surname" element = {<ProtectedRoute roles={["USER", "MANAGER"]} 
              element = {
                <FindClaimsInsuranceType path="findInsuranceType" searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> }
              /> }
            />

            <Route path="/" element = { <h1>Welcome to the Claims system</h1>}/>
            <Route path="*" element = { <h1>Sorry - that page doesn't exist</h1>}/>
          </Routes>
        </UserContext.Provider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
