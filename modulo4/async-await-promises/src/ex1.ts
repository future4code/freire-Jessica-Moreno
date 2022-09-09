import axios from 'axios';
import { baseURL } from './baseURL';

//subscribers
//any[]

async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };
