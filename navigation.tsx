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
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import SearchScreen from "./screens/SearchScreen";
import { Text } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";
import ElectronicScreen from "./screens/ElectronicScreen";
import FreshfruitScreen from "./screens/FreshfruitScreen";
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
        <Stack.Screen
          name="ElectronicScreen"
          component={ElectronicScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FreshfruitScreen"
          component={FreshfruitScreen}
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
              return <Ionicons name="home" size={size} color={color} />;
            case "Search":
              return <Ionicons name="search" size={size} color={color} />;
            case "Favorite":
              return <Ionicons name="heart" size={size} color={color} />;
            case "Inbox":
              return <Ionicons name="mail" size={size} color={color} />;
            case "Account":
              return <Ionicons name="person" size={size} color={color} />;
            default:
              return null;
          }
        },
        tabBarLabelStyle: { fontSize: 16 },
        tabBarActiveTintColor: "blue",
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
        name="Search"
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
