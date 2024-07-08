import axios from 'axios';

const baseURL = 'https://gominzipsession.o-r.kr/liontest';

export const signUp = async (id, pw, name, age) => {
  try {
    const response = await axios.post(`${baseURL}/signup`, { id, pw, name, age });
    return response.data;
  } catch (error) {
    console.error('Error during signup:', error);
    throw error;
  }
};

export const login = async (id, pw) => {
  try {
    const response = await axios.post(`${baseURL}/login`, { id, pw });
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

// Add other necessary API functions as needed
