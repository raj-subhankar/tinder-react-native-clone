import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>I am the home screen</Text>
      <Button title="Go to chat" onPress={() => navigation.navigate("Chat")} />
    </View>
  );
};

export default HomeScreen;
