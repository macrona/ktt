import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import NProgress from 'nprogress';

NProgress.settings.showSpinner = false;
// import { config } from 'process';

// eslint-disable-next-line import/first
import { message } from 'antd';
const request = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
    timeoutErrorMessage: 'Timeout error',

})

request.interceptors.request.use((config) => {
    let token = sessionStorage.getItem('token');
    NProgress.start();
    if (token) {
        config.headers['Authorization'] = 'macrona' + token;
    }
    return config;
})

request.interceptors.response.use(
    (res) => {
        NProgress.done();
        if (res.status !== 200) {
            if (res.status === 401) {
                message.info(res.status);
            } else {
                message.error(res.status);
            }
        }
        if (res.status === 200) {
            return res.data;
        } else {
            return res;
        }
    },
    err => {
        NProgress.done();
        return err;
    }
)

export default request;