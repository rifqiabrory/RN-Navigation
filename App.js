import React, {useState, useEffect, useMemo} from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

// Context
import {AuthContext} from './src/screens/context';

// screens
import {SignIn, Register, Home, Search, Profile, Loading} from './src/screens';

// Home Stack Navigator
const HomeStack = createStackNavigator();
// Screen Navigator
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
);

// Search Stack Navigator
const SearchStack = createStackNavigator();
// Screen Navigator
const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search} />
  </SearchStack.Navigator>
);

// Profile Stack Navigator
const ProfileStack = createStackNavigator();
// Profile Drawer Screens
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

// Bottom Tabs Navigator
const Tabs = createBottomTabNavigator();
// Bottom Tabs Stack Screens
const BottomTabsScreens = () => (
  <Tabs.Navigator tabBarOptions={{showLabel: false}}>
    <Tabs.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarIcon: ({color}) => (
          <Icon name="home-outline" size={25} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Search"
      component={SearchStackScreen}
      options={{
        tabBarIcon: ({color}) => <Icon name="search" size={25} color={color} />,
      }}
    />
  </Tabs.Navigator>
);

// Drawer Navigator
const Drawer = createDrawerNavigator();
// Drawer Stack Screens
const DrawerStackScreens = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={BottomTabsScreens} />
    <Drawer.Screen name="Profile" component={ProfileStackScreen} />
  </Drawer.Navigator>
);

// Authentication Navigator
const AuthenticationStack = createStackNavigator();
// Authentication Stack Screens
const AuthenticationStackScreens = () => (
  <AuthenticationStack.Navigator>
    <AuthenticationStack.Screen
      name="SignIn"
      component={SignIn}
      options={{title: 'Sign In'}}
    />
    <AuthenticationStack.Screen
      name="Register"
      component={Register}
      options={{title: 'Register'}}
    />
  </AuthenticationStack.Navigator>
);

// Root Navigator
const RootStackNavigator = createStackNavigator();
const RootNavigator = ({token}) => (
  <RootStackNavigator.Navigator headerMode="none">
    {!token ? (
      <RootStackNavigator.Screen
        name="Authentication"
        component={AuthenticationStackScreens}
      />
    ) : (
      <RootStackNavigator.Screen
        name="Application"
        component={DrawerStackScreens}
      />
    )}
  </RootStackNavigator.Navigator>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);

  const authContext = useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setToken('dgsgdf');
      },
      register: () => {
        setIsLoading(false);
        setToken('sdfsgst');
      },
      signOut: () => {
        setIsLoading(false);
        setToken(null);
      },
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootNavigator token={token} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
