import axios from "axios";
require("dotenv/config");

const token = localStorage.getItem("token");

const params = {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": `application/json`,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
      process.env.REACT_APP_BASE_URL + url,
      params
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const uploadImage = async (url, formData) => {
  const { res } = await axios.post(
    process.env.REACT_APP_BASE_URL + url,
    formData
  );
  return res;
};
