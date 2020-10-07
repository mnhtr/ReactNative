import React from "react";
import { FlatList, View } from "react-native";
import Article from "../article/index";
import { feeds } from "../data/preData";
import Stories from "../stories";

const NewFeed = () => {
  const renderArticle = ({ item }) => <Article item={item} />;

  return (
    <View style={{flex:1}}>
      <FlatList
        showsVerticalScrollIndicator={true}
        data={feeds}
        renderItem={renderArticle}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={Stories}
      />
    </View>
  );
};

export default NewFeed;
