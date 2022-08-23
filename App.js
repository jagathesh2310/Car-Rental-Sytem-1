import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Login from './login';
import AdminLogin from './adminlogin';
import Signup from './signup';
import Cars from './Cars/Cars';
import Book from './book/Book';
import Admincars from './addedit/Admincars';
import Addcar from './addedit/Addcar';
import Addcustomer from './addedit/Addcustomer';
import Editcar from './addedit/Editcar';
import Editcustomer from './addedit/Editcustomer';
import Admincustomer from './addedit/Admincustomer';
import Cover from './Cover';
import Contact from './contact/Contact';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/AdminLogin" element={<AdminLogin/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Cars" element={<Cars/>}/>
          <Route path="/Book" element={<Book/>}/>
          <Route path="/Admincars" element={<Admincars/>}/>
          <Route path="/Admincustomer" element={<Admincustomer/>}/>
          <Route path="/Addcar" element={<Addcar/>}/>
          <Route path="/Addcustomer" element={<Addcustomer/>}/>
          <Route path="/Editcar" element={<Editcar/>}/>
          <Route path="/Editcustomer" element={<Editcustomer/>}/>
          <Route path="/Cover" element={<Cover/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;