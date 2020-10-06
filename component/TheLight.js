import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Switch,
  Image,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

import bulbOff from "../assets/bulb-off.jpg";
import bulbOn from "../assets/bulb-on.jpg";

const win = Dimensions.get("window");

const heightImage = (win.width * 925) / 631;

export default function TheLight() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = (value) => {
    setIsEnabled(value);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.imageStyle} source={isEnabled ? bulbOn : bulbOff} />
      <Switch onValueChange={toggleSwitch} value={isEnabled} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
  },
  imageStyle: {
    width: "100%",
    height: heightImage,
  },
});
