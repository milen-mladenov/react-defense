import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { Header } from './components/Header/Header';
import { InventoryScreen } from './components/InventoryScreen/InventoryScreen';
import { Login } from './components/Login/Login';
import { OrderingScreen } from './components/OrderingScreen/OrderingScreen'
import { EmployeeManagement } from './components/EmployeeManagement/EmployeeManagement';
import { ManageAccounts } from './components/EmployeeManagement/ManageAccounts/ManageAccounts'


function App() {
  const [loginStatus, setLoginStatus] = useState({
    userName: "",
    userAccess: ""
  })

  function handleUserStatus(user, access) {
    setLoginStatus({
      userName: user,
      userAccess: access
    })
  }

  return (
    <div className="App">
      <Header user={loginStatus} />

      <Routes>
        <Route path='/' element={<Login handle={handleUserStatus} user={loginStatus} />} />
        <Route path="/ordering" element={<OrderingScreen />} />
        <Route path="/inventory" element={<InventoryScreen />} />
        <Route path='/emp-management' element={<EmployeeManagement />} />
        <Route path="/emp-management" element={<ManageAccounts />} />
      </Routes>

    </div>
  );
}

export default App;
