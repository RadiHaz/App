import React from "react";
import { TouchableOpacity, StyleSheet, Image, View } from "react-native";

export default function CustomButton(props) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: props.bgColor,
          borderWidth: props.borderWidth,
          borderColor: props.borderColor,
        },
      ]}
    >
      <TouchableOpacity>
        <Image style={styles.image} source={props.source} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 5,
    marginHorizontal: 35,
  },
  image: {
    alignSelf: "center",
  },
});
