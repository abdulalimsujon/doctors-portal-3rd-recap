
import './App.css';
import Navber from './Shared/Navber';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Appointment from './pages/Appointment/Appointment';

import Contract from './pages/Contract/Contract';
import About from './pages/about/About';
import Login from './pages/Login/Login';




function App() {
  return (
    <div className='p-12'>
      <Navber></Navber>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>

        <Route path='/contract' element={<Contract></Contract>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

      </Routes>
    </div>
  );
}

export default App;
