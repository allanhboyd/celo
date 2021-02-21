import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, StatusBar } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Svg, { } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import UserLabel from '../components/user_date_label'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class TransferListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        console.log(this.props.data.item)
        return (
            <View>
                <View data-layer="f39f1b8e-115a-4ed0-b396-1478255fcf01" style={styles.transferhistory_transaction}>
                    <UserLabel data = {this.props.data.item.name} />
                    <View data-layer="f0274dd7-d01e-492e-b3fc-d29414152bb8" style={styles.transferhistory_transaction_amountgroup}>
                        <Svg data-layer="838ab188-79d1-4bf3-872f-217296139e23" style={styles.transferhistory_transaction_amountgroup_iconAwesomeLevelUpAlt} preserveAspectRatio="none" viewBox="-0.000004328787326812744 -0.000008851289749145508 8.98388671875 14.374267578125" fill="rgba(254, 72, 72, 1)"><SvgPath d="M 8.802890777587891 3.359661340713501 L 5.884081363677979 0.2152150124311447 C 5.617793083190918 -0.07153956592082977 5.163236618041992 -0.07196066528558731 4.896583080291748 0.2152150124311447 L 1.977520346641541 3.359661340713501 C 1.578691720962524 3.789203643798828 1.882740259170532 4.491940498352051 2.471269369125366 4.491940498352051 L 4.267346382141113 4.491940498352051 L 4.267346382141113 12.12824726104736 L 1.909748077392578 12.12824726104736 C 1.820366144180298 12.12824630737305 1.734677076339722 12.16375350952148 1.671512961387634 12.22695159912109 L 0.09935367852449417 13.79911041259766 C -0.1128907948732376 14.01132774353027 0.03742093592882156 14.3742208480835 0.3375671207904816 14.3742208480835 L 5.839527130126953 14.3742208480835 C 6.21165657043457 14.3742208480835 6.51331901550293 14.07255840301514 6.51331901550293 13.7004280090332 L 6.51331901550293 4.491940498352051 L 8.309142112731934 4.491940498352051 C 8.895284652709961 4.491940498352051 9.203347206115723 3.790944576263428 8.802889823913574 3.359661340713501 Z" /></Svg>
        <Text data-layer="d428fbd4-15a3-457f-84c9-0ac674ffd9ea" style={styles.transferhistory_transaction_amountgroup_amount}>{ this.props.data.item.amount }</Text>
                        <ReactImage data-layer="d7c5a735-b789-4a4b-b6e7-1b69d44a6242" source={require('../assets/money.png')} style={styles.transferhistory_transaction_amountgroup_group23} />
                    </View>
                </View>
                <Svg data-layer="3249dd03-8823-4a17-9775-bdf53d932a29" style={styles.transferhistory_transaction_divider} preserveAspectRatio="none" viewBox="0 -0.5 349 1" fill="transparent"><SvgPath d="M 0 0 L 349 0" /></Svg>
            </View>
        );
    }

}

TransferListItem.propTypes = {

}

TransferListItem.defaultProps = {

}

const styles = StyleSheet.create({
    "transferhistory_transaction": {
        flexDirection: 'row',
        justifyContent : 'space-around',
        alignContent : 'center',
        alignItems : 'center',
        marginEnd : 20,
    },
    "transferhistory_transaction_amountgroup": {
        // backgroundColor: "rgba(0, 0, 0, 0.5)",
        flexDirection: 'row-reverse',
        // alignContent: 'flex-end',
        
    },
    "transferhistory_transaction_amountgroup_iconAwesomeLevelUpAlt": {
        "opacity": 1,
        "width": 8.98,
        "height": 14.37,
        alignSelf : 'center'
    },
    "transferhistory_transaction_amountgroup_amount": {
        "opacity": 1,
        // "position": "absolute",
        // "backgroundColor": "rgba(255, 255, 255, 0)",
        "color": "rgba(241, 124, 140, 1)",
        "fontSize": 20,
        "fontWeight": "700",
        "fontStyle": "normal",
        "fontFamily": "Roboto",
        "textAlign": "left",
        "width": 'auto',
        "height": 'auto',
        margin : 10
        // flex : 5,
        // "right": 20.98,
        // "bottom": 0
    },
    "transferhistory_transaction_amountgroup_group23": {
        "opacity": 1,
        // "position": "absolute",
        "width": 17,
        "height": 17,
        alignSelf : 'center'
    },
    "transferhistory_transaction_divider": {
        // position : 'absolute',
        backgroundColor : '#DEDEDE',
        "opacity": 1,
        "height": 1,
        marginTop : 10,
        marginBottom : 10
    
    }
});