import "./states.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useState, useEffect } from "react";
import usaPic from "/usa.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faCheckCircle,
  faHeartbeat,
  faSkullCrossbones,
  faPercentage,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import {
  fetchCovidDataByState,
  scrollToTop,
} from "../../components/clientAPI/clientAPI";

function States() {
  const [stateData, setStateData] = useState(null);
  const [selectedState, setSelectedState] = useState("");
  const [searchError, setSearchError] = useState("");
  const [loading, setLoading] = useState(false);

  const stateOptions = [
    { name: "Alabama" },
    { name: "Alaska" },
    { name: "Arizona" },
    { name: "Arkansas" },
    { name: "California" },
    { name: "Colorado" },
    { name: "Connecticut" },
    { name: "Delaware" },
    { name: "Florida" },
    { name: "Georgia" },
    { name: "Hawaii" },
    { name: "Idaho" },
    { name: "Illinois" },
    { name: "Indiana" },
    { name: "Iowa" },
    { name: "Kansas" },
    { name: "Kentucky" },
    { name: "Louisiana" },
    { name: "Maine" },
    { name: "Maryland" },
    { name: "Massachusetts" },
    { name: "Michigan" },
    { name: "Minnesota" },
    { name: "Mississippi" },
    { name: "Missouri" },
    { name: "Montana" },
    { name: "Nebraska" },
    { name: "Nevada" },
    { name: "New Hampshire" },
    { name: "New Jersey" },
    { name: "New Mexico" },
    { name: "New York" },
    { name: "North Carolina" },
    { name: "North Dakota" },
    { name: "Ohio" },
    { name: "Oklahoma" },
    { name: "Oregon" },
    { name: "Pennsylvania" },
    { name: "Rhode Island" },
    { name: "South Carolina" },
    { name: "South Dakota" },
    { name: "Tennessee" },
    { name: "Texas" },
    { name: "Utah" },
    { name: "Vermont" },
    { name: "Virginia" },
    { name: "Washington" },
    { name: "West Virginia" },
    { name: "Wisconsin" },
    { name: "Wyoming" },
  ];

  useEffect(() => {
    const fetchDataByState = async () => {
      setLoading(true);
      try {
        const data = await fetchCovidDataByState(selectedState);
        console.log("Response:", data);
        setStateData(data);
        setSearchError("");
      } catch (error) {
        setStateData(null);
        setSearchError("Error fetching state data. Please try again.");
      }
      setLoading(false);
    };

    if (selectedState) {
      fetchDataByState();
    }
  }, [selectedState]);

  const handleSearch = (event) => {
    event.preventDefault();
    const selectedStateName = event.target.elements.stateSelect.value;
    console.log("Selected State Name:", selectedStateName);
    setSelectedState(selectedStateName);
  };

  scrollToTop();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>COVID-19 Data by State</title>
        <link rel="canonical" href="https://covid-flow.vercel.app/" />
      </Helmet>
      <Navbar />
      <div className="states">
        <div className="container">
          <h2>Search COVID-19 Data by State</h2>
          <img src={usaPic} alt="USA map" />
          <form className="state-search-form" onSubmit={handleSearch}>
            <label htmlFor="stateSelect">Select a state:</label>
            <select id="stateSelect" name="stateSelect">
              {stateOptions.map((state) => (
                <option key={state.name} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
            <button type="submit">Search</button>
          </form>
          {searchError && <p className="error-message">{searchError}</p>}
          {loading && (
            <FontAwesomeIcon icon={faSpinner} spin className="loader" />
          )}
          {stateData && stateData.length > 0 ? (
            <div className="state-data-container">
              <h3>{stateData[0]?.region?.province} COVID-19 Data</h3>
              <p>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp; Total confirmed
                cases: &nbsp;
                {stateData[0]?.confirmed}
              </p>
              <p>
                <FontAwesomeIcon icon={faHeartbeat} /> &nbsp; Active cases:
                &nbsp;
                {stateData[0]?.active}
              </p>
              <p>
                <FontAwesomeIcon icon={faSkullCrossbones} /> &nbsp; Total
                deaths: &nbsp;
                {stateData[0]?.deaths}
              </p>
              <p>
                <FontAwesomeIcon icon={faPercentage} /> &nbsp; Mortality rate:
                &nbsp;
                {stateData[0]?.fatality_rate}
              </p>
              <p>
                <FontAwesomeIcon icon={faClock} /> &nbsp; Last update: &nbsp;
                {stateData[0]?.last_update}
              </p>
            </div>
          ) : null}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default States;
