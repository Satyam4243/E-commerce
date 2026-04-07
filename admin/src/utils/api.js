// import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL;

// const getAuthHeaders = (isFormData = false) => {
//   const token = localStorage.getItem("token");

//   return {
//     headers: {
//       Authorization: token ? `Bearer ${token}` : "",
//       ...(isFormData ? {} : { "Content-Type": "application/json" }),
//     },
//   };
// };

// export const fetchDataFromApi = async (url) => {
//   try {
//     const { data } = await axios.get(BASE_URL + url, getAuthHeaders());
//     return data;
//   } catch (error) {
//     console.error("GET ERROR:", error);
//     return null;
//   }
// };

// export const postData = async (url, payload) => {
//   try {
//     const { data } = await axios.post(
//       BASE_URL + url,
//       payload,
//       getAuthHeaders()
//     );
//     return data;
//   } catch (error) {
//     console.error("POST ERROR:", error);
//     return null;
//   }
// };

// export const uploadImage = async (url, formData) => {
//   try {
//     const { data } = await axios.post(
//       BASE_URL + url,
//       formData,
//       getAuthHeaders(true)
//     );
//     return data;
//   } catch (error) {
//     console.error("UPLOAD ERROR:", error);
//     return null;
//   }
// };

// export const deleteData = async (url) => {
//   try {
//     const { data } = await axios.delete(
//       BASE_URL + url,
//       getAuthHeaders()
//     );
//     return data;
//   } catch (error) {
//     console.error("DELETE ERROR:", error);
//     return null;
//   }
// };

// export const deleteImages = async (url) => {
//   try {
//     const { data } = await axios.delete(
//       BASE_URL + url,
//       getAuthHeaders()
//     );
//     return data;
//   } catch (error) {
//     console.error("DELETE IMAGE ERROR:", error);
//     return null;
//   }
// };

// export const editData = async (url, payload) => {
//   try {
//     const { data } = await axios.put(
//       BASE_URL + url,
//       payload,
//       getAuthHeaders()
//     );
//     return data;
//   } catch (error) {
//     console.error("PUT ERROR:", error);
//     return null;
//   }
// };


import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;


const api = axios.create({
  baseURL: BASE_URL,
});

const getAuthHeaders = (isFormData = false) => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
    },
  };
};


export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await api.get(url, getAuthHeaders());
    return data;
  } catch (error) {
    console.error("GET ERROR:", error.response?.data || error.message);
    return {
      success: false,
      message: error.response?.data?.message || "Something went wrong",
    };
  }
};

export const postData = async (url, payload) => {
  try {
    const { data } = await api.post(url, payload, getAuthHeaders());
    return data;
  } catch (error) {
    console.error("POST ERROR:", error.response?.data || error.message);
    return {
      success: false,
      message: error.response?.data?.message || "Something went wrong",
    };
  }
};


export const uploadImage = async (url, formData) => {
  try {
    const { data } = await api.post(
      url,
      formData,
      getAuthHeaders(true)
    );
    return data;
  } catch (error) {
    console.error("UPLOAD ERROR:", error.response?.data || error.message);
    return {
      success: false,
      message: error.response?.data?.message || "Upload failed",
    };
  }
};


export const deleteData = async (url) => {
  try {
    const { data } = await api.delete(url, getAuthHeaders());
    return data;
  } catch (error) {
    console.error("DELETE ERROR:", error.response?.data || error.message);
    return {
      success: false,
      message: error.response?.data?.message || "Delete failed",
    };
  }
};

export const deleteImages = async (url) => {
  try {
    const { data } = await axios.delete(
      BASE_URL + url,
      getAuthHeaders()
    );
    return data;
  } catch (error) {
    console.error("DELETE IMAGE ERROR:", error);
    return null;
  }
};


export const editData = async (url, payload) => {
  try {
    const { data } = await api.put(url, payload, getAuthHeaders());
    return data;
  } catch (error) {
    console.error("PUT ERROR:", error.response?.data || error.message);
    return {
      success: false,
      message: error.response?.data?.message || "Update failed",
    };
  }
};
