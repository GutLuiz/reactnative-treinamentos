import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


//componentes:
import { AppBar } from '../components/app-bar';



const handlePress = () => {
    console.log('Button Pressed!');
};
export default function App() {
    return (
        <View style={style.container}>
            <AppBar
                titulo='SCEF MOBILE'
                menu
                buttonone={{
                    onPressed: handlePress,
                    icon: "search"
                }}
                buttonTwo={{
                    icon: "compare-arrows"
                }}
                buttonthree={{
                    icon: "question-mark"
                }}
            />
        </View>
    );
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    body: {
        padding: 10,
    },
});