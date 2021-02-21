import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, StatusBar } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Svg, { } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class ArticleListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        console.log(this.props.data)
        return (
            <View data-layer="3df68c1b-5f5e-480b-9640-bc1342f45d9c" style={[styles.articlelist_repeatGrid1_post959e7595, styles.articlelist_repeatGrid1_post959e7595_postbackground7f4d02e0]}>

                <View style={styles.row} >

                    <ReactImage data-layer="aff2d118-e243-43f4-ab99-41c538aa591b" source={require('../assets/postusericon.png')} style={styles.articlelist_repeatGrid1_post959e7595_postusericon7653ed73} />

                    <View style={styles.column} >

                        <View style={styles.row}>
                            <TouchableOpacity>
                                <Text data-layer="18bcc8a6-b4fe-4ebc-bf48-67960d6ee29b" style={styles.articlelist_repeatGrid1_post959e7595_postusernamec0ba6d22}>{this.props.data.item.name}</Text>
                            </TouchableOpacity>

                            <Svg data-layer="7b1a9233-ca01-4a23-8df0-c771afb696d5" style={styles.articlelist_repeatGrid1_post959e7595_dividerdb0681eb} preserveAspectRatio="none" viewBox="-0.75 -0.75 4.5 4.5" fill="rgba(112, 112, 112, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
                            <Text data-layer="38e9e563-55b0-48b3-b114-7ce77731ef47" style={styles.articlelist_repeatGrid1_post959e7595_posttime0ad57fbf}>12:00am</Text>

                        </View>
                        <Text data-layer="ffd15407-b58b-4a25-87e0-4e022db001a7" style={styles.articlelist_repeatGrid1_post959e7595_postdate9f991d34}>1st June 2020</Text>
                        <Text data-layer="e0655111-988e-43a0-bca9-03ec3abe0d78" style={styles.articlelist_repeatGrid1_post959e7595_postshort2bafe453}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</Text>
                        <TouchableOpacity onPress={() => this.props.navigator.push("Read")}>
                            <Text data-layer="c26e4508-0966-467e-a4bf-2ca0bc44cc19" style={styles.articlelist_repeatGrid1_post959e7595_viewmoref7978898}>View More</Text>
                        </TouchableOpacity>


                    </View>

                    <ReactImage data-layer="ae6505b3-9a5f-4276-9712-fb7ed97b327c" source={require('../assets/postmoney.png')} style={styles.articlelist_repeatGrid1_post959e7595_postmoney58bf9a29} />
                </View>
            </View>

        );
    }

}

ArticleListItem.propTypes = {

}

ArticleListItem.defaultProps = {

}

const styles = StyleSheet.create({
    "column": {
        flexDirection: 'column',
        marginTop: 20,
        marginBottom: 20
    },
    "row": {
        flexDirection: 'row',
        alignItems: 'center',
        height: 'auto'
    },
    "articlelist_repeatGrid1_post959e7595": {
        "opacity": 1,
        // "position": "absolute",
        "backgroundColor": "transparent",
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": windowWidth,
        "height": 'auto',
        // "left": 9,
        // "top": 6
    },
    "articlelist_repeatGrid1_post959e7595_postbackground7f4d02e0": {
        "opacity": 1,
        // "position": "absolute",
        "backgroundColor": "rgba(255, 255, 255, 1)",
        "borderTopLeftRadius": 0,
        "borderTopRightRadius": 0,
        "borderBottomLeftRadius": 0,
        "borderBottomRightRadius": 0,
        "shadowColor": "rgb(0,  0,  0)",
        "shadowOpacity": 0.1607843137254902,
        "shadowOffset": {
            "width": 0,
            "height": 3
        },
        "shadowRadius": 6,
        // "width": 'auto',
        // "height": 'auto',
        // "left": 0,
        // "top": 0
    },
    "articlelist_repeatGrid1_post959e7595_postusericon7653ed73": {
        "opacity": 1,
        // "position": "absolute",
        margin: 20,
        "width": 42,
        "height": 42,
        alignSelf: 'flex-start'
        // "left": 22,
        // "top": 27

    },
    "articlelist_repeatGrid1_post959e7595_postusernamec0ba6d22": {
        "opacity": 1,
        // "position": "absolute",
        "backgroundColor": "rgba(255, 255, 255, 0)",
        "color": "rgba(100, 100, 100, 1)",
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
        // "width": 106,
        // "height": 23,
        // "left": 74,
        // "top": 24
    },
    "articlelist_repeatGrid1_post959e7595_posttime0ad57fbf": {
        "opacity": 1,
        // "position": "absolute",
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
        "width": 48,
        "height": 17,
        // "left": 198,
        // "top": 28
    },
    "articlelist_repeatGrid1_post959e7595_dividerdb0681eb": {
        "opacity": 1,
        // "position": "absolute",
        margin: 10,
        "width": 3,
        "height": 3,
        // "left": 187,
        // "top": 35
    },
    "articlelist_repeatGrid1_post959e7595_postdate9f991d34": {
        "opacity": 1,
        // "position": "absolute",
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
        "width": 78,
        "height": 17,
        // "left": 74,
        // "top": 56
    },
    "articlelist_repeatGrid1_post959e7595_postmoney58bf9a29": {
        "opacity": 1,
        "position": "absolute",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": 27.5,
        "height": 30.5,
        "right": 20,
        "top": 20
    },
    "articlelist_repeatGrid1_post959e7595_postmoney58bf9a29_ellipse62b8fe6d9": {
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
        "width": 17,
        "height": 17,
        "left": 6,
        "top": 0
    },
    "articlelist_repeatGrid1_post959e7595_postshort2bafe453": {
        "opacity": 1,
        // "position": "absolute",
        "backgroundColor": "rgba(255, 255, 255, 0)",
        "color": "rgba(136, 136, 136, 1)",
        "fontSize": 17,
        "fontWeight": "400",
        "fontStyle": "normal",
        "fontFamily": "Roboto",
        "textAlign": "left",
        "width": 250,
        marginTop: 10,
        marginEnd: 10,
        height: 'auto',
        flexWrap: 'wrap'
        // "height": 103,
        // "left": 74,
        // "top": 113
    },
    "articlelist_repeatGrid1_post959e7595_viewmoref7978898": {
        "opacity": 1,
        // "position": "relative",
        "backgroundColor": "rgba(255, 255, 255, 0)",
        "color": "rgba(252, 142, 142, 1)",
        "fontSize": 17,
        marginTop: 10,
        marginEnd: 40,
        "fontWeight": "400",
        "fontStyle": "normal",
        "fontFamily": "Roboto",
        "textAlign": "right",
        "width": 'auto',
        alignSelf: 'stretch'
        // "top": 224
    },
});