import axios from 'axios';

const BASE_URL = 'http://cors-anywhere.herokuapp.com/http://13.209.5.193:8000';

export const getMainVideoList = async (category) => {
  console.log(category);
  const response = await axios.get(`${BASE_URL}/category/${category}`);
  return response;
};

export const getRecommandVideoList = async () => {
  const response = await axios.get(`${BASE_URL}/recommend`);
  return response;
};
