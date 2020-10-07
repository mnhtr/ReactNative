import React from "react";
import { FlatList } from "react-native";
import Article from "../article/index";
import { feeds } from "../data/preData";
import Stories from "../stories";

const NewFeed = () => {
  const renderArticle = ({ item }) => <Article item={item} />;

  return (
    <FlatList
      showsVerticalScrollIndicator={true}
      data={feeds}
      renderItem={renderArticle}
      keyExtractor={(item) => item.id}
      //  ListHeaderComponent={Stories}
    />
  );
};

export default NewFeed;
