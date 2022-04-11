import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Receipt = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.rawg.io/api/games?key=4389344bd7ba44858ace0ec9dd9668c6&dates=2022-03-01,2022-04-05&platforms=18,1,7"
      )
      .then((element) => setData(element.data.results));
  }, []);

  return (
    <div className="receipt">
      {data.slice(0, 1).map((game) => (
        <Card key={game.id} game={game} />
      ))}
    </div>
  );
};

export default Receipt;
