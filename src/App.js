import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import ContactUs from './ContactUs'
import Footer from './Footer'
import NotFound from './NotFound';

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
