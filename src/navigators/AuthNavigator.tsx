import React from 'react';
import AuthLayout from '../layouts/AuthLayout';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthLayout>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          // contentStyle: {backgroundColor: 'transparent'},
        }}>
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            title: 'Sign In',
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            title: 'Sign Up',
          }}
        />
      </Stack.Navigator>
    </AuthLayout>
  );
};

export default AuthNavigator;
