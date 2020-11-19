import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import TransparentToolbar from '../components/transparent_toolbar';
import BottomNavigator from '../components/bottom_nav';
import { ScreenContainer } from 'react-native-screens';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    console.log("render profile")
    return (
      <View data-layer="978a9676-a25a-4e0e-ba32-5ac238ce4a12" style={styles.profile}>
        <ImageBackground data-layer="863fee16-4d70-41f7-8021-e88c4a9bf788" source={require('../assets/appbackground.png')} style={styles.profile_appbackground} />
        <TransparentToolbar title='Profile' />
        <ScrollView style = {{height:windowHeight, width : windowWidth}}>
          <Image data-layer="0318260c-6fa1-435b-a538-2f528095f1a1" source={require('../assets/usericon.png')} style={styles.profile_usericon} />
          <Text data-layer="62878410-69d6-49e9-99ee-a62a819c7682" style={styles.profile_label}>Display Name</Text>
          <View style={styles.row}>
            <Text data-layer="84a982a0-fb99-4181-a7f6-82585b84eb81" style={styles.profile_data}>AnonymousA</Text>

          </View>
          <Text data-layer="96e17111-88c9-4dc6-8013-ff6dc76c44d6" style={styles.profile_label2}>Signature</Text>
          <View style={styles.row}>
            <Text data-layer="42c2f0e7-eb2e-40ef-801c-c8858cb14773" style={styles.profile_data}>***************</Text>
            <TouchableOpacity style={{ alignSelf: 'center' }}>
              <Svg data-layer="8f063c5b-69d0-406c-9b56-0a5a8d9592f0" style={styles.profile_eye} preserveAspectRatio="none" viewBox="0.000038430094718933105 4.5 24 16" fill="rgba(230, 57, 80, 1)"><SvgPath d="M 23.85502433776855 11.89167022705078 C 21.59543800354004 7.482917785644531 17.12210464477539 4.5 12.00001907348633 4.5 C 6.877933979034424 4.5 2.403349876403809 7.485001087188721 0.1450157016515732 11.89208602905273 C -0.04828732088208199 12.27445983886719 -0.04828732088208199 12.72595977783203 0.1450157463550568 13.10833549499512 C 2.404599905014038 17.51708793640137 6.877934455871582 20.50000381469727 12.00001907348633 20.50000381469727 C 17.12210464477539 20.50000381469727 21.59668731689453 17.5150032043457 23.85502052307129 13.10791969299316 C 24.04832649230957 12.72554397583008 24.04832649230957 12.27404403686523 23.85502433776855 11.89167022705078 Z M 12.00001907348633 18.50000381469727 C 8.686309814453125 18.5000057220459 6.000017642974854 15.81371307373047 6.000017642974854 12.50000381469727 C 6.000017642974854 9.186294555664063 8.686309814453125 6.500001907348633 12.00001907348633 6.500001907348633 C 15.31372833251953 6.500001907348633 18.00002098083496 9.186294555664063 18.00002098083496 12.50000381469727 C 18.00163269042969 15.81438064575195 15.31439590454102 18.50161552429199 12.00001907348633 18.50000381469727 Z M 12.00001907348633 8.500001907348633 C 11.64299011230469 8.504989624023438 11.28826522827148 8.558107376098633 10.94543552398682 8.657917022705078 C 11.52940368652344 9.451508522033691 11.44610214233398 10.55266571044922 10.74939346313477 11.24937629699707 C 10.05268383026123 11.94608497619629 8.951526641845703 12.02938652038574 8.15793514251709 11.44541931152344 C 7.709537029266357 13.09740257263184 8.364587783813477 14.85136032104492 9.786106109619141 15.80498695373535 C 11.20762157440186 16.75861167907715 13.07897663116455 16.69949531555176 14.43746757507324 15.65804862976074 C 15.79596138000488 14.61660194396973 16.33900260925293 12.82479667663574 15.78722763061523 11.20440673828125 C 15.23545360565186 9.584018707275391 13.71177005767822 8.4959716796875 12.0000171661377 8.500001907348633 Z" /></Svg>
            </TouchableOpacity>
          </View>
          <Text data-layer="528db94a-4ac5-4a91-937f-3c711d150c3c" style={styles.profile_label2}>Wallet Number</Text>
          <View style={styles.row}>
            <Text data-layer="f627ca9c-2879-4b55-80b2-dc895336dd09" style={styles.profile_data}>##############</Text>
            <TouchableOpacity style={{ alignSelf: 'center' }}>
              <Svg data-layer="d8fd7e6c-6227-4e08-8989-dcded40df307" style={styles.profile_eye} preserveAspectRatio="none" viewBox="0.000038430094718933105 4.5 24 16" fill="rgba(230, 57, 80, 1)"><SvgPath d="M 23.85502433776855 11.89167022705078 C 21.59543800354004 7.482917785644531 17.12210464477539 4.5 12.00001907348633 4.5 C 6.877933979034424 4.5 2.403349876403809 7.485001087188721 0.1450157016515732 11.89208602905273 C -0.04828732088208199 12.27445983886719 -0.04828732088208199 12.72595977783203 0.1450157463550568 13.10833549499512 C 2.404599905014038 17.51708793640137 6.877934455871582 20.50000381469727 12.00001907348633 20.50000381469727 C 17.12210464477539 20.50000381469727 21.59668731689453 17.5150032043457 23.85502052307129 13.10791969299316 C 24.04832649230957 12.72554397583008 24.04832649230957 12.27404403686523 23.85502433776855 11.89167022705078 Z M 12.00001907348633 18.50000381469727 C 8.686309814453125 18.5000057220459 6.000017642974854 15.81371307373047 6.000017642974854 12.50000381469727 C 6.000017642974854 9.186294555664063 8.686309814453125 6.500001907348633 12.00001907348633 6.500001907348633 C 15.31372833251953 6.500001907348633 18.00002098083496 9.186294555664063 18.00002098083496 12.50000381469727 C 18.00163269042969 15.81438064575195 15.31439590454102 18.50161552429199 12.00001907348633 18.50000381469727 Z M 12.00001907348633 8.500001907348633 C 11.64299011230469 8.504989624023438 11.28826522827148 8.558107376098633 10.94543552398682 8.657917022705078 C 11.52940368652344 9.451508522033691 11.44610214233398 10.55266571044922 10.74939346313477 11.24937629699707 C 10.05268383026123 11.94608497619629 8.951526641845703 12.02938652038574 8.15793514251709 11.44541931152344 C 7.709537029266357 13.09740257263184 8.364587783813477 14.85136032104492 9.786106109619141 15.80498695373535 C 11.20762157440186 16.75861167907715 13.07897663116455 16.69949531555176 14.43746757507324 15.65804862976074 C 15.79596138000488 14.61660194396973 16.33900260925293 12.82479667663574 15.78722763061523 11.20440673828125 C 15.23545360565186 9.584018707275391 13.71177005767822 8.4959716796875 12.0000171661377 8.500001907348633 Z" /></Svg>
            </TouchableOpacity>
          </View>
          <View data-layer="ba5bd716-24b8-44d3-8371-9f80c5bf2d9c" style={styles.profile_versiongroup}>
            <Text data-layer="08206920-7383-463f-9f60-88ddd836a7e9" style={styles.profile_versiongroup_versionlabel}>App Version 1.0</Text>
            <ReactImage data-layer="4681f649-545f-4fe6-8a5a-ce006c45e969" source={require('../assets/version_icon.png')} style={styles.profile_versiongroup_icon} />
          </View>
        </ScrollView>
        <BottomNavigator navigator={this.props.navigator} />
      </View>
    );
  }
}

