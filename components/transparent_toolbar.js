import React, { Component } from 'react';
import { StyleSheet, Text, View ,StatusBar} from 'react-native';
import Svg, { } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';


export default class TransparentToolbar extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        console.log("prop this ",this.props.navigator_tb)
        return (
                <View data-layer="4fbdb403-adb0-419b-a8f3-64d34f51e79d" style={styles.profile_toolbartransparent}>
                    <Text data-layer="cd3c5896-9897-4fb0-875c-4daacf08afd1" style={styles.profile_toolbartransparent_profilecb7ea924}> {this.props.title} </Text>
                    <Svg data-layer="40cac4c8-3c5c-4844-aad5-e67359327296" 
                    onPress={()=>this.props.navigator_tb.goBack(null)}
                     style={styles.profile_toolbartransparent_arrowback} preserveAspectRatio="none" viewBox="-0.00351560115814209 2.6472654342651367 22.647216796875 22.07349395751953" fill="rgba(112, 112, 112, 1)"><SvgPath d="M 13.01463985443115 23.24228477478027 L 11.89251613616943 24.36440849304199 C 11.41738224029541 24.83954238891602 10.64908123016357 24.83954238891602 10.1790018081665 24.36440849304199 L 0.3528345823287964 14.54329681396484 C -0.1222990080714226 14.0681619644165 -0.1222990080714226 13.2998628616333 0.3528345823287964 12.82978248596191 L 10.1790018081665 3.003615617752075 C 10.65413570404053 2.52848219871521 11.42243671417236 2.52848219871521 11.89251613616943 3.003615617752075 L 13.01463985443115 4.125739574432373 C 13.49482822418213 4.60592794418335 13.48471832275391 5.389393329620361 12.99442100524902 5.859472274780273 L 6.903612613677979 11.6621675491333 L 21.43057060241699 11.6621675491333 C 22.10283279418945 11.6621675491333 22.6436767578125 12.20301151275635 22.6436767578125 12.87527465820313 L 22.6436767578125 14.49275016784668 C 22.6436767578125 15.16501331329346 22.10283279418945 15.7058572769165 21.43057060241699 15.7058572769165 L 6.903612613677979 15.7058572769165 L 12.99442100524902 21.50855255126953 C 13.48977279663086 21.9786319732666 13.49988269805908 22.7620964050293 13.01463985443115 23.24228477478027 Z" /></Svg>
                </View>

        );
    }

}


TransparentToolbar.propTypes = {

}

TransparentToolbar.defaultProps = {

}

const styles = StyleSheet.create({
    "profile_toolbartransparent": {
        "opacity": 1,
        "backgroundColor": "transparent",
        "marginTop": StatusBar.currentHeight,
        "marginLeft": 20,
        "width": 'auto',
        "height": 39,
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
        "width": 'auto',
        "height": 39,
        "left": 30,
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
});