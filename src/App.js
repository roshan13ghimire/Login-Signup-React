import Home from './components/pages/Home'

import Login from './components/pages/Login';
import Registration from './components/pages/Registration'
import { Routes, Route} from "react-router-dom";
import Error from "./components/pages/Error";
import Dashboard from './components/pages/Dashboard';

import './App.css';
function App() {
  return (
    <>
    <Routes>
          <Route exact path="/" element={<Home />} />
          
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route element={<Error />} /> 
      </Routes>
    </>

  );
}

export default App;
