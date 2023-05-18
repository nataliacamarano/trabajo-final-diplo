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
        'https://jsonplaceholder.typicode.com/photos',
      );
      localStorage.setItem('products', JSON.stringify(data));
      setProducts(data);
    };
    const productsLocal = JSON.parse(localStorage.getItem('products')) || null;

    if (!productsLocal) {
      fetchProducts();
    } else {
      setProducts(productsLocal);
    }

    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <main>
      <div className='container'>
        {products
          .filter((product) => product.albumId === 1)
          .map((product) => (
            <Card
              key={product.id}
              url={product.url}
              title={product.title}
              id={product.id}
            />
          ))}
      </div>
    </main>
  );
};

export default Main;
