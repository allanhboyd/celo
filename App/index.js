import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AuthContext } from "./context";
import {
  SignIn,
  Search,
  Home,
  Details,
  Search2,
  ProfileScreen,
  TransferAmount,
  Splash,
  History,
  Read,
  Articles
} from "./Screens";
import Splashscreen from "../modules/splashscreen";
import Ionicons from 'react-native-vector-icons/Ionicons';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>

<AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "Sign In", headerShown: false }}
    />

    <AuthStack.Screen
      name="Articles"
      component={Articles}
      options={{ title: "Articles", headerShown: false }}
    />

    <AuthStack.Screen
      name="Transfer"
      component={TransferAmount}
      options={{ title: "Transfer", headerShown: false }}
    />

    <AuthStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ title: "Profile", headerShown: false }}
    />

   

<AuthStack.Screen
      name="Read"
      component={Read}
      options={{ title: "Read", headerShown: false }}
    />



    <AuthStack.Screen
      name="TransferAmount"
      component={TransferAmount}
      options={{ title: "TransferAmount", headerShown: false }}
    />


<AuthStack.Screen
      name="History"
      component={History}
      options={{ title: "History", headerShown: false }}
    />

  </AuthStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({
        title: route.params.name
      })}
    />
  </HomeStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search} />
    <SearchStack.Screen name="Search2" component={Search2} />
  </SearchStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Search" component={SearchStackScreen} />
  </Tabs.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="Profile" component={ProfileStackScreen} />
  </Drawer.Navigator>
);


const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={DrawerScreen}
        options={{
          animationEnabled: false
        }}
      />
    ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false
          }}
        />
      )}

  </RootStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    // return <Splash />;
    return <Splashscreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};