import React from 'react';
import { ImageBackground, View, Content, Text, Container } from 'react-native';
import { Icon } from 'native-base';
import Swiper from 'react-native-swiper';

class GroopySwiper extends React.Component {

    render() {

        const swiperStyle = {
            height: 200
        }

        const text = {
            color: '#fff',
            fontSize: 30,
            fontWeight: 'bold'
        }

        const imgSlideStyle = {
            width: '100%',
            flex: 1
        }

        const columnContainer = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            flex: 1,
            marginBottom: 40,
            marginLeft: 10,
            marginRight: 10
        }

        const rowContainer = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }

        const mainLeftText = {
            fontFamily: 'Roboto',
            fontSize: 22,
            color: 'white',
            fontWeight: 'bold'
        }

        const secondaryLeftText = {
            fontFamily: 'Roboto',
            fontSize: 16,
            color: 'white'
        }

        const mainRightText = {
            fontFamily: 'Roboto',
            fontSize: 22,
            color: 'white',
            textAlign: 'right',
            fontWeight: 'bold'
        }

        const secondaryRightText = {
            fontFamily: 'Roboto',
            fontSize: 16,
            color: 'white',
            textAlign: 'right'
        }

        const lineContainer = {
            flexDirection: 'row',
            alignItems: 'center'
        }

        const iconStyle = {
            color: 'white',
            marginRight: 10,
            fontSize: 15
        }
        return (
            <View style={swiperStyle}>
                <Swiper dotColor='#BDBBBC' activeDotColor='#656567' loop={false}>
                    <ImageBackground
                        source={require("../../assets/images/insulin-check.jpg")}
                        style={imgSlideStyle}
                        resizeMode='cover'>
                        <View style={columnContainer}>
                            <View style={rowContainer}>
                                <View>
                                    <Text style={mainLeftText}>Surveille ta glycémie</Text>
                                    <Text style={secondaryLeftText}>et débloque de nouveaux jeux !</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground> 
                    <ImageBackground
                        source={require("../../assets/images/game.jpg")}
                        style={imgSlideStyle}
                        resizeMode='cover'>
                        <View style={columnContainer}>
                            <View style={rowContainer}>
                                <View>
                                    <Text style={mainLeftText}>Joue à des jeux exclusifs</Text>
                                    <Text style={secondaryLeftText}>et compare tes scores en ligne !</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <ImageBackground
                        source={require("../../assets/images/chatbot.jpg")}
                        style={imgSlideStyle}
                        resizeMode='cover'>
                        <View style={columnContainer}>
                            <View style={rowContainer}>
                                <View>
                                    <Text style={mainLeftText}>Parle avec Groopy</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </Swiper>
            </View>
        );
    }
}

export default GroopySwiper;