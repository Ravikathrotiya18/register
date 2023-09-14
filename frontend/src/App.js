import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes} from 'react-router-dom'
import Register from './Pages/auth/Register';
import Login from './Pages/auth/Login';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
  );
}

export default App;
