import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import axios from 'axios';
import './Main.css';

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      console.log('Consultando la api...');
      const { data } = await axios.get(
        'http://localhost:3000/api',
      );
      // localStorage.setItem('products', JSON.stringify(data));
      setProducts(data.recipes);
    };
    // const productsLocal = JSON.parse(localStorage.getItem('products')) || null;

    // if (!productsLocal) {
       fetchProducts();
    // } else {
    //   setProducts(productsLocal);
    // }

    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <main>
      <div className='container'>
        {products
          .map((product) => (
            <Card
              key={product.id}
              imagen={product.imagen}
              title={product.title}
              description={product.description}
            />
          ))}
      </div>
    </main>
  );
};

export default Main;
