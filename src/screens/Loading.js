import React from 'react';
import {Text} from 'react-native';
import {ScreenContainer} from 'react-native-screens';

const Loading = () => {
  return (
    <ScreenContainer style={{justifyContent: 'center', alignContent: 'center'}}>
      <Text>Loading...</Text>
    </ScreenContainer>
  );
};

export default Loading;
