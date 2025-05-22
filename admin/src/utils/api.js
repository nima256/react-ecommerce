import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

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
      apiUrl + url,
      params
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const uploadImage = async (url, formData) => {
  const { res } = await axios.post(
    apiUrl + url,
    formData
  );
  return res;
};
