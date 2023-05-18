import './Card.css';
// import swal from 'sweetalert';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import axios from 'axios';
import PropTypes from 'prop-types';

const Card = ({ title, imagen, description }) => {
  // const handleEdit = () => {
  //   console.log('Editando...');
  //   swal('Good job!', 'You clicked the button!', 'success');
  // };

  // const handleDelete = async () => {
  //   console.log("Borrando receta...")
  //   try {
  //     const { data } = await axios.delete(
  //       `http://localhost:3000/api/${id}`,
  //     );
  //     console.log(data);
  //     swal('Éxito!', 'Receta borrada correctamente', 'success');
  //   } catch (error) {
  //     swal('Error!', 'No se pudo borrar la receta', 'error');
  //   }
  // };

  return (
    <div className='card'>
      <div className='card__image'>
        <img src={imagen} alt={title}/>
      </div>
      <div className='card__content'>
        <h3 className='card__title'>{title}</h3>
        <p className='card__description'>{description}</p>
        {/* <div className='actions'>
          <span onClick={handleEdit}>
            <FaEdit />
          </span>
          <span onClick={handleDelete}>
            <FaTrash />
          </span>
        </div> */}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default Card;
