import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import GroopySwiper from './GroopySwiper';
class Accueil extends React.Component {

    render() {

        const containerStyle = {
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center'
        };

        const imgStyle = {
            height: 100,
            width: 70,
            marginTop: 20
        }

        const titleStyle = {
            fontFamily: 'Luna',
            fontSize: 18,
            color: '#4B7104'
        }

        const rowStyle = {
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }

        const sunStyle = {
            height: 60,
            width: 40,
            marginLeft: 10
        }

        const bloodSugarStyle = {
            height: 60,
            width: 40,
            marginLeft: 10
        }

        const flexText = {
            flex: 1,
            marginLeft: 10,
            padding: 5
        }

        const sectionStyle = {
            marginTop: 20,
            width: '100%'
        }

        const sectionTitle = {
            fontSize: 18,
            color: "#4B7104",
            marginBottom: 10,
            textAlign: 'center',
            fontFamily: 'Roboto'
        }

        return (
            <View style={containerStyle}>

                <Image
                    style={imgStyle}
                    resizeMode={'contain'}
                    source={require('../../assets/logo.png')} />
                <Text style={titleStyle}>Salut Pol !</Text>
                <ScrollView style={{ width: '100%' }}>
                    <View style={rowStyle}><Image
                        style={sunStyle}
                        resizeMode={'contain'}
                        source={require('../../assets/images/sun.png')} />
                        <View style={flexText}>
                            <Text>
                                Le ciel s'annonce ensoleillé aujourd'hui, c'est chouette !</Text>
                        </View>
                    </View>

                    <View style={rowStyle}><Image
                        style={bloodSugarStyle}
                        resizeMode={'contain'}
                        source={require('../../assets/images/blood-sugar.png')} />
                        <View style={flexText}>
                            <Text>
                                Tu as vérifié ta glycémie à 17h04 hier.</Text>
                        </View>
                    </View>
                    <View style={rowStyle}><Image
                        style={bloodSugarStyle}
                        resizeMode={'contain'}
                        source={require('../../assets/images/average.png')} />
                        <View style={flexText}>
                            <Text>
                                Ta glycémie hebdomadaire moyenne est de 5.5mmol/L. Continue comme ça !</Text>
                        </View>
                    </View>
                    <View style={sectionStyle}>
                        <Text style={sectionTitle}>Découvre ce que Groopy peut faire</Text>
                        <GroopySwiper />
                    </View>
                </ScrollView>
            </View >
        );
    }
}

export default Accueil;