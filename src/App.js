import logo from './logo.svg';
import './App.css';
import { Routes,Route} from 'react-router-dom';

import Mounting from './Components/Mounting';
import Updating from './Components/Updating';
import Unmounting from './Components/Unmounting';
import Navbar from './Components/Navbar';


import Login from './Routing/Login';
import Home from './Routing/Home';
import { AuthProvider } from './Routing/Auth';
import { Requiredauth } from './Routing/Requiredauth';
import Register from './Routing/Register';


function App() {
  return (
    
                                <AuthProvider>
       <Navbar></Navbar>
      <Routes>
     <Route path='/' element={<Requiredauth><Home></Home></Requiredauth>} />
  <Route path='mounting' element={<Requiredauth><Mounting></Mounting></Requiredauth>} />
  <Route path='updating' element={<Requiredauth><Updating></Updating></Requiredauth>} />
  <Route path=             'unmounting' element={<Requiredauth><Unmounting></Unmounting></Requiredauth>} />
  <Route path='login' element={<Login></Login>} />
  <Route path='register' element={<Register></Register>} />
  
  
                
          </Routes>
          </AuthProvider>
     
    
  );
}

export default App;
