import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, Dimensions, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';
import UserLabel from '../components/user_date_label';
import TransparentToolbar from '../components/transparent_toolbar'
import Background from '../components/background_alternate'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default class Transfer extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    console.log("render transfer")
    return (
      <View data-layer="cfefbdd0-dab9-4381-a77a-6440e134cdd1" style={styles.transfer}>
        <Background />
        <TransparentToolbar title='Sponsor' />

        <ScrollView flexDirection='column'>

          <View data-layer="a13df700-321b-4ee0-a528-b86ef8d32702" style={[styles.transfer_walletcard, styles.transfer_walletcard_cardbackground]}>
            <ReactImage data-layer="474a0b84-9abb-4a53-9791-c84975c0d45b" source={require('../assets/transfericons.png')} style={styles.transfer_walletcard_transfericons} />
            <Text data-layer="abe0ebbd-c24a-45c9-a272-6589a56d9251" style={styles.transfer_walletcard_balancelabel}>My Balance</Text>
            <Text data-layer="8eaaa6b9-e43c-4a40-bbde-81f089a21289" style={styles.transfer_walletcard_balance}>3,000</Text>
          </View>

          <Text data-layer="8dcb2581-dfc6-43c5-9e35-b80c0326ae99" style={styles.transfer_title}>Transfer</Text>

          <UserLabel />

          <View data-layer="67d3cbc3-940b-4d3a-ac91-d99f16001b87" style={[styles.transfer_amountinput,]}>
            <TextInput data-layer="647296ed-f0f0-437a-aeed-91513dfcf215" style={styles.transfer_amountinput_enterAmount} placeholder='Enter Amount' />
            <View data-layer="cfb06a65-bcb7-4bdb-9c72-b2a9091f1584" style={styles.transfer_amountinput_rectangle12}></View>
          </View>

          <TouchableOpacity style={[styles.transfer_transferbutton]}>
            <View data-layer="eaab051d-fd15-4dda-b8e8-306f0a2befe0" style={[styles.transfer_transferbutton, styles.transfer_transferbutton_rectangle13]}>
              <Text data-layer="51a79d1c-3e04-49c1-aa0f-e1be09b1d126" style={styles.transfer_transferbutton_continue}>Continue</Text>
              <Svg rotation={180} data-layer="aa98bc0f-8d67-4ac5-a8cb-b48b10251fc5" style={styles.transfer_transferbutton_iconAwesomeArrowLeft} preserveAspectRatio="none" viewBox="-0.00351560115814209 2.6472654342651367 18.245361328125 17.7830810546875" fill="rgba(248, 248, 248, 1)"><SvgPath d="M 10.4843111038208 19.2392463684082 L 9.580293655395508 20.14326477050781 C 9.197510719299316 20.52604675292969 8.578543663024902 20.52604675292969 8.199833869934082 20.14326477050781 L 0.2835710644721985 12.23107433319092 C -0.09921117126941681 11.84829139709473 -0.09921117126941681 11.22932529449463 0.2835710644721985 10.85061454772949 L 8.199833869934082 2.934351921081543 C 8.582615852355957 2.551569938659668 9.201582908630371 2.551569938659668 9.580293655395508 2.934351921081543 L 10.4843111038208 3.838369846343994 C 10.87116527557373 4.225224018096924 10.86302089691162 4.856407642364502 10.46802234649658 5.23511791229248 L 5.561079502105713 9.909948348999023 L 17.26444435119629 9.909948348999023 C 17.80603981018066 9.909948348999023 18.24176025390625 10.34566879272461 18.24176025390625 10.88726425170898 L 18.24176025390625 12.19035243988037 C 18.24176025390625 12.73194789886475 17.80603981018066 13.16766929626465 17.26444435119629 13.16766929626465 L 5.561079502105713 13.16766929626465 L 10.46802234649658 17.84249877929688 C 10.86709308624268 18.2212085723877 10.87523746490479 18.85239219665527 10.4843111038208 19.2392463684082 Z" /></Svg>
            </View>

          </TouchableOpacity>


        </ScrollView>

      </View>
    );
  }
}

