import { useState } from "react";
import { useLocation } from "react-router-dom";
import CustomSlider from "../../components/slider/CustomSlider";
import Modal from 'react-modal';

import "./index.scss";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgb(159, 229, 229)',
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '50%',
  },
  overlay: {
    zIndex: 9999,
  }
};

const CardPage = () => {
  const location = useLocation();
  const plantData = location.state.data;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [commonTagPlants, setCommonTagPlants] = useState([]);

  const handleSelectTag = (tag) => {
    const arr = Object.values(location.state.allPlants)
    const plantsWithTag = arr.filter(el => el['tags'].includes(tag))
    setIsOpen(true)
    setCommonTagPlants(plantsWithTag)
  }

  return (
    <div className="card-page-container">
      <Modal isOpen={modalIsOpen} style={customStyles}>
          <ul style={{ columns: 2,  listStyleType: 'none' }}>
            {commonTagPlants.map(el => <li style={{padding: '5px'}}>{el.title}</li>)}
          </ul>
        <button style={{ backgroundColor: 'white', border: '0', width: 50, height: 30, cursor: 'pointer' }} onClick={() => setIsOpen(false)}>Close</button>
      </Modal>
      <div className="leftPage">
        {plantData && (
          <>
          <img src={plantData && plantData.images[0]} className="card-image" alt='First' />
          <img src={plantData && plantData.images[1]} className="card-image" alt='Second'/>
          </>
        )}
      </div>
      <div className="rightPage">
        <h1 className="card-items card-header">
          {plantData && plantData.title}
        </h1>
        <div className="card-items card-price">
          $ {plantData && plantData.price}
        </div>

        <div className="card-items card-description">
          {plantData && plantData.description}
        </div>
        {plantData && (
          <div style={{ marginTop: "20px" }}>
            <CustomSlider
              values={{
                min: plantData.light_settings.red[0],
                max: plantData.light_settings.red[1],
              }}
              color="red"
              colorEffectText={'Essential for flowering or very weak stage in plants.'}
            />
           
            <CustomSlider
              values={{
                min: plantData.light_settings.blue[0],
                max: plantData.light_settings.blue[1],
              }}
              color="blue"
              colorEffectText={'Ensures healthy roots, strong stems, and healthy - bigger- leafs.'}
            />
          
            <CustomSlider
              values={{
                min: plantData.light_settings.white[0],
                max: plantData.light_settings.white[1],
              }}
              color="white"
              colorEffectText={'Minor impact on plant growth or health. Effects production of essential oil and thus taste of the greens(plants)'}
            />
            
            <CustomSlider
              values={{
                min: plantData.light_settings.farred[0],
                max: plantData.light_settings.farred[1],
                
              }}
              color="#6D1A36"
              colorEffectText={'Impacts the height grow of the plant. Plant is potentially getting bigger with weaker stems when far-red value is higher.'}
            />
            
            {plantData && (
              <div className="tags">
                {plantData.tags.map((tag, i) => (
                  <span className="tag" key={i} onClick={() => handleSelectTag(tag)}>
                    {tag.split(":")[1]}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardPage;
