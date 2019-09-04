import React from 'react';

import { Buffer } from 'buffer';
global.Buffer = Buffer; // very important

import { isSignedIn } from './services/auth';
import { createRootNavigator } from './routes';

export default class App extends React.Component {
    state = {
      signed: false,
    };
  
    componentDidMount() {
      isSignedIn()
        .then(res => this.setState({ signed: res, signLoaded: true }))
        .catch(() => alert("Erro! Contate um administrador"));
    }
  
    render() {
      const { signed } = this.state;
      const Layout = createRootNavigator(signed);
      return <Layout />;
    }
  }