Transfer.propTypes = {

}

Transfer.defaultProps = {

}


const styles = StyleSheet.create({
  "transfer": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(248, 248, 248, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": "auto",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0,
    flex: 1,
  },
  "transfer_title": {
    "opacity": 1,
    // "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(80, 80, 80, 1)",
    "fontSize": 27,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    margin: 30,
    // "width": 110,
    // "height": 37,
    // "left": 30,
    // "top": 335
  },
  "transfer_amountinput": {
    "opacity": 1,
    // "position": "absolute",
    "backgroundColor": "transparent",
    "margin": 30,
    // "width": 368,
    // "height": 58,
    // "left": 24,
    // "top": 500
  },
  "transfer_amountinput_rectangle12": {
    "opacity": 1,
    // "position": "absolute",
    "backgroundColor": "rgba(112, 112, 112, 1)",
    "marginTop": 5,
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
    "width": "auto",
    "height": 2,
    // "left": 0,
    // "top": 56
  },
  "transfer_amountinput_enterAmount": {
    "opacity": 1,
    // "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 0.45098039215686275)",
    "fontSize": 28,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    // "marginTop": 0,
    // "marginRight": 0,
    // "marginBottom": 0,
    // "marginLeft": 0,
    // "paddingTop": 0,
    // "paddingRight": 0,
    // "paddingBottom": 0,
    // "paddingLeft": 0,
    // "width": 189,
    // "height": 39,
    // "left": 10,
    // "top": 0
  },
  "transfer_transferbutton": {
    "opacity": 1,
    // "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 30,
    "marginRight": 20,
    "marginBottom": 30,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 187,
    "height": 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end'
    // "left": 205,
    // "top": 588
  },
  "transfer_transferbutton_rectangle13": {
    "opacity": 1,
    // "position": "absolute",
    "backgroundColor": "rgba(230, 57, 80, 1)",

    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    // "width": 187,
    // "height": 60,

  },
  "transfer_transferbutton_continue": {
    "opacity": 1,
    // "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(248, 248, 248, 1)",
    "fontSize": 20,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    margin: 20,
    // "width": 80,
    // "height": 26,
    // "left": 42,
    // "top": 14
  },
  "transfer_transferbutton_iconAwesomeArrowLeft": {
    "opacity": 1,
    // "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 18.25,
    "height": 17.78,
    // "left": 145.08,
    // "top": 17.92,
  },
  "transfer_walletcard": {
    "opacity": 1,
    // "position": "absolute",
    "backgroundColor": "transparent",
    padding: 20,
    "width": 'auto',
    "height": 'auto',
    // "left": 20,
    // "top": 94
    "elevation": 5
  },
  "transfer_walletcard_cardbackground": {
    "opacity": 1,
    // "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "margin": 20,
    "borderTopLeftRadius": 15,
    "borderTopRightRadius": 15,
    "borderBottomLeftRadius": 15,
    "borderBottomRightRadius": 15,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.03137254901960784,
    "shadowOffset": {
      "width": 0,
      "height": 0
    },
    "shadowRadius": 15,
    "width": "auto",
    "height": "auto",
    // "left": 0,
    // "top": "50%",
    // "right": 0,
    // "bottom": 0
  },
  "transfer_walletcard_transfericons": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 106.84,
    "height": 35,
    "right": 15,
    "top": 15
  },
  "transfer_walletcard_balancelabel": {
    "opacity": 1,
    // "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 0.6705882352941176)",
    "fontSize": 18,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    marginTop: 40,
    // "width": 125,
    // "height": 29,
  },
  "transfer_walletcard_balance": {
    "opacity": 1,
    // "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(241, 124, 140, 1)",
    "fontSize": 50,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": "auto",
    // "height": 79,
    // "left": 26,
    // "top": 97,
    // "right": 177
  }
});