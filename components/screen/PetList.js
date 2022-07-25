import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native";

export default function List(props) {
  const navigation = useNavigation();
  const data = props.data;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={(itemData) => {
          return (
            <View style={styles.container} key={itemData.item.id}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Details", { id: itemData.item.id });
                }}
              >
                <View style={styles.itemContainer}>
                  <View style={styles.image}>
                    <Image
                      style={[styles.image, { height: 75, width: 75 }]}
                      source={{ uri: itemData.item.img }}
                    />
                  </View>
                  <View style={styles.text}>
                    <Text style={styles.textContent}>{itemData.item.name}</Text>
                    <Text style={styles.textContent}>
                      {Math.round(itemData.item.age / 8760)} ano(s)
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d884e8",
  },
  itemContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 15,
    overflow: "hidden",
    flexDirection: "row",
    margin: 2,
    backgroundColor: "beige",
  },
  image: {
    flex: 2,
    borderRadius: 10,
  },
  text: {
    flex: 1,
    right: 195,
    top: 15,
  },
  textContent: {
    fontSize: 18,
  },
});
