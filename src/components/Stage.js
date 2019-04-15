import React, { useEffect } from 'react';

const Stage = ({
  burger,
  topBun,
  bottomBun,
  mayo,
  mayoImg,
  ketchup,
  ketchupImg,
  removePart,
  dashBurgerPrice,
}) => {
  useEffect(() => {
    // console.log('stage mounted');
  }, []);
  const renderBurger = () => {
    return burger.map(({ img, name }, i) => {
      return (
        <li key={i}>
          <img
            src={img}
            alt={name}
            width="100%"
            className={`burger-item ${name}`}
            style={{ zIndex: i * -1 }}
          />
        </li>
      );
    });
  };

  return (
    <div className="stage-wrapper">
      <ul className="burger" onClick={() => removePart()}>
        <li>
          <img src={topBun} alt="top bun" width="100%" className={`top-bun`} />
        </li>
        <li>
          <ul className={`burger-items-wrapper`}>{renderBurger()}</ul>
        </li>
        <li className={`bottom-bun-wrapper`}>
          {mayo ? <img src={mayoImg} alt="mayo" width="100%" className={`mayo`} /> : null}
          {ketchup ? (
            <img src={ketchupImg} alt="ketchup" width="100%" className={`ketchup`} />
          ) : null}
          <img src={bottomBun} alt="bottom bun" width="100%" className={`bottom-bun`} />
        </li>
      </ul>
      <div className="dash-burger-price">&#8369;{dashBurgerPrice}</div>
    </div>
  );
};

export default Stage;
