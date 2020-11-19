import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground, Dimensions, Image} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Splashscreen extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }

  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    console.log("splash render 1")
    return (
    <View data-layer="d2a6d626-76c0-4012-bcc1-62070210af15" style={styles.splashscreen}>
        <ImageBackground data-layer="9fb3c800-4453-4a6c-9ae6-3830a112e668" resizeMethod = 'scale' source={require('../assets/backgroundsplash.png')} style={styles.splashscreen_backgroundsplash} />
        <Image source = {require('../assets/wb_logo.png')} style = {styles.icon} />
    </View>
    );
  }
}

Splashscreen.propTypes = {

}

Splashscreen.defaultProps = {

}


const styles = StyleSheet.create({
  "splashscreen": {
    "opacity": 1,
    // "position": "relative",
    "backgroundColor": "rgba(248, 248, 248, 1)",
    "width": windowWidth,
    "height": windowHeight,
    justifyContent:"center",
    alignItems:"center"
  },
  "splashscreen_backgroundsplash": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": windowWidth,
    "height": windowHeight,
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "icon":{
    width:70,
    height:70
  }
});