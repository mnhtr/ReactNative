import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import styles from "./style";
import { Feather } from "@expo/vector-icons";
import Footer from "../footer";

const Article = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <View style={styles.head}>
          <Image style={styles.avatar} source={{ uri: item.avatar }} />
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <Feather name="more-horizontal" size={20} color="black" />
      </View>
      <Image style={styles.image} source={{ uri: item.image }} />
      <Footer item={item} />
    </View>

);

export default Article;
