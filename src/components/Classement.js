import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { List, ListItem, Text, Form, Item, Picker, Card, CardItem, Left, Thumbnail, Body, Right, Button, Icon } from 'native-base';

class Classement extends React.Component {

    render() {

        const containerStyle = {
            flex: 1,
            backgroundColor: 'white'
        };

        const sectionStyle = {
            marginBottom: 20
        }

        const titleStyle = {
            fontSize: 13,
            fontFamily: 'Luna',
            color: '#4B7104',
            textAlign: 'center'
        }

        const formStyle = {
            marginBottom: 20
        }

        const cardStyle = {
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            marginBottom: 10
        }

        const iconStyle = {
            color: '#4B7104',
            marginRight: 8
        }

        const shareStyle = {
            color: '#4B7104'
        }
        return (
            <View style={containerStyle}>
                <ScrollView style={{paddingTop: 10}}>
                    <Text style={titleStyle}>Choisis un jeu</Text>
                    <Form style={formStyle}>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                style={{ width: undefined }}
                                placeholder="Choisis un jeu"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue="key0"
                            >
                                <Picker.Item label="A l'abordage" value="key0" />
                                <Picker.Item label="La conquête de l'espace" value="key1" />
                                <Picker.Item label="Souquez les artimuses" value="key2" />
                                <Picker.Item label="Là-haut" value="key3" />
                                <Picker.Item label="Blorg" value="key4" />
                            </Picker>
                        </Item>
                    </Form>
                    <View style={sectionStyle}>
                        <Text style={titleStyle}>Meilleurs joueurs</Text>
                        <List>
                            <ListItem>
                                <Text>Paul L. (849 points)</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Nadia B. (833 points)</Text>
                            </ListItem>
                            <ListItem>
                                <Text>James B. (799 points)</Text>
                            </ListItem>
                        </List>
                    </View>
                    <View style={sectionStyle}>
                        <Text style={titleStyle}>Ton classement</Text>
                        <Card style={cardStyle}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={require('../../assets/images/empty_profile.png')} />
                                    <Body>
                                        <Text>Classé 140 sur "A l'abordage"</Text>
                                        <Text note>Pol E. (376 points)</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={require('../../assets/images/pirates-game.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Button transparent>
                                        <Icon style={iconStyle} type="FontAwesome" name="facebook-f" />
                                        <Text style={shareStyle}>Partager</Text>
                                    </Button>
                                </Left>
                                <Body>

                                </Body>
                                <Right>
                                    < Button transparent>
                                        <Icon style={iconStyle} type="FontAwesome" name="twitter" />
                                        <Text style={shareStyle}>Tweeter</Text>
                                    </Button>
                                </Right>
                            </CardItem>
                        </Card>
                    </View>
                </ScrollView>
            </View >
        );
    }
}

export default Classement;