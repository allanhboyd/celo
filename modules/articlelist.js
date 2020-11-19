import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, StatusBar, FlatList, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ArticleListItem from '../components/artlicle_list_item'
import BottomNavigator from '../components/bottom_nav';
import { Icon } from 'react-native-elements'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Articlelist extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    console.log("render articles")
    return (
      <View data-layer="c8b81245-3906-4187-abb0-1621eff4c360" style={styles.articlelist}>
        <ImageBackground data-layer="e71fa9e2-5bb1-4161-8b7e-85a365aa0607" source={require('../assets/maskGroup3.png')} style={styles.articlelist_maskGroup3} />
        <Image data-layer="f8b8d495-3749-44fb-a45f-1fd7c6a46afe" source={require('../assets/menu.png')} style={styles.articlelist_menu} />

    
        <Icon data-layer="598fcfda-0feb-4ed1-bb13-4ed9c387729f" source={require('../assets/wallet.png')} style={styles.articlelist_wallet} />
        

        <Text data-layer="758b1726-8ad4-4b0c-aab7-a4d10cbb7a33" style={styles.articlelist_username}>AnonymousA</Text>
        <Text data-layer="a2d36fd9-cc22-4e23-8208-a96aa493d301" style={styles.articlelist_hometip}>See what other whistle blowers
have written</Text>
        <Text data-layer="0fbaf31b-9ae5-4545-b714-709233d2e0e9" style={styles.articlelist_filter}>RECENTS</Text>

        <FlatList
          data={[
            { name: "AnonymousA" },
            { name: "AnonymousB" },
            { name: "AnonymousC" },
            { name: "AnonymousD" },
            { name: "AnonymousE" },
            { name: "AnonymousF" },
            { name: "AnonymousG" },
            { name: "AnonymousH" },
            { name: "AnonymousI" },
            { name: "AnonymousJ" },
            { name: "AnonymousK" },
            { name: "AnonymousL" },
            { name: "AnonymousM" },
            { name: "AnonymousN" },
            { name: "AnonymousO" },
            { name: "AnonymousP" },
            { name: "AnonymousQ" },
            { name: "AnonymousR" },
            { name: "AnonymousS" },
            { name: "AnonymousT" },
            { name: "AnonymousU" },
            { name: "AnonymousV" },
            { name: "AnonymousW" },
            { name: "AnonymousY" },
            { name: "AnonymousZ" }
          ]}

          renderItem={(item) => <ArticleListItem data={item} navigator={this.props.navigator} />}
          keyExtractor={item => item.name}
          contentContainerStyle={{
            flexGrow: 1,
          }}

          style={{ flex: 1, paddingBottom: 300 }}
          nestedScrollEnabled={false}

        />

        <BottomNavigator home={true} navigator={this.props.navigator} />

      </View>
    );
  }
}

Articlelist.propTypes = {

}

Articlelist.defaultProps = {

}


const styles = StyleSheet.create({
  "articlelist": {
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
    "width": windowWidth,
    "height": windowHeight,
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0,
    flex: 1
  },

  "articlelist_maskGroup3": {
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

  "articlelist_username": {
    "opacity": 1,
    "position": 'relative',
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 28,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 187,
    "height": 39,
    marginTop: 100,
    marginStart: 20
    // "left": 22,
    // "top": 63
  },
  "articlelist_menu": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 10,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 24,
    "height": 17,
    "left": 22,
    "top": StatusBar.currentHeight
  },
  "articlelist_hometip": {
    "opacity": 1,
    // "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 0.7294117647058823)",
    "fontSize": 16,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "marginTop": 10,
    "marginRight": 20,
    "marginBottom": 0,
    "marginLeft": 20,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 248,
    "height": 48,
    // "left": 22,
    // "top": 106
  },
  "articlelist_filter": {
    "opacity": 1,
    // "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 16,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "marginTop": 10,
    "marginRight": 0,
    "marginBottom": 10,
    "marginLeft": 20,
    // "width": 69,
    // "height": 23,
    // "left": 22,
    // "top": 185
  },
  "articlelist_wallet": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 10,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 29.25,
    "height": 27,
    "right": 20.74,
    "top": StatusBar.currentHeight
  }
});