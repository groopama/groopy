import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Classement from '../components/Classement';
import MainHeader from '../components/MainHeader';

const ClassementNavigator = createStackNavigator(
    {
        Classement: Classement,
    },
    {
        initialRouteName: 'Classement',
        defaultNavigationOptions: ({ navigation }) => {
            return ({
                header: (props) => (navigation.state.index == undefined ? <MainHeader {...props} title="Classement" /> : null)
            })
        },
    }
);

/* Hides the tab bar when switching to another navigator */
ClassementNavigator.defaultNavigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};
export default createAppContainer(ClassementNavigator);