import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ImageBackground,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {useAuth} from '../utils/useAuth';
import PrimaryButton from '../components/PrimaryButton';
import Icon from 'react-native-vector-icons/Entypo';

export interface SignInScreenProps {
  navigation: any;
}

const SignInScreen: React.FC<SignInScreenProps> = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const user = useSelector((state: RootState) => state.user);
  const {handleSignIn, handleLogout} = useAuth();

  const signIn = () => {
    Alert.alert('Values', JSON.stringify(state), [{text: 'close'}]);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ImageBackground
        source={require('../../static/background.jpg')}
        resizeMode="cover"
        style={styles.BackgroundImage}>
        <KeyboardAvoidingView behavior="padding" style={styles.AuthContainer}>
          <Text style={styles.ScreenHeading}>Sign In</Text>
          {/* Fields Container */}
          <View style={styles.FieldsContainer}>
            {/* Field */}
            <View style={styles.Field}>
              <Text style={styles.Label}>Enter Email:</Text>
              <TextInput
                placeholder="JohnDoe@example.com"
                value={state.email}
                style={styles.Input}
                onChangeText={(text: string) =>
                  setState(prevState => ({...prevState, email: text}))
                }
                keyboardType="email-address"
              />
            </View>
            {/* Field */}
            <View style={styles.Field}>
              <Text style={styles.Label}>Enter Password:</Text>
              <View style={styles.PasswordField}>
                <TextInput
                  placeholder="john123"
                  value={state.password}
                  style={[styles.Input, {paddingRight: 62}]}
                  onChangeText={(text: string) =>
                    setState(prevState => ({...prevState, password: text}))
                  }
                  keyboardType="default"
                  secureTextEntry={isVisible ? false : true}
                />
              </View>
              <TouchableOpacity
                style={styles.PasswordIcon}
                onPress={() => setIsVisible(!isVisible)}>
                {isVisible ? (
                  <Icon name="eye-with-line" size={24} color={'black'} />
                ) : (
                  <Icon name="eye" size={24} color={'black'} />
                )}
              </TouchableOpacity>
            </View>
            <PrimaryButton title={'Sign In'} onPress={signIn} />
            <View style={styles.BottomTextContainer}>
              <Text style={styles.BottomText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.replace('SignUp')}>
                <Text style={styles.Link}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  BackgroundImage: {
    flex: 1,
    paddingVertical: Platform.OS === 'ios' ? 60 : 0,
  },
  AuthContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    rowGap: 18,
  },
  ScreenHeading: {
    fontSize: 24,
    fontWeight: '700',
    color: 'purple',
  },
  FieldsContainer: {
    width: '100%',
    rowGap: 16,
  },
  Field: {
    rowGap: 6,
  },
  PasswordField: {
    position: 'relative',
  },
  PasswordIcon: {
    position: 'absolute',
    right: 20,
    top: 38,
  },
  Label: {
    fontSize: 16,
    fontWeight: '500',
  },
  Input: {
    backgroundColor: 'transparent',
    paddingHorizontal: 12,
    paddingVertical: 16,
    fontSize: 14,
    borderWidth: 1,
    borderColor: 'navy',
    borderRadius: 14,
  },
  BottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
  },
  BottomText: {
    // color: 'gray',
  },
  Link: {
    color: 'blue',
    textDecorationLine: 'underline',
    textDecorationColor: 'blue',
  },
});
