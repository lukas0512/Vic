import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled.View`
  opacity:0.40;
  border-radius: 40px;
  height: 50px;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  margin-bottom:3%;
`;

export const Input = styled.TextInput`
    margin-left: 5%;
    font-size: 16px;
    flex:1;
`;
export const LoginButton = styled.TouchableOpacity`
    background-color: ${props => (props.active.username && props.active.password) ? "#fff" : "#DCDCDC"};
    border-radius: 40px;
    height: 50px;
    justify-content: center;
`;
export const ButtonText = styled.Text`
    font-size: 16px;
    color: #4C87B9;
    text-align: center;
    opacity: ${props => (props.active.username && props.active.password) ? 1 : 0.40};
`;
