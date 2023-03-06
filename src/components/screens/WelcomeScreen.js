import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { fontStyles, colorStyles } from "../default/default";

const WelcomeScreen = ({ navigation }) => {
  const handleRegisterAccount = () => {
    navigation.navigate("Signup");
  };
  return (
    <>
      <View style={styles.welcomeContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/img/logo.png")}
            style={styles.logo}
          />
          <Text style={styles.logoContainerText}>equest</Text>
        </View>
        <Image
          source={require("../../../assets/img/welcome.png")}
          style={styles.image}
        />
        <Text style={styles.para}>
          We <Text style={styles.color}>connects</Text> you to daily
          professional
          <Text style={styles.color}> assistance</Text>
        </Text>

        <Text style={styles.info}>
          Request is an application that is going to make you're life easier by
          conncecting profssional assistance.
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={handleRegisterAccount}>
            <Text style={styles.btnText}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    backgroundColor: colorStyles.colorWhite,
    paddingHorizontal: 20,
  },
  image: {
    height: 300,
    width: 300,
    alignSelf: "center",
  },
  para: {
    fontSize: 28,
    fontFamily: fontStyles.poppinsExBold,
    lineHeight: 42,
    letterSpacing: 0.1,
  },
  color: {
    color: colorStyles.primaryColor,
  },
  info: {
    fontFamily: fontStyles.poppinsRegular,
    opacity: 0.4,
    marginTop: 10,
  },
  logoContainer: {
    flexDirection: "row",
    marginVertical: 20,
  },
  logoContainerText: {
    alignSelf: "center",
    fontSize: 20,
    fontFamily: fontStyles.poppinsExBold,
    letterSpacing: 0.5,
  },
  logo: {
    width: 28,
    height: 28,
    alignSelf: "center",
  },
  btnContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  btn: {
    backgroundColor: colorStyles.primaryColor,
    padding: 18,
    marginBottom: 20,
    borderRadius: 100,
  },
  btnText: {
    textAlign: "center",
    fontFamily: fontStyles.poppinsBold,
    fontSize: 18,
    color: colorStyles.colorWhite,
  },
});

export default WelcomeScreen;
