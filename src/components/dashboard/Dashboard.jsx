import "./dashboard.css";
import familymaskPic from "/family-mask.png";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [globalData, setGlobalData] = useState(null);

  useEffect(() => {
    const fetchCovidData = async () => {
      try {
        const response = await axios.get(
          "https://covid-api.com/api/reports/total"
        );
        setGlobalData(response.data.data);
      } catch (error) {
        console.error("Error fetching COVID data:", error);
      }
    };

    fetchCovidData();
  }, []);

  return (
    <>
      <div className="dashboard">
        <div className="container">
          <h2>Dashboard</h2>
          {globalData ? (
            <div>
              <p>Total confirmed cases: {globalData.confirmed}</p>
              <p>Total deaths: {globalData.deaths}</p>
              <p>Last update: {globalData.last_update}</p>
              <p>
                Mortality rate:{" "}
                {((globalData.deaths / globalData.confirmed) * 100).toFixed(2)}%
              </p>
              <p>Active cases: {globalData.active}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
          <img src={familymaskPic} alt="Family with masks" />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
