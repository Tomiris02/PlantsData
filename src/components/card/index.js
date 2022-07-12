import starImg from "../../assets/star.png";
import { Link } from 'react-router-dom'

import "./index.scss";

const Card = ({ data, id, allPlants }) => {
  const { title, description, price, images } = data
  return (<div className="card-outline">
    
    <div className="card">
    <Link to={id} state={{ data, allPlants }} className='card-link'>
      {images[0] ?
      <div >
        <img className="image-container" src={`${images[0]}`} alt='Plant'/>
      </div> : ''}
      <div className="card-stars">
        <img src={starImg} alt="Stars" className="card-stars-img" />
        {price}
      </div>
      
        <div className="card-header">
          <p title="all-available-plants">{title}</p>
        </div>
      
      <p className="card-description">{description}</p>
      </Link>
    </div>
    
  </div>
)};

export default Card;
