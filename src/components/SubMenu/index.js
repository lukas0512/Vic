import React from 'react';

import { View } from 'react-native';
import { NavItemStyle, NavSection } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';


const SubMenu = () => (<View>
    <NavSection>
        <NavItemStyle onPress={console.log(this.props)}>
        Isto é um teste
        </NavItemStyle>
        <Icon name="caret-right" 
            size={15} 
            color="#054f77" 
        />
    </NavSection>
    <NavSection>
        <NavItemStyle onPress={console.log(this.props)}>
        este aqui é um teste diferente
        </NavItemStyle>
        <Icon name="caret-right" 
            size={15} 
            color="#054f77" 
        />
    </NavSection>
    <NavSection>
        <NavItemStyle onPress={console.log(this.props)}>
        Vic Legal! 
        </NavItemStyle>
        <Icon name="caret-right" 
            size={15} 
            color="#054f77" 
        />
    </NavSection>
    <NavSection>
        <NavItemStyle onPress={console.log(this.props)}>
        Teste 4
        </NavItemStyle>
        <Icon name="caret-right" 
            size={15} 
            color="#054f77" 
        />
    </NavSection>
    <NavSection>
        <NavItemStyle onPress={console.log(this.props)}>
        Este é um texto muito longo para usar como sugestão de texto,
         e irá gerar uma quebra de linha
        </NavItemStyle>
        <Icon name="caret-right" 
            size={15} 
            color="#054f77" 
        />
    </NavSection>
    <NavSection>
        <NavItemStyle onPress={console.log(this.props)}>
        Teste 4
        </NavItemStyle>
        <Icon name="caret-right" 
            size={15} 
            color="#054f77" 
        />
    </NavSection>
    <NavSection>
        <NavItemStyle onPress={console.log(this.props)}>
        Teste 4
        </NavItemStyle>
        <Icon name="caret-right" 
            size={15} 
            color="#054f77" 
        />
    </NavSection>
    <NavSection>
        <NavItemStyle onPress={console.log(this.props)}>
        Teste 4
        </NavItemStyle>
        <Icon name="caret-right" 
            size={15} 
            color="#054f77" 
        />
    </NavSection>
    </View>)

    export default SubMenu;
    