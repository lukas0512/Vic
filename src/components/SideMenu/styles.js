import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  /* padding-Top: 20; */
`;
export const SectionHeadingStyle = styled.TouchableOpacity`
   
`;
export const ViewHeadingStyle = styled.View`
    margin-top: 2%;
    padding-bottom: 10;
    padding-top: 10;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: #D3D3D3;
`;
export const HeaderContainer = styled.View`
    height: 55px;
    flex-direction: row;
    background-color: #054f77;
    justify-content: center;
    align-items: center;
`;
export const HeaderText = styled.Text`
    color: #fff;
    font-family: 'Courier New';
    font-size: 20px;
`;
export const FooterContainer = styled.View`
    border-top-width: 1;
    border-top-color: #bbb;
    height: 100px; 
`;
export const FooterButton = styled.TouchableOpacity`
    justify-content: center;
    border-bottom-width: 1;
    border-bottom-color: #ccc;
    padding-left: 5%;
    height: 50%;
`;
export const FooterButtonText = styled.Text`
    color: #054f77;
    font-size: 16px;
`;
export const FooterButtonView = styled.View`
    flex-direction: row; 
`;

