import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Title, List } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import CalendarPicker from "react-native-calendar-picker";

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Title>Schedule</Title>
      <List.Item
        title="HTML and CSS for Beginners"
        description="17/07/2022 | 2:00 PM"
      />
    </View>
  );
}

function RoomScreen() {
  //TODO
}

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="RoomScreen" component={RoomScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
