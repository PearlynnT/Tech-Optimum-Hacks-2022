import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Title, Card, Paragraph, Button } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

function ForumScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ForumPost")}
      >
        <Text style={styles.buttonTitle}>New Post</Text>
      </TouchableOpacity>
      <Card>
        <Card.Content>
          <Paragraph>Computer Science</Paragraph>
          <Title>How to prepare for Computer Science in university?</Title>
        </Card.Content>
        <Card.Actions>
          <Button>Like</Button>
          <Button>Comment</Button>
          <Button>Save</Button>
        </Card.Actions>
      </Card>
      <Card>
        <Card.Content>
          <Paragraph>Coding/Programming</Paragraph>
          <Title>What is the difference between Stack and Heap?</Title>
        </Card.Content>
        <Card.Actions>
          <Button>Like</Button>
          <Button>Comment</Button>
          <Button>Save</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

function ForumPostScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Forum Post</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function ForumStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ForumHome"
        component={ForumScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ForumPost" component={ForumPostScreen} />
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
  button: {
    width: 170,
    height: 50,
    margin: 10,
    padding: 8,
    borderRadius: 15,
    backgroundColor: "#F99500",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
