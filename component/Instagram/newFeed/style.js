import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 10,
  },
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
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal:10,
  },
  icon: {
    justifyContent: "flex-end", 
    marginEnd: 10,
  },
  textTime: {
    color: "gray",
    fontSize: 13,
    marginStart: 10,
  },
});

export default styles;
