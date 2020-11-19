import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class UserLabel extends Component {

    constructor(props) {
        super(props);
        this.state = {
         
        };
    }


    render() {
      console.log(this.props.data)
        return (
            <View data-layer="9f99b535-71e2-4976-af5e-3b1a19e3041c" style={styles.readarticle_userobject}>
                <Image data-layer="7cd6d44e-3a7b-476f-8ec2-6b865beea251" source={require('../assets/usericon.png')} style={styles.readarticle_userobject_usericon} />
                <Text data-layer="f515399d-e10b-48c7-a845-80e11e4a2987" style={styles.readarticle_userobject_username}>{this.props.data}</Text>
                <Text data-layer="ec51e341-3219-4d55-ac26-f9d83a0e9d8f" style={styles.readarticle_userobject_x1200am}>12:00am</Text>
                <Text data-layer="c22bdecb-67f1-48c4-b250-5527ed2d37c5" style={styles.readarticle_userobject_x1stJune2020}>1st June 2020</Text>
            </View>

        );
    }

}


UserLabel.propTypes = {

}

UserLabel.defaultProps = {

}

const styles = StyleSheet.create({
    "readarticle_userobject": {
        "opacity": 1,
        // "position": "absolute",
        "backgroundColor": "transparent",
        "marginTop": 0,
        "marginRight": 20,
        "marginBottom": 0,
        "marginLeft": 20,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 195,
        "height": 40,
        // "left": 21,
        // "top": 248
      },
      "readarticle_userobject_usericon": {
        "opacity": 1,
        "position": "absolute",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": 40,
        "height": 40,
        "left": 0,
        "top": 0
      },
      "readarticle_userobject_username": {
        "opacity": 1,
        "position": "absolute",
        "backgroundColor": "rgba(255, 255, 255, 0)",
        "color": "rgba(80, 80, 80, 1)",
        "fontSize": 16,
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
        "height": 'auto',
        "left": 48,
        "top": 0
      },
      "readarticle_userobject_x1200am": {
        "opacity": 1,
        "position": "absolute",
        "backgroundColor": "rgba(255, 255, 255, 0)",
        "color": "rgba(100, 100, 100, 1)",
        "fontSize": 12,
        "fontWeight": "300",
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
        "height": 'auto',
        "left": 48,
        "top": 23
      },
      "readarticle_userobject_x1stJune2020": {
        "opacity": 1,
        "position": "absolute",
        "backgroundColor": "rgba(255, 255, 255, 0)",
        "color": "rgba(100, 100, 100, 1)",
        "fontSize": 12,
        "fontWeight": "300",
        "fontStyle": "normal",
        "fontFamily": "Roboto",
        "textAlign": "left",
        "width": 'auto',
        "height": 'auto',
        "left": 107,
        "top": 23
      },
});