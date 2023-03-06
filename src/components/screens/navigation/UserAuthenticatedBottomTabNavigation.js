import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colorStyles, fontStyles } from "../../default/default";
import { Platform } from "react-native";

import HomeScreen from "../HomeScreen";
import MessageScreen from "../MessageScreen";
import LatestUploads from "../LatestUploads";
import NotificationScreen from "../NotificationsScreen";
import SettingsScreen from "../SettingsScreen";

const Tab = createBottomTabNavigator();

const UserAuthenticatedBottomTabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Message") {
              iconName = focused ? "mail" : "mail-outline";
            } else if (route.name === "Latest") {
              iconName = focused ? "ios-newspaper" : "ios-newspaper-outline";
            } else if (route.name === "Notification") {
              iconName = focused ? "notifications" : "notifications-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colorStyles.primaryColor,
          tabBarInactiveTintColor: colorStyles.colorGray,
          tabBarLabelStyle: {
            fontFamily: fontStyles.poppinsRegular,
            fontSize: 12,
            marginBottom: 5,
          },
          tabBarStyle: {
            height: Platform.OS === "android" ? 65 : 60,
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Message" component={MessageScreen} />
        <Tab.Screen name="Latest" component={LatestUploads} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default UserAuthenticatedBottomTabNavigation;
