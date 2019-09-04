import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { 
    Container,
    SectionHeadingStyle,
    FooterButton,
    FooterButtonText,
    FooterContainer,
    HeaderContainer,
    HeaderText,
    ViewHeadingStyle,
    FooterButtonView
} from './styles';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SubMenu from '../SubMenu';
import { onSignOut } from "../../services/auth";

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }
  constructor(props) {
    super(props);
    this.state = { submenu: true};
  }

  render () {
    return (
      <Container>
          <HeaderContainer>
            <Icon name="user-circle" size={30} color="#fff" style={{marginRight: "10%"}}/>
            <HeaderText >
              Lucas S
            </HeaderText>
          </HeaderContainer>
        <ScrollView>
          <View>
          <SectionHeadingStyle 
            onPress={() => alert('Limpa Conversa')}
            >
                <ViewHeadingStyle>
                <Icon name="redo-alt" 
                    size={25} 
                    color="#fff" 
                    style={{marginRight: "20%"}}
                />
                    <Text style={{ color: "#fff" }} >
                        LIMPAR CONVERSA
                    </Text>                  
                </ViewHeadingStyle>
            </SectionHeadingStyle>

            <SectionHeadingStyle 
            onPress={() => this.setState({ submenu: !this.state.submenu })}
            >
                <ViewHeadingStyle>
                    <Icon name="list-alt" size={25} color="#fff" style={{marginRight: "5%"}}/>
                    <Text style={{ color: "#fff" }} >
                        SUGESTÕES DE PERGUNTAS
                    </Text>
                </ViewHeadingStyle>
            </SectionHeadingStyle>

            {this.state.submenu ? <SubMenu /> : null}
            
          </View>
        </ScrollView>
        <FooterContainer>
            <SafeAreaView>
            <FooterButton>
                <FooterButtonView>
                <Icon name="cog" 
                        size={25}
                        color="#054f77" 
                        style={{ marginRight: "10%" }}
                />
                    <FooterButtonText>
                        Configurações
                    </FooterButtonText>
                </FooterButtonView>
            </FooterButton>
            <FooterButton onPress={() => onSignOut().then(() => this.props.navigation.navigate("SignedOut"))}>
                <FooterButtonView>
                    <Icon name="sign-out-alt" 
                        size={25}
                        color="#054f77" 
                        style={{ marginRight: "10%" }}
                    />
                    <FooterButtonText>
                        Loggoff
                    </FooterButtonText>
                </FooterButtonView>
            </FooterButton>
            </SafeAreaView>
        </FooterContainer>
      </Container>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
