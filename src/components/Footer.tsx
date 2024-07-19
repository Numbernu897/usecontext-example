import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../../App";

const Navbar = () => {
  const [darkMode] = useContext(ThemeContext);

  return (
    <View style={darkMode ? styles.lightNavbar : styles.darkNavbar}>
      <Text style={darkMode ? styles.darkText : styles.lightText}>1</Text>
      <Text style={darkMode ? styles.darkText : styles.lightText}>2</Text>
      <Text style={darkMode ? styles.darkText : styles.lightText}>3</Text>
      <Text style={darkMode ? styles.darkText : styles.lightText}>4</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  lightNavbar: {
    width: '100%',
    padding: 20,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  darkNavbar: {
    width: '100%',
    padding: 20,
    backgroundColor: "#444",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  darkText: {
    color: "#000",
  },
  lightText: {
    color: "#fff",
  },
});

export default Navbar;
