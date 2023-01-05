import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Test } from './Components/Test/Test';

function App() {
  return (
    <div >
  <Routes>
  <Route path='/login' element={<h1>Login</h1>}/>
  <Route path='/registration' element={<h1>Registration</h1>}/>
  <Route path='/profile' element={<h1>Profile</h1>}/>
  <Route path='/profile' element={<h1>Profile</h1>}/>
  <Route path='/recovery' element={<h1>Password recovery</h1>}/>
  <Route path='/newPassword' element={<h1> New password</h1>}/>
  <Route path='/test' element={<Test/>}/>
  </Routes>
    </div>
  );
}

export default App;
