import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../../App";

const Header = () => {
  const [darkMode] = useContext(ThemeContext);

  return (
    <View style={darkMode ? styles.lightHeader : styles.darkHeader}>
      <Text style={darkMode ? styles.lightText : styles.darkText}>Welcome</Text>
      <View style={darkMode ? styles.darkAvatar : styles.lightAvatar}>
        <Text style={styles.avatarText}>User</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lightHeader: {
    marginTop: '10%',
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    height: '7%',
    width: "100%",
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  darkHeader: {
    marginTop: '10%',
    flexDirection: 'row',
    backgroundColor: '#1f1f1f',
    height: '7%',
    width: "100%",
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  lightText: {
    color: '#000',
    fontSize: 20,
  },
  darkText: {
    color: '#fff',
    fontSize: 20,
  },
  lightAvatar: {
    height: 40,
    width: 40,
    backgroundColor: '#063970',
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkAvatar: {
    height: 40,
    width: 40,
    backgroundColor: '#FF7043',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#ffffff',
  },
});

export default Header;
