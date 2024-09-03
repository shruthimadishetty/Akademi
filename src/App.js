import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './Authentication/Login/Login';
import Register from './Authentication/Register/Register';
import ProtectedRoutes from './Services/ProtectedRoutes';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import StudentTable from './Pages/Students/StudentTable';
import TeacherTable from './Pages/Teachers/TeacherTable';
import Contact from './Pages/Contact/Contact';

function App() {
  const location = useLocation();

  // Define the paths where the sidebar should be hidden
  const noSidebarPaths = ['/login', '/register'];

  // Determine if the content should be centered
  const isCenteredPage = noSidebarPaths.includes(location.pathname);

  return (
    <div className='main-container'>
      {/* Conditionally render the sidebar based on the current route */}
      {!isCenteredPage && (
        <div className='sidebar'>
          <Sidebar />
        </div>
      )}
      <div className={`content ${isCenteredPage ? 'centered-content' : ''}`}>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<ProtectedRoutes />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/students' element={<StudentTable />} />
            <Route path='/teachers' element={<TeacherTable />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
