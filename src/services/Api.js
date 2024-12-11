import axios from "axios";

export const urlApi = 'https://imob-backend.vercel.app/';

const Api = axios.create({
  baseURL: 'https://imob-backend.vercel.app/',
  headers:{
  'Content-Type': 'application/json'
  }
});

export default Api;