import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import EStyleSheet from 'react-native-extended-stylesheet';

import { LoginSignup } from './Screens';
import { Colors, Metrics } from './Themes';

EStyleSheet.build({
  ...Colors,
  ...Metrics,
});

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <LoginSignup />
    );
  }
}

export default App;
