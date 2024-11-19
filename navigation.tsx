import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import AccountScreen from "./screens/AccountScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import InboxScreen from "./screens/InboxScreen";
import * as Icon from "react-native-feather";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import SearchScreen from "./screens/SearchScreen";
import { Text } from "react-native-svg";
//import Iconicon from '@react-native-vector-icons/ionicons';
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case "Home":
              return <Icon.Home width={size} height={size} stroke={color} />;
            case "Search":
              return <Icon.Home width={size} height={size} stroke={color} />;
            case "Favorite":
              return <Icon.Heart width={size} height={size} stroke={color} />;
            case "Inbox":
              return (
                <Icon.MessageCircle width={size} height={size} stroke={color} />
              );
            case "Account":
              return <Icon.User width={size} height={size} stroke={color} />;
            default:
              return null;
          }
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: true,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="MyOrder"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Inbox"
        component={InboxScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{ headerShown: false }}
        initialParams={{ selectedTab: "Account" }}
      />
    </Tab.Navigator>
  );
}
