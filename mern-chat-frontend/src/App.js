import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Chat from './pages/Chat';


function App() {
  return<>
  <BrowserRouter>
  <Navigation/>
    <Routes>
      <Route path="/login"  element ={<Login/>} />
      <Route path="/signup"  element ={<Signup/>} />
      <Route path="/home"  element ={<Home/>} />
      <Route path="/chat"  element ={<Chat/>} />
    </Routes>

  
 
  </BrowserRouter>
  </>
}
 
export default App;
