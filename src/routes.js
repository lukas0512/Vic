import { createAppContainer, createSwitchNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation';

import Login from './pages/Login';
import News from './pages/News';
import Main from './pages/Main';
import SideMenu from './components/SideMenu';
import { Dimensions } from 'react-native';

export const SignedOutRoutes = 
    createSwitchNavigator({
        Login: Login,
    });

export const SignedInRoutes = 
    createDrawerNavigator({
    Main: {
        screen: Main,
        navigationOptions: {
            title: "Main"
        }
    },
    News: {
        screen: News,
        navigationOptions: {
            title: "Novidades"
        }
    },
},
    {
        contentComponent: SideMenu,
        drawerWidth: Dimensions.get('window').width - 80,
    }
);

export const createRootNavigator = (signedIn = false) => {
    return createAppContainer(createStackNavigator({
      SignedIn: { screen: SignedInRoutes },
      SignedOut: { screen: SignedOutRoutes }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut",
      navigationOptions: {
        gesturesEnabled: false
      }
    }));
  };
  