import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import AccountScreen from "./screens/AccountScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import InboxScreen from "./screens/InboxScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import SearchScreen from "./screens/SearchScreen";
import { Ionicons } from "@expo/vector-icons";
import ElectronicScreen from "./screens/ElectronicScreen";
import FreshfruitScreen from "./screens/FreshfruitScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PaymentSuccess from "./screens/PaymentSuccessScreen";
import ModalFeedBackScreen from "./screens/ModalFeedBackScreen";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false, headerTitle: "xin chao" }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: true }}
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
        <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CheckoutScreen"
          component={CheckoutScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PaymentSuccessScreen"
          component={PaymentSuccess}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ModalFeedBackScreen"
          component={ModalFeedBackScreen}
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
        // initialParams={{ selectedTab: "Account" }}
      />
    </Tab.Navigator>
  );
}
