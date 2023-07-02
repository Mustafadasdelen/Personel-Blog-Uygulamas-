import './App.css';

import Nav from './Components/Nav';
import Footer from './Components/footer';

import Hakkimizda from './Pages/Hakkimizda';
import ApiCall from './Pages/ApiCall';
import ProductDetail from './Pages/ProductDetail';


import { Routes, Route } from 'react-router-dom';


function App() {

  return (
  <>
    <Nav></Nav>
      <div className='container' >
        <Routes>
            <Route path='/Hakkimizda' element={<Hakkimizda></Hakkimizda>}>   </Route>
            <Route path='/' element={<ApiCall></ApiCall>}></Route>
            <Route path='/urunler/:id' element={<ProductDetail></ProductDetail>}></Route>
        </Routes>
      </div>
    <Footer></Footer>
  </>

  );
}

export default App;
