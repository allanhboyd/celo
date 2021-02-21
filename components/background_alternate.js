import React, {Component} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

export default class Background extends Component{


    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render(){
        return(
            <ImageBackground data-layer="f7099a0d-164e-4241-a9b5-2f0b55f6ccfa" source={require('../assets/appbackground.png')} style={styles.loginpage_backgroundsplash} />
        );
    }

}

Background.propTypes = {

}

Background.defaultProps = {

}
const styles = StyleSheet.create({

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
});