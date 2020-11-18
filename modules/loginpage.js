import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, ScrollView, ImageBackground, Dimensions, TouchableOpacity, Image, TouchableOpacityComponent} from 'react-native';
import Svg, {} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Loginpage extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }

  handleSignUp = () =>{

  }

  render() {
    console.log("login render")
    console.log({navigator})
    return (
      <View data-layer="aaca3242-7f6b-4f00-9637-5bc819e19fbe" style={styles.loginpage}>
        <ImageBackground data-layer="f7099a0d-164e-4241-a9b5-2f0b55f6ccfa" source={require('../assets/backgroundsplash.png')} style={styles.loginpage_backgroundsplash} />
        <Image source = {require('../assets/wb_logo.png')} style = {styles.icon} />
            <Text data-layer="b2d145f8-c3e6-4e9b-bab2-b322608ec64a" style={styles.loginpage_largetitledescription}>The Anonymous</Text>
            <Text data-layer="717da704-aeab-4640-b741-f0d079c75380" style={styles.loginpage_largetitle}>Whistle</Text>
            <View data-layer="de04c7b3-27dd-4ee5-8599-31610b6cba65" style={[styles.loginpage_diplaynameinput, styles.loginpage_diplaynameinput_rectangle379271fc9]}>
                <TextInput data-layer="459c9658-55ba-458d-940b-f28ebef092f4" style={styles.loginpage_diplaynameinput_label} placeholder = 'Display Name'></TextInput>
            </View>
            <View data-layer="de04c7b3-27dd-4ee5-8599-31610b6cba65" style={[styles.loginpage_diplaynameinput, styles.loginpage_diplaynameinput_rectangle379271fc9]}>
                <TextInput data-layer="459c9658-55ba-458d-940b-f28ebef092f4" style={styles.loginpage_diplaynameinput_label} placeholder = 'Your Secret'></TextInput>
            </View>
            <TouchableOpacity style={[styles.loginpage_redbutton, styles.loginpage_redbutton_rectangle3]} >
                <Text data-layer="db5d44fb-d0d0-4a90-a323-544d27597fda" style={styles.loginpage_redbutton_enter}>Enter</Text>
            </TouchableOpacity>
      </View>
    );
  }
}

Loginpage.propTypes = {

}

Loginpage.defaultProps = {

}


const styles = StyleSheet.create({
  "loginpage": {
    "opacity": 1,
    "backgroundColor": "rgba(248, 248, 248, 1)",
    "width": windowWidth,
    "height": windowHeight,
    justifyContent:'center',
    padding:35
  },
  "icon":{
    width:70,
    height:70,
  },
  "loginpage_backgroundsplash": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": "auto",
    "height": "auto",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },

  "loginpage_backgroundsplash_group1_path4": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 3,
      "height": 0
    },
    "shadowRadius": 15,
    "width": 386.22,
    "height": 166.67,
    "left": 0,
    "top": 729.42
  },

  "loginpage_largetitledescription": {
    "opacity": 1,
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 24,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "marginTop": 14,
    "marginRight": 28,
    "marginLeft": 0,
    "width": "auto",
    "height": 32,
  },
  "loginpage_largetitle": {
    "opacity": 1,
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 61,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": "auto",
    "height": 85,
  },
  "loginpage_diplaynameinput": {
    "opacity": 1,
    "backgroundColor": "transparent",
    "marginTop": 14,
    paddingLeft : 20,
    "width": "auto",
    "height": 60,
    justifyContent:"center"
  },
  "loginpage_diplaynameinput_rectangle379271fc9": {
    "opacity": 1,
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 0
    },
    "shadowRadius": 15,
    "width": 'auto',
    "height": 60,
  },
  "loginpage_diplaynameinput_label": {
    "opacity": 1,
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 0.45098039215686275)",
    "fontSize": 20,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 'auto',
    "height": 26,
  },

  "loginpage_redbutton": {
    "opacity": 1,
    "backgroundColor": "transparent",
    "marginTop": 14,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": 60,
    justifyContent : 'center',
    alignItems:"center"
  },
  "loginpage_redbutton_rectangle3": {
    "opacity": 1,
    "backgroundColor": "rgba(230, 57, 80, 1)",
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 2
    },
    "shadowRadius": 6,
    "width": 'auto',
    "height": 60,
  },
  "loginpage_redbutton_enter": {
    "opacity": 1,
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 0.9019607843137255)",
    "fontSize": 20,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
  }
});