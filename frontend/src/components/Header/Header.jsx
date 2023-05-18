import './Header.css';

const Header = () => {
  return (
    <header>
      <div className='logo'>Diplo Recetas</div>
      <nav>
        <ul>
          <li>
            <a href='/'>Inicio</a>
          </li>
          <li>
            <a href='/new'>Crear receta</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
