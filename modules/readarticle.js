import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { Image as ReactImage } from 'react-native';
import SolidToolbar from '../components/solid_toolbar'
import UserLabel from '../components/user_date_label'

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
          <UserLabel/>
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