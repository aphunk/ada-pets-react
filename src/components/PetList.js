import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';

const generatePetCard = (pets) => {
  return pets.map((pet) => {
    const { id, name, species, about, location } = pet;
    return (<PetCard
      id={id}
      name={name}
      species={species}
      about={about}
      location={location}
    />);
  });
};

const PetList = (props) => {
  const { pets } = props;
  return (
    <div className="card-group">
      {generatePetCard(pets)}
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
};

export default PetList;
