import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Chat from '../../components/Chat';
import Header from './components/Header';

import {
    Container, 
    Scroll, 
    FooterChat, 
    FixedBackground, 
    TextBox, 
    BoxMicrophone,
    BoxButtonSend, 
} from './styles';

const Main = ({ navigation }) => (
    <Container>
        <Header navigation={navigation} />

        <Scroll>
            <Chat />
        </Scroll>
        
        <FixedBackground 
            source={require('../../assets/img/estampa_de_fundo.png')}
        /> 


        <FooterChat>
            <TextBox placeholder="Digite sua mensagem aqui "/>
            <BoxButtonSend>
                <Icon name="send" size={30} color="#054f77" style={{ marginRight: "2%" }}/>
            </BoxButtonSend>
            <BoxMicrophone>
                <Icon2 name="microphone" size={25} color="#fff" />
            </BoxMicrophone>

        </FooterChat>


    </Container>
);

Main.navigationOptions = {
    title: 'Main',
}

export default Main;
