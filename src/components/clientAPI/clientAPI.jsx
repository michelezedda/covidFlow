import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://covid-api.com/api",
});

export const fetchCovidData = async () => {
  try {
    const response = await apiClient.get("/reports/total");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching COVID data:", error);
    throw error;
  }
};

export const fetchCovidDataByState = async (state) => {
  try {
    const response = await apiClient.get(
      `/reports?iso=USA&region_province=${state}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching COVID data:", error);
    throw error;
  }
};
