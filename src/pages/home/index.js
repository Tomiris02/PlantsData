import { useEffect, useState } from "react";
import Header from "../../components/header";
import Card from "../../components/card";

import { API_URL } from "../../constants";


const Home = () => {
  const [apiData, setAPIData] = useState();

  const fetchPlantsData = async () => {
    return await fetch(API_URL);
  };

  useEffect(() => {
    //Fetch data
    fetchPlantsData()
      .then((response) => response.json())
      .then((data) => setAPIData(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <div className="card-container">
          {apiData &&
            Object.keys(apiData).map((key) => (
              <Card data={apiData[key]} key={`card_${key}`} allPlants={apiData} id={key}></Card>
            ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
