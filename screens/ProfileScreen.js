import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ProfileScreen() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  return (
    <View style={styles.container}>
      {selectedImage !== null ? (
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.profile}
        />
      ) : (
        <Image
          source={require("../assets/default-profile-pic.jpeg")}
          style={styles.profile}
        />
      )}
      <TouchableOpacity onPress={openImagePickerAsync}>
        <Text style={styles.edit}>Edit photo</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Name"
        autoCapitalize="none"
        onChangeText={(text) => setName(text)}
        underlineColorAndroid="transparent"
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Bio"
        autoCapitalize="none"
        onChangeText={(text) => setBio(text)}
        underlineColorAndroid="transparent"
        value={bio}
      />
      <TouchableOpacity style={styles.button} onPress={() => onLogoutPress()}>
        <Text style={styles.buttonTitle}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  profile: {
    height: 200,
    width: 200,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  edit: {
    color: "#0239A3",
    marginTop: 20,
  },
  input: {
    width: 350,
    height: 55,
    margin: 10,
    padding: 8,
    borderRadius: 15,
    fontSize: 18,
    fontWeight: "500",
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
    fontSize: 24,
    fontWeight: "bold",
  },
});
