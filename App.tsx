import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {StatusBar, Text} from 'react-native';
import RootStack from './src/navigators/RootStack';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <NavigationContainer>
          <StatusBar backgroundColor={'purple'} />
          <RootStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
