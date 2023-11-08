// import { API_URL } from '../constans';

export const customerService = {
  signup: async function (name, email, password) {
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors',
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  },
};