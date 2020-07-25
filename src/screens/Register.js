import React from 'react';
import {Text, View, Button} from 'react-native';

const Register = ({navigation}) => {
  return (
    <View>
      <Text> Register Component </Text>
      <Button title="Sign In" onPress={() => navigation.push('SignIn')} />
    </View>
  );
};

export default Register;
