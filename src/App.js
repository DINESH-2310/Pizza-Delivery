import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portal from './Components/Portal';
import Intro from './Components/Intro';
import Cart from './Components/Cart';
function App() {
  return (

    <Routes>
      <Route path="/" element={<Intro/>}/>
      <Route path="/portal" element={<Portal />} >
      <Route path="" element={<Nav/>}/>
      <Route path="order" element={<Home />} />
      <Route path="cart" element={<Cart />} />

    </Route>
    </Routes >




  );
}

export default App;
