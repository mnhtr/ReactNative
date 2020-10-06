import { StatusBar } from "expo-status-bar";
import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";

export default function Momo() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 70, alignItems: "center" }}>
        <Text style={styles.textWelcome}>Xin chào</Text>
        <Text style={styles.text}>NGUYEN MINH TRI</Text>
        <Text style={styles.text}>0123456789</Text>
      </View>

      <View style={{ alignItems: "center", }}>
        <View style={styles.viewInputPass}>
          <Feather
            name="lock"
            size={15}
            color="black"
            style={styles.iconStyle}
          />

          <TextInput
            secureTextEntry={true}
            style={{flex:1 ,textAlign: 'center'}} 
            placeholder="Nhập mật khẩu"
            
          />
        </View>
        <TouchableOpacity style={styles.buttonClickLogin}>
          <Text style={{ color: "#fff" }}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.viewAccount}>
        <TouchableOpacity>
          <Text style={{ color: "#fff" , fontSize: 15}}>QUÊN MẬT KHẨU</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: "#fff" , fontSize: 15}}>THOÁT TÀI KHOẢN</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF3399",
    paddingTop: Constants.statusBarHeight,
    // justifyContent: "center",
  },
  buttonUsername: {
    alignItems: "center",
    height: 40,
    width: "80%",
    marginTop: 20,
    borderRadius: 40,
    borderColor: "white",
    borderWidth: 1,
    textAlign: "center",
    backgroundColor: "white",
  },
  iconStyle: {
    position: 'absolute',
    marginVertical: 20,
    marginStart: 20
  },
  buttonClickLogin: {
    alignItems: "center",
    backgroundColor: "#CC0066",
    borderRadius: 40,
    height: 50,
    width: "85%",
    justifyContent: "center",
    marginTop: 10,
  },
  viewInputPass: {
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    height: 55,
    width: "85%",
    borderRadius: 40,
    marginTop: 20,
    paddingLeft: 10,
  },

  textWelcome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  text: {
    fontSize: 15,
    marginTop: 5,
    color: "#fff",
  },

  viewAccount: {
    marginTop: 20,
    flexDirection: "row",
    marginHorizontal: 30,
    justifyContent: "space-between",
  },
});
