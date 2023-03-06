import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { colorStyles, fontStyles } from "../../default/default";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase-config";
// icons
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Signin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const emailValidate = (email) => {
    return emailRegex.test(email);
  };
  const passwordValidate = (password) => {
    return passwordRegex.test(password);
  };

  const handleEmailErr = () => {
    if (!email) {
      setEmailErr("Email is required");
    } else if (!email.includes("@")) {
      setEmailErr("invalid email address");
    } else {
      setEmailErr("");
    }
  };
  const handlePasswordErr = () => {
    if (!password) {
      setPasswordErr("Password is required");
    } else {
      setPasswordErr("");
    }
  };

  const handleCreateAccount = async () => {
    try {
      if (email === "" && password === "") {
        handleEmailErr();
        handlePasswordErr();
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      Alert.alert(`Signup error: ${error.message}`);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>
          Log<Text style={styles.color}>in</Text>
        </Text>
        <Text style={styles.para}>
          Provide your details to access all the features
        </Text>

        <View style={styles.form}>
          <View style={styles.mainInput}>
            <View style={styles.view}>
              <Text style={styles.label}>Email</Text>
              {emailErr && <Text style={styles.labelErr}>{emailErr}</Text>}
            </View>
            <View style={styles.input}>
              <FontAwesome name="user" style={styles.icon} />
              <TextInput
                placeholder="Example@gmail.com"
                style={styles.textInput}
                onChangeText={(newEmail) => {
                  setEmail(newEmail);
                  handleEmailErr();
                }}
                value={email}
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
              />
            </View>
          </View>
          <View style={styles.mainInput}>
            <View style={styles.view}>
              <Text style={styles.label}>Password</Text>
              {passwordErr && (
                <Text style={styles.labelErr}>{passwordErr}</Text>
              )}
            </View>
            <View style={styles.input}>
              <TextInput
                placeholder="at least 8 characters"
                style={styles.textInput}
                onChangeText={(newPassword) => {
                  setPassword(newPassword);
                  handlePasswordErr();
                }}
                value={password}
                secureTextEntry={showPassword}
                textContentType="password"
              />
              <TouchableOpacity
                style={styles.iconn}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons
                  name={showPassword ? "eye-off" : "eye"}
                  style={styles.iconn}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.agreement}>
              By logging in you agree to our{" "}
              <Text style={styles.color}>terms</Text> and{" "}
              <Text style={styles.color}>condition</Text>
            </Text>
            <TouchableOpacity style={styles.btn} onPress={handleCreateAccount}>
              <Text style={styles.btnText}>Log in</Text>
            </TouchableOpacity>

            <View style={styles.already}>
              <Text style={styles.text}>don't have an account?</Text>
              <TouchableOpacity
                style={styles.btnnn}
                onPress={() => navigation.navigate("Signup")}
              >
                <Text style={styles.btnTexttt}>Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorStyles.colorWhite,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    marginTop: 20,
    fontFamily: fontStyles.poppinsExBold,
  },
  color: {
    color: colorStyles.primaryColor,
  },
  para: {
    opacity: 0.4,
    fontFamily: fontStyles.poppinsRegular,
  },
  form: {
    marginVertical: 30,
  },
  input: {
    backgroundColor: "#E4E4E4",
    flexDirection: "row",
    borderRadius: 10,
  },
  textInput: {
    flex: 1,
    padding: 15,
    fontFamily: fontStyles.poppinsRegular,
  },
  icon: {
    alignSelf: "center",
    fontSize: 22,
    marginLeft: 10,
    color: "#333",
  },
  iconn: {
    alignSelf: "center",
    fontSize: 22,
    marginRight: 10,
    color: "#333",
  },
  label: {
    fontFamily: fontStyles.poppinsRegular,
    fontSize: 16,
    marginBottom: 5,
    opacity: 0.5,
  },
  labelErr: {
    fontFamily: fontStyles.poppinsRegular,
    fontSize: 16,
    marginBottom: 5,
    opacity: 0.5,
    color: "red",
  },
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainInput: {
    marginVertical: 12,
  },
  agreement: {
    fontFamily: fontStyles.poppinsRegular,
    marginTop: 15,
    opacity: 0.6,
  },
  btn: {
    backgroundColor: colorStyles.primaryColor,
    padding: 17,
    marginVertical: 20,
    borderRadius: 100,
  },
  btnText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 500,
    color: colorStyles.colorWhite,
  },
  btnn: {
    backgroundColor: "#050505",
    padding: 17,
    marginVertical: 10,
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTextt: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 500,
    color: colorStyles.colorWhite,
  },
  icons: {
    fontSize: 24,
    marginHorizontal: 10,
    color: colorStyles.colorWhite,
  },
  btnnn: {
    alignSelf: "center",
  },
  btnTexttt: {
    fontWeight: 700,
    alignSelf: "center",
    fontSize: 18,
    marginHorizontal: 7,
  },
  already: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: fontStyles.poppinsRegular,
    fontSize: 16,
    opacity: 0.6,
  },
});
export default Signin;
