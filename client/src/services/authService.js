import axios from "axios";

const API_URL = "http://localhost:5000/api/";

class AuthService {
  async login(username, password) {
    const response = await axios
      .post(API_URL + "login", {
        username,
        password
      });
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(fullName, username, email, password) {
    return axios.post(API_URL + "register", {
        fullName,
        username,
        email,
        password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();

//credit github.com/bezkoder
