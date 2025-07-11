import axios from "axios";

const apiUrl = process.env.REACT_APP_SERVER_API_URL || "http://localhost:8000";

const token = localStorage.getItem("token");

const params = {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": `application/json`,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(apiUrl + url, params);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const uploadImage = async (url, formData) => {
  const { res } = await axios.post(apiUrl + url, formData);
  return res;
};

export const postData = async (url, formData) => {
  try {
    const response = await fetch(apiUrl + url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": `application/json`,
      },

      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorData = await response.json();
      return errorData;
    }
  } catch (error) {
    console.error(error);
  }
};

export const editData = async (url, formData) => {
  const response = await fetch(apiUrl + url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": `application/json`,
    },

    body: JSON.stringify(formData),
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const errorData = await response.json();
    return errorData;
  }
};

export const deleteData = async (url) => {
  const { res } = await axios.delete(`${apiUrl}${url}`, params);
  return res;
};

export const deleteImages = async (url, image) => {
  const { res } = await axios.delete(`${apiUrl}${url}`, image);
  return res;
};
