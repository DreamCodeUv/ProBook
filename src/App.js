import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import './css/app.css';
import Navbar from './components/Nav';
import Footer from './components/Footer';
import Maincmp from './components/Maincmp';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Maincmp />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
