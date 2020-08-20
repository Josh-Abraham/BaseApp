import axios from 'axios';

const baseUrl = "http://localhost:5000/";

export function getData(path) {
  let url = `${baseUrl}${path}`;
  return axios.get(`${url}`);
}

export function getBaseData() {
  return getData('')
}

export function getSampleData() {
  return getData('getSampelInfo')
}