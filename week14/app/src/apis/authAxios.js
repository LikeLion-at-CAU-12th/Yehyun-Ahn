// AuthAxios.js

import axios from "axios";
import { getNewRefreshToken } from "./user";

const baseURL = `http://yangzzago.kro.kr:3000`;

const getAuthAxios = () => {
  const authAxios = axios.create({
    baseURL: baseURL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access")}`,
    },
  });

  authAxios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      // 리프레시 토큰 만료 확인
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const { accessToken, refreshToken } = await getNewRefreshToken();

          // 새로 받은 토큰으로 다시 요청하기
          localStorage.setItem("access", accessToken);
          localStorage.setItem("refresh", refreshToken);

          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return axios(originalRequest);
        } catch (error) {
          // 리프레시 토큰이 만료되면 로그아웃 처리
          localStorage.removeItem("access");
          localStorage.removeItem("refresh");
          window.location.href = "/"; // 로그인 페이지로 이동
          return Promise.reject(error);
        }
      }

      return Promise.reject(error);
    }
  );

  return authAxios;
};

export default getAuthAxios;
