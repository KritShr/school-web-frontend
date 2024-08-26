//axios의 인스턴스화 => 중복 제거
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL // 배포 시 ''에 URL 삽입, 개발 환경에서는 로컬호스트 사용
})

axiosInstance.interceptors.request.use(function(config){ //요청 전 다음 코드를 수행함
    const token = localStorage.getItem('token');
    config.headers.Authorization = 'Bearer '+token;
    
    return config;
}, function(err){
    return Promise.reject(err);
})

axiosInstance.interceptors.response.use((response) => {
    return response;
}, async function(err) {
    if (err.response && (err.response.data === 'TokenExpiredError' || err.response.data==='Unauthorized')) {
        console.log('JWT expired. Updating isAuth and redirecting...');
        localStorage.setItem('isAuth', 'false');
        toast.info('Login Again!');
        
        setTimeout(() => {
            window.location.href = '/login';
        }, 2000);
    }
    return Promise.reject(err);
});
export default axiosInstance;