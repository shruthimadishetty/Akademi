import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import { Routes,Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Students from './Pages/Students/Students';
import Teachers from './Pages/Teachers/Teachers';
import Chats from './Pages/Chats/Chats';
import Login from './Authentication/Login/Login';
import Register from './Authentication/Register/Register';
import ProtectedRoutes from './Services/ProtectedRoutes';

function App() {
  
  return (
    <>
    <div className='main-container'>
    <div className='sidebar'>
        <Sidebar/>
      </div>
      <div className='content'>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<ProtectedRoutes/>}>
        <Route path='/' element={<Dashboard/>}/>
        </Route>
        <Route path='/Students' element={<Students/>}/>
        <Route path='/Teachers' element={<Teachers/>}/>
        <Route path='/Chats' element={<Chats/>}/> 
      </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
