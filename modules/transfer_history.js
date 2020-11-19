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
import WalletCard from '../components/wallet_card'

import TransferListItem from '../components/tranfer_history_list_item'
import BottomNavigator from '../components/bottom_nav'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default class TransferHistory extends Component {

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
        <TransparentToolbar title='Wallet' navigator_tb = {this.props.navigator} />

        <WalletCard amount={3000} />

        <Text data-layer="8dcb2581-dfc6-43c5-9e35-b80c0326ae99" style={styles.transfer_title}>Recent Transactions</Text>

        <FlatList
        
        data = {[
         { name : "AnonymousA",
          amount : 1000},
          { name : "AnonymousB",
          amount : 2000},
          { name : "AnonymousC",
          amount : 3000},
          { name : "AnonymousD",
          amount : 4000},
          { name : "AnonymousE",
          amount : 5000},
          { name : "AnonymousF",
          amount : 6000},
          { name : "AnonymousG",
          amount : 7000},
          { name : "AnonymousH",
          amount : 8000},
          { name : "AnonymousI",
          amount : 9000},
          { name : "AnonymousJ",
          amount : 10000},
          { name : "AnonymousK",
          amount : 11000},
          { name : "AnonymousL",
          amount : 12000},
          { name : "AnonymousM",
          amount : 13000},

        ]}
        
        renderItem = {(item)=><TransferListItem data = {item} />}
        
        keyExtractor={item => item.name}
        contentContainerStyle={{
          flexGrow: 1,
        }}

        />

        <BottomNavigator profile = {true} navigator={this.props.navigator} />

      </View>
    );
  }
}

TransferHistory.propTypes = {

}

TransferHistory.defaultProps = {

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
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    marginTop: 10,
    marginStart: 30,
    marginBottom: 10,
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