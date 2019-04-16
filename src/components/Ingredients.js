import React from 'react';

const Ingredients = ({
  ingredients,
  ketchup,
  mayo,
  addPart,
  clear,
  toggleKetchup,
  toggleMayo,
}) => {
  const renderIngredients = () => {
    return ingredients.map((ingredient, i) => {
      return (
        <li className="ingredient" key={i} onClick={() => addPart(ingredient)} style={{display: 'grid', gridTemplateColumns: '1fr 2fr'}}>
          <p className="ingredient-price">&#8369;{ingredient.price}</p>
          <img
            src={ingredient.img}
            alt={ingredient.name}
            width="100%"
          />
        </li>
      );
    });
  };

  return (
    <div className="parts">
      <ul>
        <li>
          <label>
            <input
              type="checkbox"
              checked={ketchup}
              onChange={() => toggleKetchup()}
            />{' '}
            Ketchup
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              checked={mayo}
              onChange={() => toggleMayo()}
            />{' '}
            Mayo
          </label>
        </li>
        {renderIngredients()}
          <button className="red-button" onClick={() => clear()}>
            Clear
          </button>
      </ul>
    </div>
  );
};

export default Ingredients;
