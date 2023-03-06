import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { colorStyles, fontStyles } from "../default/default";
const logo = require("../../../assets/img/logo.png");
import { useNavigation } from "@react-navigation/native";
// ICONS import
import { Ionicons } from "@expo/vector-icons";


const Home = () => {
  const navigation = useNavigation();


React.useEffect(()=>{
  stackNavigator();
},[0])

  return (
    <>
      <View style={styles.Container}>
        <View style={styles.upperContainer}>
          <View style={styles.headerContainerr}>
            <View style={styles.headerContainer}>
              <Image source={logo} style={styles.logoImage} />
              <Text style={styles.header}>equest</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="notifications" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colorStyles.colorWhite,
  },
  upperContainer: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  logoImage: {
    width: 35,
    height: 35,
  },
  headerContainer: {
    flexDirection: "row",
    backgroundColor: colorStyles.colorWhite
  },
  headerContainerr: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    alignSelf: "center",
    fontSize: 25,
    fontWeight: 600,
    letterSpacing: 1,
    marginHorizontal: 2,
  },
});
export default Home;
