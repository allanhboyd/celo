import React from "react";
import {StyleSheet, View, Button, Text} from "react-native";
import { AuthContext } from "./context";
import SplashScreen from '../modules/splashscreen'
import Loginpage from "../modules/loginpage";
import Profile from '../modules/profile';


const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Home = ({ navigation }) => (
  <ScreenContainer>
    <Text>Master List Screen</Text>
    <Button
      title="React Native by Example"
      onPress={() =>
        navigation.push("Details", { name: "React Native by Example " })
      }
    />
    <Button
      title="React Native School"
      onPress={() =>
        navigation.push("Details", { name: "React Native School" })
      }
    />
    <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
  </ScreenContainer>
);

export const Details = ({ route }) => (
  <ScreenContainer>
    <Text>Details Screen</Text>
    {route.params.name && <Text>{route.params.name}</Text>}
  </ScreenContainer>
);

export const Search = ({ navigation }) => (
  <ScreenContainer>
    <Text>Search Screen</Text>
    <Button title="Search 2" onPress={() => navigation.push("Search2")} />
    <Button
      title="React Native School"
      onPress={() => {
        navigation.navigate("Home", {
          screen: "Details",
          params: { name: "React Native School" }
        });
      }}
    />
  </ScreenContainer>
);

export const Search2 = () => (
  <ScreenContainer>
    <Text>Search2 Screen</Text>
  </ScreenContainer>
);

export const ProfileScreen = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);

  return (
   <Profile navigator = {navigation} />
  );
};

export const Splash = ({}) => {
    return(
      <SplashScreen/>
    )
  };

export const SignIn = ({ navigation }) => {

  return(
    <Loginpage navigator = {navigation} />
  )

};

const styles = StyleSheet.create({

  container:{
    backgroundColor: '#fff',
    margin:16,
    lineHeight:12,
    fontFamily: 'Roboto', 
    flexDirection: "column",
    padding:8
},
image:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: '#fff',
},
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  },

 
main_title : {
    color: '#707070',
    fontFamily: 'Poppins',
    fontSize: 61,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
},
main_description : {
    color: '#707070',
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '500',
    fontStyle: 'normal',
    textAlign: 'left',
    
},
red_button : {
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: { width: 2, height: 0 },
    shadowRadius: 6,
    borderRadius: 10,
    backgroundColor: '#e63950',
},
red_button_text : {
    color: 'rgba(255, 255, 255, 0.9)',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '500',
    fontStyle: 'normal',
    textAlign: 'left',
},
post_card : {
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: { width: 3, height: 0 },
    shadowRadius: 6,
    backgroundColor: '#ffffff',
},
post_card_text : {
    color: '#888888',
    fontFamily: 'Myanmar Text',
    fontSize: 17,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
},
post_card_user_text : {
    color: '#646464',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
},
post_card_date_time_text : {
    color: '#646464',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '300',
    fontStyle: 'normal',
    textAlign: 'left',
},
post_card_text_button : {
    color: '#fc8e8e',
    fontFamily: 'Poppins',
    fontSize: 17,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
},
page_title : {
    color: '#707070',
    fontFamily: 'Poppins',
    fontSize: 28,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
},
page_description : {
    color: 'rgba(112, 112, 112, 0.73)',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    textAlign: 'left',
},
/**
 * RECENT , HISTORY
 */
page_filter : {
    color: '#707070',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    textAlign: 'left',
},
post_title : {
    color: '#505050',
    fontFamily: 'Poppins',
    fontSize: 39,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
},
post_content : {
    color: '#888888',
    fontFamily: 'Myanmar Text',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
},
toolbar_text : {
    color: '#707070',
    fontFamily: 'Poppins',
    fontSize: 28,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
},
hint_large : {
    color: 'rgba(112, 112, 112, 0.45)',
    fontFamily: 'Poppins',
    fontSize: 28,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
},
wallet_card : {
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 15,
    borderRadius: 15,
    backgroundColor: '#ffffff',
},
wallet_label_text : {
    color: 'rgba(112, 112, 112, 0.67)',
    fontFamily: 'Poppins',
    fontSize: 21,
    fontWeight: '700',
    fontStyle: 'normal',
    textAlign: 'left',
},
wallet_text_large : {
    color: '#f17c8c',
    fontFamily: 'Poppins',
    fontSize: 56,
    fontWeight: '700',
    fontStyle: 'normal',
    textAlign: 'left',
    letterSpacing: 2.41,
},
wallet_text_medium : {
    color: '#f17c8c',
    fontFamily: 'Poppins',
    fontSize: 23,
    fontWeight: '700',
    fontStyle: 'normal',
    textAlign: 'left',
    letterSpacing: 0.99,
},
profile_label : {
    color: '#707070',
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
},
profile_text : {
    color: 'rgba(112, 112, 112, 0.67)',
    fontFamily: 'Poppins',
    fontSize: 40,
    fontWeight: '700',
    fontStyle: 'normal',
    textAlign: 'left',
},
profile_light_text : {
    color: '#707070',
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
}
});

