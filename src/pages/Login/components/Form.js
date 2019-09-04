import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from '@react-native-community/async-storage';

import { Container, Label, LoginButton, ButtonText, Input } from "./styles";
import { onSignIn } from "../../../services/auth";
// import TOKEN_KEY from "../../../services/auth";

export default class Form extends React.Component {
    state = {
        login: '',
        senha: '',
        device_token: '',
    };

    handleLoginChange = (login) => {
        this.setState({ login });
    };
    handleSenhaChange = (senha) => {
        this.setState({ senha });
      };
      
    render() {
        return (
            <Container>
                <Label>
                    <Icon
                        style={{ marginLeft: 10 }}
                        name="account-circle"
                        size={25}
                        color="#fff"
                    />
                    <Input
                        value={this.state.login}
                        placeholder="Usuario"
                        placeholderTextColor="white"
                        onChangeText={
                            this.handleLoginChange
                        }
                    />
                </Label>
                <Label>
                    <Icon
                        style={{ marginLeft: 10 }}
                        name="lock"
                        size={25}
                        color="#fff"
                    />
                    <Input
                        value={this.state.senha}
                        placeholder="Senha"
                        placeholderTextColor="white"
                        secureTextEntry={true}
                        onChangeText={
                            this.handleSenhaChange
                        }
                    />
                </Label>
                <LoginButton
                    onPress={() => {
                        onSignIn(this.state)
                            .then((response) => {
                                console.log(response);
                                if(response.data.isValid){
                                    let device_token = response.data.messages[0].device_token;
                                    let user_storage = response.data.messages;
                                    AsyncStorage.setItem('device_token', device_token);
                                    AsyncStorage.setItem('user_storage', user_storage);
                                    this.props.navigation.navigate('SignedIn');
                                }
                            }) 
                            .catch((error) => alert(JSON.parse(error.response.data.errors[0]).Texto))           
                    }}
                    disabled={
                        this.state.login && this.state.senha ? false : true
                    }
                    active={this.state}
                >
                    <ButtonText active={this.state}>Login</ButtonText>
                </LoginButton>
            </Container>
        );
    }
}
