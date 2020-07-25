import React, {useContext} from 'react';
import {View, Button} from 'react-native';
import {AuthContext} from './context';

const SignIn = ({navigation}) => {
  const {signIn} = useContext(AuthContext);

  return (
    <View style={{flex: 1, justifyContent: 'space-around'}}>
      <Button title="Sign In" onPress={() => signIn()} />
      <Button title="Register" onPress={() => navigation.push('Register')} />
    </View>
  );
};

export default SignIn;
