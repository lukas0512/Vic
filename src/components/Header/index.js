import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {
    Container,
    HeaderText,
    HeaderButton,
} from './styles';

export default class Header extends Component {
  render() {
    return (
        <Container >
            <HeaderButton onPress={ () => { this.props.navigation.navigate("Main") }}>
                <Icon name="arrow-left" size={25} color="#fff" style={{ }}/>
            </HeaderButton>
            <HeaderText>{this.props.title}</HeaderText>
        </Container>
    )
  }
}
