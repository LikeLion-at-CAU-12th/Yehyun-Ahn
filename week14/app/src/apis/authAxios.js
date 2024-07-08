import axios from "axios";
import { getNewRefreshToken } from "./user";

export const getAuthAxios = (token) => {
  const authAxios = axios.create({
    baseURL: `http://yangzzago.kro.kr:3000`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  authAxios.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response && error.response.status === 401) {
        try {
          const result = await getNewRefreshToken();
          if (result && result.accessToken) {
            // Update the authorization header with the new token
            error.config.headers.Authorization = `Bearer ${result.accessToken}`;
            localStorage.setItem("access", result.accessToken);
            localStorage.setItem("refresh", result.refreshToken);
            // Retry the original request with the new access token
            return await axios(error.config);
          }
        } catch (e) {
          // Handle the error (e.g., redirect to login)
          console.error("Token refresh failed", e);
          // Optionally, redirect to login page or show an alert
          alert("세션이 만료되었습니다. 다시 로그인해주세요.");
          window.location.href = "/login"; // Redirect to login page
        }
      }
      return Promise.reject(error);
    }
  );

  return authAxios;
};
