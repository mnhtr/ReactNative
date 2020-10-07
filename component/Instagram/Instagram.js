import { SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import Constants from "expo-constants";
import Header from "./header/index";
import Stories from "./stories";
import NewFeed from "./newFeed";

const Instagram = () => (
  <SafeAreaView style={styles.container}>
         <Header />
         <Stories />
          <NewFeed />
        <StatusBar style="auto" />
  </SafeAreaView>
)

export default Instagram;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
});
