import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<AddProduct />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
