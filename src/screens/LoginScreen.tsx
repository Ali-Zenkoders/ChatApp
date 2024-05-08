import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LoginScreen = () => {
  return (
    <View style={styles.LoginContainer}>
      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  LoginContainer: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
});
