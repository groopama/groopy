import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Accueil from '../components/Accueil';
import MainHeader from '../components/MainHeader';

const AccueilNavigator = createStackNavigator(
    {
        Accueil: Accueil,
    },
    {
        initialRouteName: 'Accueil',
        defaultNavigationOptions: ({ navigation }) => {
            return ({
                header: (props) => (navigation.state.index == undefined ? <MainHeader {...props} title='Accueil' /> : null)
            })
        },
    }
);

/* Hides the tab bar when switching to another navigator */
AccueilNavigator.defaultNavigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};
export default createAppContainer(AccueilNavigator);