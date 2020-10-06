import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import styles from "./style";
import { Feather } from "@expo/vector-icons";

class Article extends Component {
  render() {
    return (
      <View>
        <View style={styles.headContainer}>
          <View style={styles.head}>
            <Image style={styles.avatar} source={this.props.avatar} />
            <Text style={styles.title}>{this.props.name}</Text>
          </View>
          <Feather name="more-horizontal" size={20} color="black" />
        </View>
        <Image style={styles.image} source={this.props.image} />
      </View>
    );
  }
}

export default Article;
