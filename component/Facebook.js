import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import facebook from "../assets/facebook.jpg";

const { width, height } = Dimensions.get("window");

export default function Facebook() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={facebook} style={styles.image} />
      <TextInput style={styles.input} placeholder="Số điện thoại hoặc email" />
      <TextInput
        style={styles.inputPass}
        secureTextEntry={true}
        placeholder="Mật khẩu"
      />
      <TouchableOpacity style={styles.buttonClickLogin}>
        <Text style={{ color: "#fff", fontSize: 15 }}>Đăng nhập</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.textBack}>Quên mật khẩu</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.textBack}>Quay lại</Text>
      </TouchableOpacity>

      <View
        style={{
          position: "absolute",
          top: height - 95,
          alignItems: "center",
        }}
      >
        <View style={styles.reline} />
        <Text
          style={{
            color: "#000",
            fontSize: 15,
            padding: 5,
            marginBottom: 15,
            backgroundColor: "#fff",
          }}
        >
          HOẶC
        </Text>
        <TouchableOpacity style={[styles.buttonClickLogin, styles.footer]}>
          <Text style={{ color: "#0099FF", fontSize: 15 }}>
            Tao tai khoan moi
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto"  />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // paddingTop: Constants.statusBarHeight,
  },

  input: {
    marginTop: 20,
    height: 45,
    width: "90%",
    borderColor: "#DDDDDD",
    borderWidth: 1,
    padding: 10,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  inputPass: {
    height: 45,
    width: "90%",
    borderColor: "#DDDDDD",
    borderWidth: 1,
    borderTopWidth: 0,
    padding: 10,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  buttonClickLogin: {
    alignItems: "center",
    backgroundColor: "#0099FF",
    borderRadius: 6,
    height: 45,
    width: "90%",
    padding: 10,
    marginTop: 10,
  },
  image: {
    width: width,
    height: 220,
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold",
  },
  textBack: {
    color: "#0099FF",
    fontSize: 15,
    marginTop: 15,
  },

  footer: {
    backgroundColor: "#CCFFFF33",
    width: width - 35,
  },
  reline: {
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 0.5,
    width: width - 100,
    margin: 15,
    position: "absolute",
  },
});