Profile.propTypes = {

}

Profile.defaultProps = {

}


const styles = StyleSheet.create({
  "profile": {
    "opacity": 1,
    "backgroundColor": "rgba(248, 248, 248, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": windowWidth,
    "height": windowHeight,
  },
  "row": {
    flexDirection: 'row'
  },
  "profile_toolbartransparent_profilecb7ea924": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 28,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 85,
    "height": 39,
    "left": 52,
    "top": 0
  },
  "profile_toolbartransparent_arrowback": {
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
    "width": 22.65,
    "height": 22.07,
    "left": 0,
    "top": 8
  },
  "profile_usericon": {
    "opacity": 1,
    // "position": "absolute",
    "marginTop": 50,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 100,
    "height": 100,
    alignSelf: 'center'
    // "left": 131,
    // "top": 98,
    // "right": 130,
    // "bottom": 598
  },
  "profile_usericon_ellipse3": {
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
    "width": 151,
    "height": 151,
    "left": 0,
    "top": 0
  },
  "profile_usericon_hacker": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 97.51,
    "height": 91.41,
    "left": 26.43,
    "top": 31.33
  },
  "profile_usericon_hacker_path18ecda9f86": {
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
    "width": 97.51,
    "height": 17.15,
    "left": 0,
    "top": 35.92
  },
  "profile_usericon_hacker_path19d7993fdb": {
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
    "width": 97.51,
    "height": 34.63,
    "left": 0,
    "top": 56.78
  },
  "profile_usericon_hacker_path2009ac9975": {
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
    "width": 66.69,
    "height": 16.08,
    "left": 15.41,
    "top": 0
  },
  "profile_usericon_hacker_path214f1efb48": {
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
    "width": 74.95,
    "height": 8.41,
    "left": 11.28,
    "top": 21.79
  },
  "profile_label": {
    "opacity": 1,
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "marginTop": 70,
    "marginRight": 24,
    "marginLeft": 24,
    "width": 'auto',
  },
  "profile_label2": {
    "opacity": 1,
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "marginTop": 20,
    "marginRight": 24,
    "marginLeft": 24,
    "width": 'auto',
  },
  "profile_data": {
    "opacity": 1,
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 0.6705882352941176)",
    "fontSize": 40,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 24,
    "marginLeft": 24,
    flexGrow: 1,
    flexShrink: 1,
    alignItems: 'flex-start'
  },
  "profile_label9dae97eb": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 96,
    "height": 28,
    "left": 32,
    "top": 429
  },
  "profile_datadcbc74e6": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 0.6705882352941176)",
    "fontSize": 40,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 320,
    "height": 56,
    "left": 32,
    "top": 470
  },
  "profile_label9663c344": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 149,
    "height": 28,
    "left": 32,
    "top": 526
  },
  "profile_datadf2b7141": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 0.6705882352941176)",
    "fontSize": 40,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 325,
    "height": 116,
    "left": 31,
    "top": 567
  },
  "profile_versiongroup": {
    "opacity": 0.10999999940395355,
    "backgroundColor": "transparent",
    "width": "auto",
    "height": 'auto',
    alignSelf: 'center',
    flexDirection: 'row-reverse'
  },
  "profile_versiongroup_versionlabel": {
    "opacity": 1,
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "paddingLeft": 0,
    "width": 'auto',
    "height": 28,
  },
  "profile_versiongroup_icon": {
    "opacity": 1,
    "width": 30.8,
    "height": 28.32,
  },
  "profile_versiongroup_icon_path112c03dcc": {
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
    "width": 1.8,
    "height": 15.21,
    "left": 3.61,
    "top": 13.11
  },
  "profile_versiongroup_icon_path2e20026ee": {
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
    "width": 30.8,
    "height": 15.68,
    "left": 0,
    "top": 0
  },
  "profile_versiongroup_icon_path328469192": {
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
    "width": 15.4,
    "height": 15.68,
    "left": 15.4,
    "top": 0
  },
  "profile_eye": {
    "opacity": 1,
    // "position": "absolute",
    // "marginTop": 0,
    "marginRight": 14,
    // "marginBottom": 0,
    "marginLeft": 5,
    // "paddingTop": 0,
    // "paddingRight": 0,
    // "paddingBottom": 0,
    // "paddingLeft": 0,
    alignSelf: 'center',
    "width": 24,
    "height": 16,
    // "left": 349,
    // "top": 532
  },
  "profile_eyeee057312": {
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
    "width": 24,
    "height": 16,
    "left": 349,
    "top": 435
  },
  "profile_bottomnav": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": windowWidth,
    "left": 0,
    "right": 0,
    "bottom": 0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  "profile_bottomnav_toolbarbackground": {
    "opacity": 1,
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.3,
    "shadowOffset": {
      "width": 0,
      "height": 0
    },
    "shadowRadius": 10,
    "width": windowWidth,
  },
  "profile_bottomnav_home": {
    "opacity": 1,
    "margin": 20,
    "width": 35.84,
    "height": 32.95,
  },
  "profile_bottomnav_home_path1": {
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
    "width": 2.1,
    "height": 17.7,
    "left": 4.2,
    "top": 15.25
  },
  "profile_bottomnav_home_path2": {
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
    "width": 35.84,
    "height": 18.25,
    "left": 0,
    "top": 0
  },
  "profile_bottomnav_home_path3": {
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
    "width": 17.92,
    "height": 18.25,
    "left": 17.92,
    "top": 0
  },
  "profile_bottomnav_edit": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 35.38,
    "height": 35.38,
    "left": 188.78,
    "top": 19.78
  },
  "profile_bottomnav_edit_path22": {
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
    "width": 9.58,
    "height": 9.58,
    "left": 25.8,
    "top": 25.8
  },
  "profile_bottomnav_edit_path23": {
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
    "width": 35.38,
    "height": 28.01,
    "left": 0,
    "top": 7.37
  },
  "profile_bottomnav_edit_path24": {
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
    "width": 2.21,
    "height": 7.74,
    "left": 16.58,
    "top": 4.05
  },
  "profile_bottomnav_edit_path25": {
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
    "width": 5.9,
    "height": 5.9,
    "left": 14.74,
    "top": 0
  },
  "profile_bottomnav_profile01f8da29": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 35.35,
    "height": 33.14,
    "left": 316,
    "top": 22
  },
  "profile_bottomnav_profile01f8da29_path18": {
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
    "width": 35.35,
    "height": 6.22,
    "left": 0,
    "top": 13.02
  },
  "profile_bottomnav_profile01f8da29_path19": {
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
    "width": 35.35,
    "height": 12.56,
    "left": 0,
    "top": 20.58
  },
  "profile_bottomnav_profile01f8da29_path20": {
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
    "width": 24.18,
    "height": 5.83,
    "left": 5.59,
    "top": 0
  },
  "profile_bottomnav_profile01f8da29_path21": {
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
    "width": 27.17,
    "height": 3.05,
    "left": 4.09,
    "top": 7.9
  },
  "profile_appbackground": {
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
  "profile_appbackground_path4": {
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
    "width": 510.59,
    "height": 220.34,
    "left": 47,
    "top": -12.19
  },
  "profile_appbackground_rectangle18": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": "auto",
    "height": "auto",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  }
});