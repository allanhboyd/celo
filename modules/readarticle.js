import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { Image as ReactImage } from 'react-native';
import SolidToolbar from '../components/solid_toolbar'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Readarticle extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    console.log("render read article")

    return (
      <View data-layer="e380a9c2-82cf-40b6-86af-3fe7e6f895a3" style={styles.readarticle}>
        <SolidToolbar title='Posts' />
        <ScrollView>

        <Text data-layer="36ce04ac-c550-40ff-9fa8-ed3cdc160c82" style={styles.readarticle_articletitle}>This is a whistle
blower's Test</Text>
          <View data-layer="9f99b535-71e2-4976-af5e-3b1a19e3041c" style={styles.readarticle_userobject}>
            <ReactImage data-layer="7cd6d44e-3a7b-476f-8ec2-6b865beea251" source={require('../assets/usericon.png')} style={styles.readarticle_userobject_usericon} />
            <Text data-layer="f515399d-e10b-48c7-a845-80e11e4a2987" style={styles.readarticle_userobject_username}>AnonymousB</Text>
            <Text data-layer="ec51e341-3219-4d55-ac26-f9d83a0e9d8f" style={styles.readarticle_userobject_x1200am}>12:00am</Text>
            
            <Text data-layer="c22bdecb-67f1-48c4-b250-5527ed2d37c5" style={styles.readarticle_userobject_x1stJune2020}>1st June 2020</Text>
          </View>
        
          <Text data-layer="e2b66f8f-ad6d-4f77-81de-5fe2be4e400c" style={styles.readarticle_articletext}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est</Text>
        </ScrollView>
        

      </View>
    );
  }
}

Readarticle.propTypes = {

}

Readarticle.defaultProps = {

}


const styles = StyleSheet.create({
  "readarticle": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(248, 248, 248, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    // "paddingBottom": 200,
    "paddingLeft": 0,
    "width": windowWidth,
    // "height": 'auto',
    flex : 1,
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
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
  "readarticle_articletitle": {
    "opacity": 1,
    // "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(80, 80, 80, 1)",
    "fontSize": 39,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "marginTop": 90,
    "marginRight": 20,
    "marginBottom": 0,
    "marginLeft": 20,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": 114,
    // "left": 21,
    // "top": 89,
    // "right": 93
  },
  "readarticle_articletext": {
    "opacity": 1,
    // "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(136, 136, 136, 1)",
    "fontSize": 16,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
   "margin":20,
    "width": "auto",
    "height": "auto",
    // "left": 28,
    // "top": 333,
    // "right": 37
  },
});