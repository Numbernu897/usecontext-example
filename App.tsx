import React, { useState, createContext, Dispatch, SetStateAction } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer"; // Ensure Footer is properly imported
import Content from "./src/components/Content";

type ThemeContextType = [boolean, Dispatch<SetStateAction<boolean>>];

export const ThemeContext = createContext<ThemeContextType>([true, () => { }]);

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(previousMode => !previousMode);
    console.log(darkMode);
  };
  return (
    <>
      <ThemeContext.Provider value={[darkMode, setDarkMode]}>
        <View style={darkMode ?  styles.lightContainer : styles.darkContainer}>
          <Header />
          <Content />
          <Footer />
        </View>

        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>Toggle theme</Text>
        </TouchableOpacity>
      </ThemeContext.Provider>
    </>
  );
};

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  darkContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
  },
});

export default App;
