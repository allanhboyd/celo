import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';
import UserLabel from '../components/user_date_label';
import TransparentToolbar from '../components/transparent_toolbar'
import Background from '../components/background_alternate'
import WalletCard from '../components/wallet_card'
import SolidToolbar from '../components/solid_toolbar';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class NewPost extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        return (
            <View style={styles.container}>

                <Background />

                <SolidToolbar title='Create Post' />

                <View style={{ padding: 35, justifyContent:'center' }}>
                    <Image source={require('../assets/wb_logo.png')} style={styles.icon} />
                    <Text data-layer="8dcb2581-dfc6-43c5-9e35-b80c0326ae99" style={styles.transfer_title}>Transfer</Text>
                </View>

            </View>
        );
    }

}

NewPost.propTypes = {

}

NewPost.defaultProps = {

}


const styles = StyleSheet.create({
    "container": {
        "opacity": 1,
        "backgroundColor": "rgba(248, 248, 248, 1)",
        "width": windowWidth,
        "height": windowHeight,
        "left": 0,
        "top": 0,
        "right": 0,
        "bottom": 0
    },
    "icon": {
        width: 50,
        height: 50,

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
        marginTop : 20,
        // "width": 110,
        // "height": 37,
        // "left": 30,
        // "top": 335
      },
});