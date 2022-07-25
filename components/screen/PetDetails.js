import React from "react";
import { View, Image, Text, StyleSheet, SafeAreaView } from "react-native";
import CustomButton from "../custom/CustomButton";

export default function List(props) {
  const data = props.data;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.images}></View>
        <Image
          style={styles.image}
          source={{
            uri: data.img,
          }}
        />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{`${data.name}, ${Math.round(
            data.age / 8760
          )} ano(s)`}</Text>
        </View>
        <View style={styles.description}>
          <View style={styles.descriptionText}>
            <Text selectable={true}>{data.description}</Text>
            <Text selectable={true}>{data.phone}</Text>
            <Text selectable={true}>{data.email}</Text>
          </View>
          <View style={styles.descriptionBtns}>
            <CustomButton
              borderWidth={1}
              borderColor={"#CB3BE6"}
              bgColor={"#FFE"}
              source={require("../../assets/images/email-fast-outline.png")}
            />
            <CustomButton
              borderWidth={1}
              borderColor={"#CB3BE6"}
              bgColor={"#FFE"}
              source={require("../../assets/images/account-plus-outline.png")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

// roxo #CB3BE6
// azul #3CF5E2
// amarelo #FFC31E

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 40,
    backgroundColor: "beige",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: "95%",
    height: "100%",
    alignSelf: "center",
    borderRadius: 15,
  },
  images: {
    top: 5,
    position: "absolute",
    borderWidth: 3,
    width: 40,
    borderColor: "beige",
    borderRadius: 10,
    zIndex: 1,
    alignSelf: "center",
  },
  innerContainer: {
    marginHorizontal: 12,
    paddingBottom: "45%",
  },
  title: {
    backgroundColor: "#FFE",
    width: 250,
    borderRadius: 10,
    alignSelf: "center",
    bottom: 20,
    borderWidth: 1,
    borderColor: "#CB3BE6",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
  },
  description: {
    backgroundColor: "#FFE",
    borderRadius: 10,
    maxHeight: 150,
    borderWidth: 1,
    borderColor: "#CB3BE6",
  },
  descriptionText: {
    alignItems: "center",
    padding: "5%",
  },
  descriptionBtns: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 50,
    top: 12,
  },
});
