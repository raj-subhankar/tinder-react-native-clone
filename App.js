 import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import tw from "tailwind-rn"

export default function App() {
  return (
    <View style={tw("flex-1 justify-center items-center")}>
      <Text>Hello</Text>
      <Button title='Click me' />

    </View>
  );
}
