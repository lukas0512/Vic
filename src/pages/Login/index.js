import React, { Component } from 'react';
import { Text } from 'react-native';

import { Container, Top, Box} from './styles';
import logo from '../../assets/svg/vic_branco.svg';
import SvgUri from 'react-native-svg-uri';
import Form from './components/Form';

import  Config  from  'react-native-config';


const Login = ({ navigation }) => (
    <Container>
        <Top>
            <SvgUri 
                width="150" 
                source={logo} 
            />
        </Top>
        <Box>
            <Text>{Config.MY_URL}</Text>
            <Form navigation={ navigation }></Form>
        </Box>
    </Container>
);

Login.navigationOptions = {
    title: 'Login',
}

export default Login;