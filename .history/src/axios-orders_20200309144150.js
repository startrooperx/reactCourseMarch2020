import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-9a88e.firebaseio.com/.json'
}); 

export default instance;