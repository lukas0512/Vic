import React, { Component } from 'react';


import {
    NoticiasContainer,
    NoticiasDesc,
    NoticiasTitle,
    NoticiasButton,
    NoticiasButtonText,
} from './styles';


export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { lines: true };
    }

    render() {
        return (
            <NoticiasContainer>
                <NoticiasTitle>{this.props.title}</NoticiasTitle>
                <NoticiasDesc
                    lines={this.state.lines}
                    onPress={() => this.setState({ lines: !this.state.lines })}
                >
                    {this.props.desc}
                </NoticiasDesc>
                <NoticiasButton 
                    onPress={() => {this.props.navigation.navigate("Fruit")}}
                >
                    <NoticiasButtonText>Ver no Chat</NoticiasButtonText>
                </NoticiasButton>
            </NoticiasContainer>
        );
    }
};