import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import GlycemieContainer from '../containers/GlycemieContainer';
import MainHeader from '../components/MainHeader';

const GlycemieNavigator = createStackNavigator(
    {
        Glycemie: GlycemieContainer,
    },
    {
        initialRouteName: 'Glycemie',
        defaultNavigationOptions: ({ navigation }) => {
            return ({
                header: (props) => (navigation.state.index == undefined ? <MainHeader {...props} title='Glycemie' /> : null)
            })
        },
    }
);

/* Hides the tab bar when switching to another navigator */
GlycemieNavigator.defaultNavigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};
export default createAppContainer(GlycemieNavigator);