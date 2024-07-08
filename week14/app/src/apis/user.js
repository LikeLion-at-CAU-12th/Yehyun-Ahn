// user.js

import axios from "axios";

const baseURL = `http://yangzzago.kro.kr:3000`;

export const signUp = async (id, pw, name, age) => {
  const result = await axios.post(`${baseURL}/signup`, {
    id,
    pw,
    name,
    age,
  });
  return result.data;
};

export const login = async (id, pw) => {
  const result = await axios.post(`${baseURL}/login`, {
    id,
    pw,
  });
  return result.data;
};

export const getMyPage = async () => {
  const accessToken = localStorage.getItem("access");
  if (!accessToken) {
    throw new Error("Access token not found");
  }

  const authAxios = axios.create({
    baseURL: baseURL,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const response = await authAxios.get("/mypage");
  return response.data;
};

export const getNewRefreshToken = async () => {
  try {
    const accessToken = localStorage.getItem("access");
    const refreshToken = localStorage.getItem("refresh");

    const result = await axios.post(
      `${baseURL}/refresh`,
      {
        refreshToken,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return result.data;
  } catch (error) {
    throw new Error("Refresh token expired");
  }
};

export const logout = () => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
};
