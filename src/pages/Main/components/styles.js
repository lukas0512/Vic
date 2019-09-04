import styled from 'styled-components/native';


export const ContainerHeader = styled.View`
    height: 55px;
    background-color: #054f77;
    flex-direction: row;
    margin-bottom: 10;
    border-bottom-color: #aaa;
    border-bottom-width: 3;
`;

export const MenuLateral = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    margin-left: 3%;
`;
export const Logo = styled.View`
    flex: 2;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export const TextLogo = styled.Text`
    margin-left: 3%;
    color: #fff;
    font-size: 26px;
    font-weight:bold;
`;
export const Novidadades = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-right: 3%;
`;
