import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  textView: {
    marginTop: 3,
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
    marginStart: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal:10,
  },
  icon: {
    marginEnd: 10,
  },
  textTime: {
    marginTop: 3,
    color: "gray",
    fontSize: 13,
    marginStart: 10,
  },
});

export default styles;
