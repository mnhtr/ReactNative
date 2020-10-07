import React from "react";
import {View, Image, Text } from "react-native";
import styles from "./style";


const Story = ({imageUri, name}) => (
  <View style={{backgroundColor:"#f2f2f24D",}}>
    <View style={styles.reline} />
      <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: imageUri }} />
            </View>
            <Text style={{ fontSize: 11, width: 65, }} numberOfLines={1} >{name}
            </Text>
      </View>
    <View style={styles.reline} />
  </View>
);

export default Story;
