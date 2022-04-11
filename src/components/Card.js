import React, { useEffect } from "react";

const Card = ({ game }) => {
  // console.log(game.platforms);
  useEffect(() => {
    const plateforms = game.platforms;
    plateforms.map((platform) => {
      console.log(platform.platform.name);
    });
  }, []);

  return (
    <div className="card">
      <img className="card__img" src={game.background_image} alt="" />
      <p className="card__platform"></p>
      <h3 className="card__title">{game.name}</h3>
    </div>
  );
};

export default Card;
