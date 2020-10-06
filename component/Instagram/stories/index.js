import React from "react";
import { ScrollView, View, Image, Text } from "react-native";
import styles from "./style";
const data = [
  {
    id: 1,
    imageUri:
      "https://image.thanhnien.vn/800/uploaded/minhnguyet/2020_03_15/emma-watson1_ubmz.jpg",
    name: "Emma.Ws",
  },

  {
    id: 2,
    imageUri:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/angelina-jolie-1551955642.jpg",
    name: "angelinaJolie",
  },

  {
    id: 3,
    imageUri:
      "https://i2-prod.mirror.co.uk/incoming/article22739646.ece/ALTERNATES/s615b/0_92nd-Oscars-Nominees-Luncheon-Arrivals.jpg",
    name: "brad.pitt",
  },
  {
    id: 4,
    imageUri:
      "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F558c0172e4b0425fd034f8ba%2F0x0.jpg%3Ffit%3Dscale%26background%3D000000",
    name: "leonardo dicaprio",
  },
  {
    id: 5,
    imageUri:
      "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0OTM2NTg1NzQz/tom-cruise-9262645-1-402.jpg",
    name: "tomcruise",
  },
  {
    id: 6,
    imageUri:
      "https://specials-images.forbesimg.com/imageserve/5c76bcaaa7ea43100043c836/416x416.jpg?background=000000&cropX1=227&cropX2=2022&cropY1=22&cropY2=1817",
    name: "catona",
  },
];

const Stories = () => (
  <View>
    <View style={styles.reline} />
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {data.map((key) => (
          <View style={{ width: 65, margin: 5, alignItems: "center" }}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: key.imageUri }} />
            </View>
            <Text style={{ fontSize: 11 }}>
              {" "}
              {key.name.length < 8
                ? `${key.name}`
                : `${key.name.substring(0, 10)}...`}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
    <View style={styles.reline} />
  </View>
);

export default Stories;
