import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Login from './navbar/login';
import Signup from './navbar/signup';
import Dasem from './navbar/dasem';
import LeaveManagment from './navbar/LeaveManagment';
import WorkManagement from './navbar/WorkManagement'; 
import ChatApp from './navbar/chatapp';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
             
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navbar />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/dasem' element={<Dasem />} />
                    <Route path="/LeaveManagment" element={<LeaveManagment />} />
                    <Route path="/WorkManagement" element={<WorkManagement />} />
                    <Route path="/chat" element={<ChatApp />} />
          
                </Routes>
            </BrowserRouter>        
    );
}
export default App;



