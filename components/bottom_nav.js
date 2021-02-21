import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const windowWidth = Dimensions.get('window').width;

export default class BottomNavigator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            home: (props.home == undefined) ? false : props.home,
            edit: (props.edit == undefined) ? false : props.edit,
            profile: (props.profile == undefined) ? false : props.profile
        };
    }

    changeSelection = (selector) => {
        switch (selector) {
            case 'home':
                this.setState({
                    home: true,
                    edit: false,
                    profile: false
                })
                break;
            case 'edit':
                this.setState({
                    home: false,
                    edit: true,
                    profile: false
                })
                break;
            case 'profile':
                this.setState({
                    home: false,
                    edit: false,
                    profile: true
                })
                break;
            default:


        };

    }

    navigate() {



    }

    render() {
        console.log(this.props)
        console.log(this.props.navigator)
        return (
            <View data-layer="c7beef1d-0991-46b0-88ca-9c7f02025046" style={[styles.profile_bottomnav, styles.profile_bottomnav_toolbarbackground]}>
                <TouchableOpacity onPress={() => {
                    this.props.navigator.push("Articles");
                    this.changeSelection('home');
                }}>
                    <Image data-layer="445dacba-f9bd-4e1a-8274-c1e01b4d69f7"
                        source={require('../assets/home.png')} style={this.state.home ? styles.bottom_nav_icon_selected : styles.bottom_nav_icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { 
                    this.changeSelection('edit'); 
                    this.props.navigator.push('Transfer') }}>
                    <Image data-layer="48281475-9ecf-44d2-b503-aaa5830894d1"
                        source={require('../assets/edit.png')} style={this.state.edit ? styles.bottom_nav_icon_selected : styles.bottom_nav_icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.changeSelection('profile');
                    this.props.navigator.push('Profile')
                }} >
                    <Image data-layer="46f4eaca-1fff-48c5-a532-1e2fecc830cf"
                        source={require('../assets/profile01f8da29.png')} style={this.state.profile ? styles.bottom_nav_icon_selected : styles.bottom_nav_icon} />
                </TouchableOpacity>
            </View>

        );
    }

}


BottomNavigator.propTypes = {

}

BottomNavigator.defaultProps = {

}

const styles = StyleSheet.create({
    "profile_bottomnav": {
        "opacity": 1,
        "position": "absolute",
        "backgroundColor": "transparent",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": windowWidth,
        "left": 0,
        "right": 0,
        "bottom": 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        elevation: 7
    },
    "profile_bottomnav_toolbarbackground": {
        "opacity": 1,
        "backgroundColor": "rgba(255, 255, 255, 1)",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "borderTopLeftRadius": 0,
        "borderTopRightRadius": 0,
        "borderBottomLeftRadius": 0,
        "borderBottomRightRadius": 0,
        "shadowColor": "rgb(0,  0,  0)",
        "shadowOpacity": 0.3,
        "shadowOffset": {
            "width": 0,
            "height": 0
        },
        "shadowRadius": 10,
        "width": windowWidth,
    },
    "bottom_nav_icon": {
        "opacity": 1,
        "margin": 20,
        "width": 30,
        "height": 30,
        tintColor: 'rgba(112, 112, 112, 1)'
    },
    "bottom_nav_icon_selected": {
        "opacity": 1,
        "margin": 20,
        "width": 30,
        "height": 30,
        tintColor: 'rgba(230, 57, 80, 1)'
    },
});