import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSsecure = axios.create({
  baseURL: 'https://bistro-boss-server-sable-mu.vercel.app'
})
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  //dnjsgyfujsdjfk
  axiosSsecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token');
    // console.log('request stoppded by intersepdecs', token)
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }, function (error) {
    //Do somthing
    return Promise.reject(error)
  });
  //intercepts 401 and 403 status
  axiosSsecure.interceptors.response.use(function (response) {
    return response;
  }, async (error) => {
    const ststus = error.response.status;
    // console.log('status error in the interseptor', ststus)
    //ofdstghbiefr
    if (ststus === 401 || ststus === 403) {
      await logOut();
      navigate('/login')
    }
    return Promise.reject(error);
  })

  return axiosSsecure;
};

export default useAxiosSecure;