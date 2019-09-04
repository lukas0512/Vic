import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Fontisto';
import SvgUri from 'react-native-svg-uri';
import logo from '../../../assets/svg/vic_branco.svg'


import { ContainerHeader, MenuLateral, Logo, TextLogo, Novidadades } from './styles';

const Header = ( props ) => (
    <ContainerHeader>
        <MenuLateral>
            <Icon onPress={() => { props.navigation.openDrawer() }} name="bars" size={30} color="#fff" />
        </MenuLateral>
        <Logo>
            <SvgUri
                style={{}}
                width="50"
                source={logo}
            />
        </Logo>
        <Novidadades>
            <Icon2 onPress={() => { props.navigation.navigate("News") }} name="bell-alt" size={30} color="#fff" />
        </Novidadades>
    </ContainerHeader>
);

export default Header;
