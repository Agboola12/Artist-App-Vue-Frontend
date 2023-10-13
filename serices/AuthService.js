// AuthService.js

const TOKEN_KEY = "jwt-token"; // Key to store the token in localStorage

export const AuthService = {
  // Save the token to localStorage
  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
  },

  // Retrieve the token from localStorage
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },

  // Remove the token from localStorage
  removeToken() {
    localStorage.removeItem(TOKEN_KEY);
  },

  // Check if the user is authenticated
  isAuthenticated() {
    return !!this.getToken();
  },

  

  // Perform user logout
  logout() {
    this.removeToken();
  },
};
