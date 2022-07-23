import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ContactsPage from '../../pages/ContactsPage';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import NavBar from '../NavBar/NavBar';
import ProtectedRoute from '../ProtectetRoute/ProtectedRoute';
import { Wrapper } from './App.styled';



function App() {
  return (
    <Wrapper>
      <NavBar />
      <Routes>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/reg' element={<RegisterPage />} />
        
        <Route element={<ProtectedRoute/>} >
        <Route path='/contacts' element={<ContactsPage/>} />
        </Route>

         <Route path="*" element={<Navigate replace to={'/contacts'} />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
