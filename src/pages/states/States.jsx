import "./states.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";

function States() {
  const [stateData, setStateData] = useState(null);
  const [selectedState, setSelectedState] = useState(""); // State for selected state name
  const [searchError, setSearchError] = useState("");

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
      try {
        const response = await axios.get(
          `https://covid-api.com/api/reports?iso=USA&region_province=${selectedState}`
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

    if (selectedState) {
      fetchDataByState();
    }
  }, [selectedState]);

  const handleSearch = (event) => {
    event.preventDefault();
    // Instead of getting state code from input, get it from selected option
    const selectedStateCode = event.target.elements.stateSelect.value;
    console.log("Selected State Code:", selectedStateCode);
    setSelectedState(selectedStateCode);
  };

  console.log("State Data:", stateData);

  return (
    <>
      <Navbar />
      <div className="state-search-container">
        <h1>Search COVID-19 Data by State</h1>
        <form className="state-search-form" onSubmit={handleSearch}>
          {/* Replace input with select dropdown */}
          <label htmlFor="stateSelect">Select State:</label>
          <select id="stateSelect" name="stateSelect">
            {/* Populate select options from stateOptions array */}
            {stateOptions.map((state) => (
              <option key={state.code} value={state.code}>
                {state.name}
              </option>
            ))}
          </select>
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
