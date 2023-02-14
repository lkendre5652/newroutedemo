import logo from './logo.svg';
import './App.css';
import { Home } from './common/Home';
import { Contact } from './common/Contact';
import {Routes,Route, NavLink} from 'react-router-dom';
function App() {
  return (<>
  <NavLink to="newroutedemo/home" >Home</NavLink>
  <NavLink to="newroutedemo/contact" >Contact</NavLink>
  <Routes>
    <Route exact path="newroutedemo/home" element={<Home />} />
    <Route  path="newroutedemo/contact" element={<Contact />} />
  </Routes>
  
  </>
  );
}

export default App;
