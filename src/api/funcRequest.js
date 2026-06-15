import api from "./api";

export const post = async (endpoint, data) => {
  try {
    // const token = localStorage.getItem('token');

    const response = await api.post(endpoint, data, {
      headers: {
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        // "Accept": "application/pdf"
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error in post request: ${error}`);
    throw error;
  }
};


export const put = async (endpoint, data) => {
  try {
    const token = localStorage.getItem('token');

    const response = await api.put(endpoint, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error in put request: ${error}`);
    throw error;
  }
};

export const get = async (endpoint) => {
  try {
    const token = localStorage.getItem('token');

    const response = await api.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error in get request: ${error}`);
    throw error;
  }
};

export const deleteRequest = async (endpoint) => {
  try {
    const token = localStorage.getItem('token');

    const response = await api.delete(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error in delete request: ${error}`);
    throw error;
  }
};
