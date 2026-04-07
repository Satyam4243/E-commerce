// import axios from "axios";

// const getToken = () => localStorage.getItem("token");

// const getHeaders = (isFormData = false) => ({
//   headers: {
//     Authorization: getToken() ? `Bearer ${getToken()}` : "",
//     ...(isFormData ? {} : { "Content-Type": "application/json" }),
//   },
// });

// // export const fetchDataFromApi = async (url) => {
// //   try {
// //     const { data } = await axios.get(
// //       process.env.REACT_APP_BASE_URL + url,
// //       getHeaders(),
// //     );
// //     return data;
// //   } catch (error) {
// //     console.log("GET API ERROR:", error?.response?.data || error);
// //     return null;
// //   }
// // };

// const BASE_URL =
//   process.env.REACT_APP_BASE_URL || "http://localhost:8000";

// export const fetchDataFromApi = async (url) => {
//   try {
//     const { data } = await axios.get(BASE_URL + url, getHeaders());
//     return data;
//   } catch (error) {
//     console.log("GET API ERROR:", error?.response?.data || error);
//     return [];
//   }
// };

// export const postData = async (url, payload) => {
//   try {
//     const { data } = await axios.post(
//       process.env.REACT_APP_BASE_URL + url,
//       payload,
//       getHeaders(),
//     );
//     return data;
//   } catch (error) {
//     console.log("POST API ERROR:", error?.response?.data || error);
//     return null;
//   }
// };

// export const uploadImage = async (url, formData) => {
//   try {
//     const { data } = await axios.post(
//       process.env.REACT_APP_BASE_URL + url,
//       formData,
//       getHeaders(true),
//     );
//     return data;
//   } catch (error) {
//     console.log("UPLOAD ERROR:", error);
//     return null;
//   }
// };

// export const editData = async (url, updatedData) => {
//   //add a new line--
//   try {
//     const { data } = await axios.put(
//       process.env.REACT_APP_BASE_URL + url,
//       updatedData,
//       getHeaders(),
//     );
//     return data;
//   //that's place add a new line--
//   } catch (error) {
//     console.log("PUT API ERROR:", error?.response?.data || error);
//     return null;
//   }
// };

// export const deleteData = async (url) => {
//   const { data } = await axios.delete(
//     process.env.REACT_APP_BASE_URL + url,
//     getHeaders(),
//   );
//   return data;
// };

// export const deleteImages = async (url, image) => {
//   const { data } = await axios.delete(process.env.REACT_APP_BASE_URL + url, {
//     ...getHeaders(),
//     data: image,
//   });
//   return data;
// };

import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8000";

const getToken = () => localStorage.getItem("token");

const getHeaders = (isFormData = false) => ({
  headers: {
    Authorization: getToken() ? `Bearer ${getToken()}` : "",
    ...(isFormData ? {} : { "Content-Type": "application/json" }),
  },
});

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(BASE_URL + url, getHeaders());
    return data;
  } catch (error) {
    console.log("GET API ERROR:", error?.response?.data || error);
    return null;
  }
};

export const postData = async (url, payload) => {
  try {
    const { data } = await axios.post(BASE_URL + url, payload, getHeaders());
    return data;
  } catch (error) {
    console.log("POST API ERROR:", error?.response?.data || error);
    return null;
  }
};

export const uploadImage = async (url, formData) => {
  try {
    const { data } = await axios.post(
      BASE_URL + url,
      formData,
      getHeaders(true),
    );
    return data;
  } catch (error) {
    console.log("UPLOAD ERROR:", error);
    return null;
  }
};

export const editData = async (url, updatedData) => {
  try {
    const { data } = await axios.put(BASE_URL + url, updatedData, getHeaders());
    return data;
  } catch (error) {
    console.log("PUT API ERROR:", error?.response?.data || error);
    return null;
  }
};

export const deleteData = async (url) => {
  try {
    const { data } = await axios.delete(BASE_URL + url, getHeaders());
    return data;
  } catch (error) {
    console.log("DELETE ERROR:", error);
    return null;
  }
};
