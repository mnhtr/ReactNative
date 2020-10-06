import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import styles from "./style";
import { Feather } from "@expo/vector-icons";

class Footer extends Component {
  render() {
    return (
      <View>
        <View style={styles.footer}>
          <View style={{ flexDirection: "row" }}>
            <Feather style={styles.icon} name="heart" size={20} color="black" />
            <Feather
              style={styles.icon}
              name="message-circle"
              size={20}
              color="black"
            />
            <Feather style={styles.icon} name="send" size={20} color="black" />
          </View>

          <Feather name="bookmark" size={20} color="black" />
        </View>
        <Text style={styles.title}>{this.props.view}</Text>
        <Text style={styles.textTime}>{this.props.time}</Text>
      </View>
    );
  }
}

export default Footer;
