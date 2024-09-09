
import Constant from "../utils/Constant"
import axios from 'axios'


export const AxiosInstance = axios.create({
    baseURL: Constant?.URL.baseUrl,
})