import AsyncStorage from '@react-native-community/async-storage';
import md5 from "react-native-md5";
import DeviceInfo from 'react-native-device-info';
import uuid from 'react-native-uuid';

import api from './api';

export const onSignIn = async(obj) => {
    // MONTANDO PAYLOAD
    let working = obj;

    working.request_token = "Mzk2MDE3MjMzNjM4MzA=";
    working.senha = md5.hex_md5(working.senha);
    working.aplicacao = "e912551f-9f99-467a-b93a-40749773f4e8";
    working.device = {
        cordova_version: "0.60",
        is_virtual: false,
        manufacturer: DeviceInfo.getManufacturer(),
        model: DeviceInfo.getModel(),
        plataform: DeviceInfo.getSystemName(),
        version: DeviceInfo.getVersion(),
        serial: DeviceInfo.getSerialNumber(),
        type: 1,
        IP: "127.0.0.1"
    };
    await AsyncStorage.getItem('uuid')
        .then(response => {
            if(response !== null){
                working.device.uuid = response
            }
            let Newuuid = uuid.v4();
            AsyncStorage.setItem('uuid', Newuuid) 
            working.device.uuid = Newuuid
        })
        .catch( async () => {
            let Newuuid = uuid.v4();
            await AsyncStorage.setItem('uuid', Newuuid) 
            working.device.uuid = Newuuid
        })
        console.log(working);
    return api.post('/api/acesso/login',working)
        
}

export const onSignOut = async () => {
    state = {
        device_token: '',
      }
    
 await AsyncStorage.getItem('device_token')
    .then((value) => {
        this.state.device_token = value;
        AsyncStorage.removeItem('device_token')
    })
    .catch(err => console.log(err))

    return api.get('/api/acesso/logoff/' + this.state.device_token)
}

export const isSignedIn = async () => {
  const token = await AsyncStorage.getItem('device_token');

  return (token !== null) ? true : false;
};