import { FlatList, View } from "react-native";
import React from "react";
import Story from "./story/index";
import { stories } from "../data/preData";

export default function Stories() {
  const renderStory = ({ item }) => (
    <Story imageUri={item.imageUri} name={item.name} />
  );

  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={stories}
        renderItem={renderStory}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
