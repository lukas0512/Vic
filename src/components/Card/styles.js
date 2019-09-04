import styled from 'styled-components/native';

export const NoticiasContainer = styled.View`
    background-color: #fff;
    padding-top: 20;
    padding-bottom: 20;
    padding-left: 20;
    padding-right: 20;
    margin-top: 2%;
    width: 100%;
`;
export const NoticiasTitle = styled.Text`
    text-transform: capitalize;
    font-size: 16px;
    font-weight: bold;
    color: #333;
`;
export const NoticiasDesc = styled.Text.attrs(props =>({
    numberOfLines: ((props.lines) ? 2 : null),
}))`
    font-size: 16;
    color: #999;
    margin-top: 5;
`;
export const NoticiasButton = styled.TouchableOpacity`
    border-top-width: 1;
    border-top-color: #ddd;
    justify-content: center;
    align-items: flex-end;
    margin-top: 10;
`;
export const NoticiasButtonText = styled.Text`
    font-size: 16;
    color: #054f77;
    font-weight: bold;
`;
