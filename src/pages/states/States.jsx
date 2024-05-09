import "./states.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";

function States() {
  const [stateData, setStateData] = useState(null);
  const [stateCode, setStateCode] = useState("");
  const [searchError, setSearchError] = useState("");

  useEffect(() => {
    const fetchDataByState = async () => {
      try {
        const response = await axios.get(
          `https://covid-api.com/api/reports?iso=USA&region_province=${stateCode}`
        );
        console.log("Response:", response.data);
        setStateData(response.data.data);
        setSearchError("");
      } catch (error) {
        console.error("Error fetching state COVID data:", error);
        setStateData(null);
        setSearchError("Error fetching state data. Please try again.");
      }
    };

    if (stateCode) {
      fetchDataByState();
    }
  }, [stateCode]);

  const handleSearch = (event) => {
    event.preventDefault();
    const stateCodeInput = event.target.elements.stateCode.value.toUpperCase();
    console.log("Search State Code:", stateCodeInput);
    setStateCode(stateCodeInput);
  };

  console.log("State Data:", stateData);

  return (
    <>
      <Navbar />
      <div className="state-search-container">
        <h1>Search COVID-19 Data by State</h1>
        <form className="state-search-form" onSubmit={handleSearch}>
          <label htmlFor="stateCode">Enter State Code (e.g., NY, CA):</label>
          <input type="text" id="stateCode" name="stateCode" />
          <button type="submit">Search</button>
        </form>
        {searchError && <p className="error-message">{searchError}</p>}
        {stateData && stateData.length > 0 ? (
          <div className="state-data-container">
            <h2>{stateData[0]?.region?.province} COVID-19 Data</h2>
            <p>Total confirmed cases: {stateData[0]?.confirmed}</p>
            <p>Total deaths: {stateData[0]?.deaths}</p>
            <p>Active cases: {stateData[0]?.active}</p>
            <p>Mortality rate: {stateData[0]?.fatality_rate}</p>
            <p>Last update: {stateData[0]?.last_update}</p>
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default States;
