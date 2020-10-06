import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  headContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 40,
  },
  title: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
    marginStart: 10,
  },
  image: {
    width: width,
    height: 350,
    marginTop: 10,
  },
});

export default styles;
