
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Categories from './Pages/Categories/Categories';
import Home from './Pages/HomePage/Home';
import ContactUs from './Pages/ContactUS/ContactUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Products' element={<Categories/>}/>
        <Route path='/Contactus' element={<ContactUs/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
