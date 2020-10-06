import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import Constants from "expo-constants";
import Stories from "./stories/index";
import Header from "./header/index";
import NewFeed from "./newFeed/index";
import Footer from "./footer/index";

export default function Instagram() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <Stories />
        <NewFeed />
        {/* <Footer /> */}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
});
