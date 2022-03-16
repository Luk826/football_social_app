import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import FollowedScreen from "../screens/FollowedScreen";
import PublishScreen from "../screens/PublishScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";

import Iconicons from "react-native-vector-icons/Ionicons";


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Seguiti") {
            iconName = focused ? "people" : "people-outline";
          } else if (route.name === "Pubblica") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name === "Notifiche") {
            iconName = focused ? "notifications" : "notifications-outline";
          } else if (route.name === "Profilo") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }

          return <Iconicons name={iconName} color={color} size={27} />;
        },
        tabBarActiveTintColor: "#36d671",
        tabBarInactiveTintColor: "black",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Seguiti" component={FollowedScreen} />
      <Tab.Screen name="Pubblica" component={PublishScreen} />
      <Tab.Screen name="Notifiche" component={NotificationScreen} />
      <Tab.Screen name="Profilo" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
