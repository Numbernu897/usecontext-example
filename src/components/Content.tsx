import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../../App";

const Content = () => {
    const [darkMode] = useContext(ThemeContext);

    return (
        <View style={styles.content}>
            <View style={darkMode ? styles.lightOption : styles.darkOption}>
                <View style={darkMode ? styles.lightSquare : styles.darkSquare}>
                    <Text style={darkMode ? styles.lightSquareText : styles.darkSquareText}>A</Text>
                </View>
                <Text style={darkMode ? styles.lightOptionText : styles.darkOptionText}>Option 1</Text>
            </View>
            <View style={darkMode ? styles.lightOption : styles.darkOption}>
                <View style={darkMode ? styles.lightSquare : styles.darkSquare}>
                    <Text style={darkMode ? styles.lightSquareText : styles.darkSquareText}>B</Text>
                </View>
                <Text style={darkMode ? styles.lightOptionText : styles.darkOptionText}>Option 2</Text>
            </View>
            <View style={darkMode ? styles.lightOption : styles.darkOption}>
                <View style={darkMode ? styles.lightSquare : styles.darkSquare}>
                    <Text style={darkMode ? styles.lightSquareText : styles.darkSquareText}>C</Text>
                </View>
                <Text style={darkMode ? styles.lightOptionText : styles.darkOptionText}>Option 3</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        padding: 10,
        width: "100%",
        alignItems: "center"
    },
    lightOption: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
        backgroundColor: "#F5F5F5",
        padding: 10,
        width: "90%",
        justifyContent: 'center',
    },
    darkOption: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
        backgroundColor: "#1f1f1f",
        padding: 10,
        width: "90%",
        justifyContent: 'center',
    },
    lightSquare: {
        backgroundColor: "#000000",
        padding: 10,
        marginRight: 10
    },
    darkSquare: {
        backgroundColor: "#ffffff",
        padding: 10,
        marginRight: 10
    },
    lightSquareText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },
    darkSquareText: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center'
    },
    lightOptionText: {
        color: "#000",
        fontSize: 18
    },
    darkOptionText: {
        color: "#fff",
        fontSize: 18
    }
});

export default Content;
