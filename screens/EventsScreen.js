import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Title, Card, Paragraph, List } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

const section = [
  { sect: "Workshops" },
  { sect: "Career Tallks" },
  { sect: "Live Coding Sessions" },
];

function EventsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.sect}
        data={section}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity
                style={styles.header}
                onPress={() => navigation.navigate("EventsList")}
              >
                <Title>{item.sect}</Title>
                <Text style={styles.seeMore}>See more</Text>
              </TouchableOpacity>
            </>
          );
        }}
      />
    </View>
  );
}

function EventsListScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Events List</Text>
    </View>
  );
}

function EventsDetailScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Events Detail</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EventsHome"
        component={EventsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="EventsList" component={EventsListScreen} />
      <Stack.Screen name="EventsDetail" component={EventsDetailScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  seeMore: {
    color: "#0239A3",
    fontSize: 18,
    fontWeight: "bold",
  },
});
