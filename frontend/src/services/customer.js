import axios from 'axios';
import { API_URL } from '../constans';

export const customerService = {
  signup: async function(name, email, password) {
    try {
      const response = await axios.post(`${API_URL}/register`, {
        name: name,
        email: email,
        password: password
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
};

