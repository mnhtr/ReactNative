import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: "#f2f2f2",
  },
  imageContainer: {
    height: 63,
    width: 63,
    borderRadius: 40,
    borderWidth: 1.5,
    borderColor: "#990099",
  },

  image: {
    height: 60,
    width: 60,
    borderWidth: 2,
    borderRadius: 40,
    borderColor: "#ffffff",
  },
  reline: {
    borderBottomColor: "#e6e6e6",
    borderBottomWidth: 1,
  },
});

export default styles;
