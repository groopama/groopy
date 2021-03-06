import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Jeux from '../components/Jeux';
import MainHeader from '../components/MainHeader';

const JeuxNavigator = createStackNavigator(
    {
        Jeux: Jeux,
    },
    {
        initialRouteName: 'Jeux',
        defaultNavigationOptions: ({ navigation }) => {
            return ({
                header: (props) => (navigation.state.index == undefined ? <MainHeader {...props} title='Games' /> : null)
            })
        },
    }
);

/* Hides the tab bar when switching to another navigator */
JeuxNavigator.defaultNavigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};
export default createAppContainer(JeuxNavigator);