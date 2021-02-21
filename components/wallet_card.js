import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class WalletCard extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (

            <View data-layer="a13df700-321b-4ee0-a528-b86ef8d32702" style={[styles.transfer_walletcard, styles.transfer_walletcard_cardbackground]}>
                <Image data-layer="474a0b84-9abb-4a53-9791-c84975c0d45b" source={require('../assets/transfericons.png')} style={styles.transfer_walletcard_transfericons} />
                <Text data-layer="abe0ebbd-c24a-45c9-a272-6589a56d9251" style={styles.transfer_walletcard_balancelabel}>My Balance</Text>
                <Text data-layer="8eaaa6b9-e43c-4a40-bbde-81f089a21289" style={styles.transfer_walletcard_balance}>{this.props.amount}</Text>
            </View>
        );
    }

}


WalletCard.propTypes = {

}

WalletCard.defaultProps = {

}

const styles = StyleSheet.create({
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
})