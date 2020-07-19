import React from 'react';
import { StatusBar, View } from 'react-native';
import 'react-native-gesture-handler';
import AppContainer from './hooks';
import Routes from './routes';


const App: React.FC = () => (
  <View style={{ backgroundColor: '#312e38', flex: 1 }}>
    <AppContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <Routes />
    </AppContainer>
  </View>
);

export default App;
