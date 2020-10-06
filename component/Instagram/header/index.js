import { View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";
import iconInstagram from "../../../assets/instagram.png";
import styles from "./style";

const Header = () => (
  <View style={styles.container}>
    <Feather name="camera" size={20} color="black" />
    <Image style={styles.icon} source={iconInstagram} />
    <Feather name="send" size={20} color="black" />
  </View>
);

export default Header;
