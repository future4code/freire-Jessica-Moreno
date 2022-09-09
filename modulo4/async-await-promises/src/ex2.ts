import axios from "axios";
import { baseURL } from "./baseURL";

// a diferença é como o async muda de posição no aero

const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };