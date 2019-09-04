import axios from 'axios';
import  Config  from  'react-native-config';

const api = axios.create({
    baseURL: Config.MY_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

// const post = (uri,obj, saveSection) => (
//     api.post(uri, obj)
//     if (saveSection) {
//         .then()
//     }
// ) 


export default api;