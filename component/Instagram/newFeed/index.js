import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./style";
import { Feather } from "@expo/vector-icons";

const data = [
  {
    id: 1,
    name: "justin bieber",
    avatar: "https://s.hdnux.com/photos/01/05/34/40/18204700/3/1200x0.jpg",
    image:
      "https://afamilycdn.com/2017/15-fashionista-han-quoc-jina-kim-3-1509198780651.jpg",
    view: "200000 view",
    time: "1 hour",
  },
  {
    id: 2,
    name: "Sharapova",
    avatar:
      "https://www.mariasharapova.com/wp-content/uploads/Telegraph-Press.jpeg",
    image:
      "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2018%2F04%2Fgucci-supreme-adidas-generation-z-teens-favorite-fashion-brands-piper-jaffray-survey-01.jpg?quality=95&w=1170&cbr=1&q=90&fit=max",
    view: "50000 view",
    time: "3 hour",
  },
  {
    id: 3,
    name: "Hans Dieter Flick",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Hans-Dieter_Flick%2C_Germany_national_football_team_%2801%29.jpg/1200px-Hans-Dieter_Flick%2C_Germany_national_football_team_%2801%29.jpg",
    image:
      "https://cdn.livekindly.co/wp-content/uploads/2018/02/emma-watson-vogue.jpg",
    view: "30000 view",
    time: "3 hour",
  },
  {
    id: 4,
    name: "keny west",
    avatar:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kanye-west-s-political-party-has-a-creative-name-1594223552.jpg",
    image:
      "https://cdn1.i-scmp.com/sites/default/files/styles/1200x800/public/images/methode/2018/09/27/10059468-c1fb-11e8-bfc4-8898d3e518ea_1280x720_180215.jpg?itok=RkriaS77",
    view: "2000 view",
    time: "5 hour",
  },
  {
    id: 5,
    name: "Eric Cantona",
    avatar:
      "https://specials-images.forbesimg.com/imageserve/5c76bcaaa7ea43100043c836/416x416.jpg?background=000000&cropX1=227&cropX2=2022&cropY1=22&cropY2=1817",
    image: "https://i.ytimg.com/vi/eNm_4w1NANU/maxresdefault.jpg",
    view: "1000 view",
    time: "1 hour",
  },
  {
    id: 6,
    name: "Lucas Hernandez",
    avatar:
      "https://specials-images.forbesimg.com/imageserve/5e8b62cfc095010007bffea0/416x416.jpg?background=000000&cropX1=0&cropX2=4529&cropY1=652&cropY2=5184",
    image:
      "https://cdn.fashionmagazine.com/wp-content/uploads/2019/10/Paris-str-S8-RS20-7459.jpg",
    view: "100,000 view",
    time: "2 hour",
  },
];

const NewFeed = () => (
  <View>
    {data.map((key) => (
      <View style={styles.container}>
        <View style={styles.headContainer}>
          <View style={styles.head}>
            <Image style={styles.avatar} source={{ uri: key.avatar }}></Image>
            <Text style={styles.title}>{key.name}</Text>
          </View>
          <Feather name="more-horizontal" size={20} color="black" />
        </View>
        <Image style={styles.image} source={{ uri: key.image }} />
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
        <Text style={styles.title}>{key.view}</Text>
        <Text style={styles.textTime}>{key.time}</Text>
      </View>
    ))}
  </View>
);

export default NewFeed;