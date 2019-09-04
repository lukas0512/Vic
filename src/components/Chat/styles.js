import styled from "styled-components/native";

export const Container = styled.View``;
export const Ballon = styled.View`
    background-color: ${props => (props.primary ? "#fff" : "#ccc")};
    border-radius: 5;
    border-color: #ccc;
    border-width: 1;
    width: 60%;
    flex-direction: row;
    align-self: ${props => (props.primary ? "flex-start" : "flex-end")};
    margin-right: ${props => (props.primary ? "0" : "10")};
    margin-bottom: 10;
    margin-top: 10;
`;
export const BallonDirection = styled.View`
    height: 10px;
    width: 10px;
    background-color: ${props => props.primary ? "#fff" : "#ccc"};
    border-color: #ccc;
    border-top-width: 1;
    border-left-width: 1;
    transform:  rotate(45deg);
    margin-top: -6;

    right: ${props => props.primary ? "200" : "4.5"};
    top: ${props => props.primary ? "0" : "15"};
`;
