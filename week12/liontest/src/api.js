import axios from 'axios';

const API_BASE = 'https://gominzipsession.o-r.kr/liontest';

export const fetchQuestions = () => {
  return axios.get(`${API_BASE}/question`);
};

export const submitAnswers = (answers) => {
  return axios.post(`${API_BASE}/result`, { answers });
};

export const fetchResult = (correctCount) => {
  return axios.get(`${API_BASE}/result/${correctCount}`);
};
