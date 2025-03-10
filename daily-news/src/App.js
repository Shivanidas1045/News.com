import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

