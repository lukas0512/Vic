import React, { Component } from "react";

import { View, Text } from "react-native";

import { Container, Ballon, BallonDirection } from "./styles";

export default class Chat extends Component {
    render() {
        return (
            <Container>
                <Ballon>
                    <Text style={{ padding: 7, fontSize: 16, width: "100%" }}>
                        {" "}
                        Hello Man sasasasasasasaaaa{" "}
                    </Text>
                    <BallonDirection />
                </Ballon>
                <Ballon primary>
                    <Text style={{ padding: 7, fontSize: 16, width: "100%" }}>
                        {" "}
                        Hello Boy{" "}
                    </Text>
                    <BallonDirection primary/>
                </Ballon>
                <Ballon primary>
                    <Text style={{ padding: 7, fontSize: 16, width: "100%" }}>
                        {" "}
                        Hello Boy{" "}
                    </Text>
                    <BallonDirection primary/>
                </Ballon>
                <Ballon >
                    <Text style={{ padding: 7, fontSize: 16, width: "100%" }}>
                        {" "}
                        Hello Boy{" "}
                    </Text>
                    <BallonDirection/>
                </Ballon>
                <Ballon primary>
                    <Text style={{ padding: 7, fontSize: 16, width: "100%" }}>
                        {" "}
                        Hello Boy{" "}
                    </Text>
                    <BallonDirection primary/>
                </Ballon>
                <Ballon >
                    <Text style={{ padding: 7, fontSize: 16, width: "100%" }}>
                        {" "}
                        Hello Boy{" "}
                    </Text>
                    <BallonDirection />
                </Ballon>
                <Ballon primary>
                    <Text style={{ padding: 7, fontSize: 16, width: "100%" }}>
                        {" "}
                        Hello Boy{" "}
                    </Text>
                    <BallonDirection primary/>
                </Ballon>
                <Ballon primary>
                    <Text style={{ padding: 7, fontSize: 16, width: "100%" }}>
                        {" "}
                        Hello Boy{" "}
                    </Text>
                    <BallonDirection primary/>
                </Ballon>
                
            </Container>
        );
    }
}
