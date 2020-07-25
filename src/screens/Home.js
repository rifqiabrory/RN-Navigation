import React from 'react';
import {Text, View, Button} from 'react-native';

const SignIn = ({navigation}) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Open Drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
};

export default SignIn;
