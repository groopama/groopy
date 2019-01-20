import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { List, Text, ListItem, Form, Item, Picker, Card, CardItem, Left, Thumbnail, Body, Right, Button, Icon } from 'native-base';

class Jeux extends React.Component {

    render() {

        const containerStyle = {
            flex: 1,
            backgroundColor: 'white'
        };

        const listStyle = {
            marginBottom: 20
        }

        const titleStyle = {
            fontSize: 13,
            fontFamily: 'Luna',
            color: '#4B7104',
            textAlign: 'center'
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

        const playStyle = {
            color: '#4B7104'
        }
        return (
            <View style={containerStyle}>
                <ScrollView style={{ paddingTop: 10, marginBottom: 20 }}>
                    <Text style={titleStyle}>Succes</Text>
                    <List style={listStyle}>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={require('../../assets/icons/3_days_row.png')} />
                            </Left>
                            <Body>
                                <Text>Un départ en trombe</Text>
                                <Text note numberOfLines={2}>Mesure ta glycémie 3 jours à la suite</Text>
                            </Body>
                            <Right>
                                <Text>+ 3 points</Text>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={require('../../assets/icons/5_days_row.png')} />
                            </Left>
                            <Body>
                                <Text>Continue comme ça !</Text>
                                <Text note numberOfLines={2}>Mesure ta glycémie 5 jours à la suite</Text>
                            </Body>
                            <Right>
                                <Text>+ 5 points</Text>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={require('../../assets/icons/7_days_row.png')} />
                            </Left>
                            <Body>
                                <Text>Quel champion !</Text>
                                <Text note numberOfLines={2}>Mesure ta glycémie 7 jours à la suite</Text>
                            </Body>
                            <Right>
                                <Text>+ 7 points</Text>
                            </Right>
                        </ListItem>
                    </List>
                    <Text style={titleStyle}>Jeux</Text>
                    <Card style={cardStyle}>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>La conquête de l'espace</Text>
                                    <Text note>DEBLOQUE</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require('../../assets/images/spaceship-game.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon style={iconStyle} type="FontAwesome" name="check" />
                                    <Text style={playStyle}>Jouer</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                    <Card style={cardStyle}>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>A l'abordage</Text>
                                    <Text note>DEBLOQUE</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require('../../assets/images/pirates-game.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon style={iconStyle} type="FontAwesome" name="check" />
                                    <Text style={playStyle}>Jouer</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                    <Card style={cardStyle}>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Là-haut</Text>
                                    <Text note>BLOQUE - 130 points requis</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require('../../assets/images/platform-game.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon style={iconStyle} type="FontAwesome" name="ban" />
                                    <Text style={playStyle}>Gagne des points et reviens plus tard !</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                </ScrollView>
            </View >
        );
    }
}

export default Jeux;