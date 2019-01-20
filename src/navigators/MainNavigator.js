import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Image, Text, View } from 'react-native';
import { Icon } from 'native-base';

import AccueilNavigator from './AccueilNavigator';
import GlycemieNavigator from './GlycemieNavigator';
import JeuxNavigator from './JeuxNavigator';
import ClassementNavigator from './ClassementNavigator';
import ChatNavigator from './ChatNavigator';

const MainNavigator = createBottomTabNavigator(
    {
        Accueil: AccueilNavigator,
        Glycemie: GlycemieNavigator,
        Jeux: JeuxNavigator,
        Classement: ClassementNavigator,
        Chat: ChatNavigator
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;

                const labelStyle = focused ? {
                    fontSize: 13,
                    textAlign: 'center',
                    color: '#4B7104'
                } : {
                        fontSize: 9,
                        textAlign: 'center',
                        color: '#4B7104'
                    };

                const viewStyle = {
                    justifyContent: 'center',
                    alignItems: 'center'
                }
                let iconSource;

                switch (routeName) {
                    case 'Accueil':
                        iconSource = 'home';
                        break;
                    case 'Glycemie':
                        iconSource = 'check';
                        break;
                    case 'Jeux':
                        iconSource = 'gamepad';
                        break;
                    case 'Classement':
                        iconSource = 'list';
                        break;
                    case 'Chat':
                        iconSource = 'comments';
                        break;
                    default:
                        iconSource = 'home';
                }

                let iconStyle = focused ? {
                    fontSize: 29,
                    color: '#4B7104'
                } : {
                        fontSize: 24,
                        color: '#4B7104',
                        textAlign: 'center'
                    };
                return (
                    <View style={viewStyle}>
                        <Icon type="FontAwesome" name={iconSource} style={iconStyle} />
                        <Text style={labelStyle}>{routeName}</Text>
                    </View>
                );
            },
        }),
        tabBarOptions:
            {
                showLabel: false,
                style: {
                    borderTopWidth: 1,
                    borderTopColor: '#4B7104',
                    height: 55,
                    backgroundColor: '#F2FFF2'
                }
            },
    }
);

export default createAppContainer(MainNavigator);