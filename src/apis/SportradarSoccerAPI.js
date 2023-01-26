import axios from 'axios';
import axiosRateLimit from "axios-rate-limit";

const API = axios.create({
baseURL: "https://api.sportradar.us/soccer/trial/v4/en/"
})

const rateLimitedAPI = axiosRateLimit(API, { maxRequests: 1, perMilliseconds: 1000 });

export default rateLimitedAPI;