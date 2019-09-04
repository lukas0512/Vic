import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Scroll = styled.ScrollView`
    background-color: transparent;
`;

export const FooterChat = styled.View`
    height: 60px;
    background-color: #fff;
    border-top-width: 3;
    border-top-color: #054f77;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export const FixedBackground = styled.ImageBackground`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
`;

export const TextBox = styled.TextInput`
    border-bottom-width: 1;
    border-bottom-color: #054f77;
    width: 75%;
    margin-right: 2%;
`;

export const BoxMicrophone = styled.TouchableOpacity`
    background-color: #054f77;
    justify-content: center;
    align-items: center;
    height: 75%;
    width: 7%;
    border-radius: 3px;
`;

export const BoxButtonSend = styled.TouchableOpacity`

`;

