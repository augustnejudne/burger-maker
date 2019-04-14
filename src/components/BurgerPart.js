import React from 'react';

const BurgerPart = ({ img, name, index }) => {
  return <img src={img} alt={name} width="100%" draggable="false" className={`burger-item ${name}`} style={{ zIndex: index * -1 }} />;
};

export default BurgerPart;
