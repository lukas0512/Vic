import React, { Component } from 'react';


import { Container } from './styles';

import Card from '../../components/Card';
import Header from '../../components/Header';

import { ScrollView } from 'react-native';

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = { lines: true };
        this.desc1 = "Texttão testenaodasjij lorajaa moisaoio oidoasio asdoiaosdioasido asidoi aosidoai oasidoaidoas";
        this.desc2 = "Tssssssaastão testenasasaodasjij loraasaajaa moisasasoio oidasasoasio asdoiaosdioasido asidoi aosidoai oasidoaidoas";
    }

    render() {
        return (

            <Container>
                <Header title="Novidades" navigation={ this.props.navigation } />
                <ScrollView     
                    contentContainerStyle={{ alignItems: "center" }} 
                    style={{ width: "100%" }}
                >
                    <Card title="Nova noticia 1" desc={this.desc1}></Card>
                    <Card title="oi eu sou a Vic!" desc={this.desc2}></Card>
                </ScrollView>
            </Container>
        );
    }
}

