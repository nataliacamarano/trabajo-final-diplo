import './Card.css';
import swal from 'sweetalert';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import PropTypes from 'prop-types';

const Card = ({ title, url, id }) => {
  const handleEdit = () => {
    console.log('Editando...');
    swal('Good job!', 'You clicked the button!', 'success');
  };

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(
        `https://jsonplaceholder.typicode.com/photos/${id}`,
      );
      console.log(data);
      swal('Éxito!', 'Receta borrada correctamente', 'success');
    } catch (error) {
      swal('Error!', 'No se pudo borrar la receta', 'error');
    }
  };

  return (
    <div className='card'>
      <div className='card__image'>
        <img src={url} alt='imagen' />
      </div>
      <div className='card__content'>
        <h3 className='card__title'>Titulo</h3>
        <p className='card__description'>{title}</p>
        <div className='actions'>
          <span onClick={handleEdit}>
            <FaEdit />
          </span>
          <span onClick={handleDelete}>
            <FaTrash />
          </span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
