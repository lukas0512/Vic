import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
    colors: ['#4C87B9', '#87CEFA'],
    start: {x: 0, y: 0},
    end: { x:1, y:1 },
})`
  flex: 1;
  align-items: center;
  justify-content:center;
`;

export const Top = styled.View`
    flex:1;
    justify-content: center; 
    align-items: center;
`;

export const Box = styled.View`
    flex: 1;
    width: 90%;
    padding: 5%;
`;