import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { setUserData, clearUserData } from './services/utility';

import { EmployeeManagement } from './components/EmployeeManagement/EmployeeManagement';
import { InventoryScreen } from './components/InventoryScreen/InventoryScreen';
import { OrderingScreen } from './components/OrderingScreen/OrderingScreen'
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';



function App() {

  const [state, setState] = useState(false)

  function loginHandler(user, access) {
    setState(true)
    handleUserStatus(user, access)
  }
  function logoutHandler() {
    setState(false)
    clearUserData()
  }

  function handleUserStatus(user, access) {

    setUserData({ userName: user, userAccess: access })
  }

  return (
    <div className="App">
      <Header logoutHandler={logoutHandler} />

      <Routes>
        <Route path='/' element={<Login handle={loginHandler} state={state} />} />
        <Route path="/ordering" element={<OrderingScreen />} />
        <Route path="/inventory" element={<InventoryScreen />} />
        <Route path='/emp-management' element={<EmployeeManagement />} />
      </Routes>

    </div>
  );
}

export default App;
