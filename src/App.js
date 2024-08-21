import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './authentication/login';
import Dasem from './Employee/dashboard/dasem';
import LeaveManagment from './Employee/leave management/LeaveManagment';
import WorkManagement from './Employee/work management/WorkManagement'; 
import ChatApp from './Employee/communication/chatapp';
import Dashboard from './Management/dashboard/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskManagement from './Management/task management/taskmanagement';
import LeaveManagement from './Management/leave management/leavemanagement';
import EmployeeManagement from './Management/employee management/EmployeeManagement';
import GroupManagement from './Management/group management/GroupManagement';
import Report from './Management/reporting & analytics/report';
import Communication from './Management/communication/communication';

function App() {
    return (
             
            <BrowserRouter>
                <Routes>
                    
                    <Route path='/' element={<Login />} />
                    <Route path='/dasem' element={<Dasem />} />
                    <Route path="/LeaveManagment" element={<LeaveManagment />} />
                    <Route path="/WorkManagement" element={<WorkManagement />} />
                    <Route path="/chat" element={<ChatApp />} /> 
                    <Route path="/dashboard" element={<Dashboard />} /> 
                    <Route path="/taskmanagement" element={<TaskManagement />} /> 
                    <Route path="/leave" element={<LeaveManagement />} /> 
                    <Route path="/EmployeeManagement" element={<EmployeeManagement />} />
                    <Route path="/GroupManagement" element={<GroupManagement />} />         
                    <Route path="/report" element={<Report />} />
                    <Route path="/communication" element={<Communication />} />
                                    
                </Routes>
            </BrowserRouter>        
    );
}
export default App;



