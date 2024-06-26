import "./dashboard.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import familymaskPic from "/family-mask.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faCheckCircle,
  faHeartbeat,
  faSkullCrossbones,
  faPercentage,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

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
          <h2>Global COVID-19 Data</h2>
          {globalData ? (
            <div className="data">
              <p>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp; Total confirmed
                cases: &nbsp; {globalData.confirmed}
              </p>
              <p>
                <FontAwesomeIcon icon={faHeartbeat} /> &nbsp; Active cases:
                &nbsp;
                {globalData.active}
              </p>
              <p>
                <FontAwesomeIcon icon={faSkullCrossbones} /> &nbsp; Total
                deaths: &nbsp; {globalData.deaths}
              </p>
              <p>
                <FontAwesomeIcon icon={faPercentage} /> &nbsp; Mortality rate:
                &nbsp;
                {((globalData.deaths / globalData.confirmed) * 100).toFixed(2)}%
              </p>

              <p>
                <FontAwesomeIcon icon={faClock} /> &nbsp; Last update: &nbsp;
                {globalData.last_update}
              </p>
            </div>
          ) : (
            <FontAwesomeIcon icon={faSpinner} spin className="loader" />
          )}
          <Link to="/States" style={{ textDecoration: "none" }}>
            <div className="usa-data-btn">View COVID-19 data for the USA</div>
          </Link>
          <img src={familymaskPic} alt="family wearing masks" />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
