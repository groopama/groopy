import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import bloodSugar from '../../data/bloodSugar';
import carbs from '../../data/carbs';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { Button, Input, Item, Label, Picker, Icon } from 'native-base';
import Modal from 'react-native-modalbox';

class Glycemie extends React.Component {

    render() {

        const containerStyle = {
            flex: 1,
            alignItems: 'center',
            paddingTop: 10
        };

        const titleStyle = {
            fontSize: 13,
            fontFamily: 'Luna',
            color: '#4B7104',
            textAlign: 'center'
        }

        const bezierChartConfig = {
            backgroundColor: 'white',
            backgroundGradientFrom: 'white',
            backgroundGradientTo: 'white',
            decimalPlaces: 2,
            color: (opacity = 1) => '#4B7104',
            style: {
                borderRadius: 16
            }
        };
        const barChartConfig = {
            backgroundColor: 'white',
            backgroundGradientFrom: 'white',
            backgroundGradientTo: 'white',
            decimalPlaces: 0,
            color: (opacity = 1) => '#4B7104',
            style: {
                borderRadius: 16
            }
        };

        const addBtnStyle = {
            backgroundColor: '#4B7104',
            zIndex: 1
        }

        const btnTextStyle = {
            color: 'white',
            marginLeft: 15,
            marginRight: 15,
            fontSize: 18
        }

        const centeredView = {
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 15,
            marginBottom: 30,
            zIndex: 1
        }

        const modalMeasureStyle = {
            height: 200,
            backgroundColor: 'white',
            zIndex: 2,
            borderBottomWidth: 1,
            borderBottomColor: '#4B7104',
            borderTopWidth: 1,
            borderTopColor: '#4B7104',
            padding: 10
        }

        const modalMealStyle = {
            height: 300,
            backgroundColor: 'white',
            zIndex: 2,
            borderBottomWidth: 1,
            borderBottomColor: '#4B7104',
            borderTopWidth: 1,
            borderTopColor: '#4B7104',
            padding: 10
        }

        const modalTitle = {
            fontSize: 20,
            marginBottom: 10
        }

        const modalBtnContainer = {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10
        }

        const formView = {
            flex: 1
        }

        return (
            <View style={containerStyle}>


                <Modal isOpen={this.props.showMeasureModal} position={"center"} style={modalMeasureStyle} onClosed={() => this.props.closeMeasureModal()}>
                    <Text style={modalTitle}>Ajouter une mesure</Text>
                    <View style={formView}>
                        <Item fixedLabel>
                            <Label>Glycemie</Label>
                            <Input />
                            <Text>mmol/L</Text>
                        </Item>
                    </View>
                    <View style={modalBtnContainer}>
                        <Button style={addBtnStyle} onPress={() => this.props.closeMeasureModal()} >
                            <Text style={btnTextStyle}>Ajouter une mesure</Text>
                        </Button>
                    </View>
                </Modal>
                <Modal isOpen={this.props.showMealModal} position={"center"} style={modalMealStyle} onClosed={() => this.props.closeMealModal()}>
                    <Text style={modalTitle}>Ajouter un repas</Text>
                    <View style={formView}>
                        <Item fixedLabel>
                            <Label>Nom du repas</Label>
                            <Input />
                        </Item>

                        <Item picker fixedLabel>
                            <Label>Type du repas</Label>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="ios-arrow-down-outline" />}
                                style={{ width: undefined }}
                                placeholder="Sélectionner"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                            >
                                <Picker.Item label="Petit-déjeuner" value="breakfast" />
                                <Picker.Item label="Déjeuner" value="lunch" />
                                <Picker.Item label="Dîner" value="dinner" />
                            </Picker>
                        </Item>

                        <Item fixedLabel>
                            <Label>Calories</Label>
                            <Input />
                            <Text>kcal</Text>
                        </Item>
                    </View>
                    <View style={modalBtnContainer}>
                        <Button style={addBtnStyle} onPress={() => this.props.closeMealModal()}>
                            <Text style={btnTextStyle}>Ajouter un repas</Text>
                        </Button>
                    </View>
                </Modal>
                <Text style={titleStyle}>Glycemie - mmol/L</Text>
                <LineChart
                    data={bloodSugar}
                    width={Dimensions.get('window').width}
                    height={200}
                    chartConfig={bezierChartConfig}
                    bezier
                />
                <View style={centeredView}>
                    <Button style={addBtnStyle} onPress={() => this.props.toggleMeasureModal()}>
                        <Text style={btnTextStyle}>Ajouter un repas</Text>
                    </Button>
                </View>
                <Text style={titleStyle}>Calories moyennes par repas - kcal</Text>
                <BarChart
                    data={carbs}
                    width={Dimensions.get('window').width}
                    height={200}
                    chartConfig={barChartConfig}
                />
                <View style={centeredView}>
                    <Button style={addBtnStyle} onPress={() => this.props.toggleMealModal()}>
                        <Text style={btnTextStyle}>Ajouter un repas</Text>
                    </Button>
                </View>
            </View >
        );
    }
}

export default Glycemie;