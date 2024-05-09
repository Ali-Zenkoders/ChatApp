import {Platform, StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({children}) => {
  return (
    <View style={styles.AuthContainer}>
      {/* <ImageBackground
        source={require('../../static/background.jpg')}
        resizeMode="cover"
        style={styles.BackgroundImage}> */}
      <SafeAreaView edges={['top']} style={{flex: 1}}>
        {children}
      </SafeAreaView>
      {/* </ImageBackground> */}
    </View>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  AuthContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  BackgroundImage: {
    flex: 1,
    paddingVertical: Platform.OS === 'ios' ? 60 : 0,
  },
});
