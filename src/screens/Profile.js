import React, {useContext} from 'react';
import {Text, View, Button} from 'react-native';
import {AuthContext} from './context';

const Profile = ({navigation}) => {
  const {signOut} = useContext(AuthContext);
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button title="Open Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Sign Out" onPress={() => signOut()} />
    </View>
  );
};

export default Profile;
