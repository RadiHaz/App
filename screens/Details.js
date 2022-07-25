import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from "react-native";
import PetDetails from "../components/screen/PetDetails";

export default function Details({ route }) {
  const [animal, setAnimal] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = route.params;

  useEffect(() => {
    fetch("https://619e80d71ac52a0017ba43ea.mockapi.io/api/v1/animals/" + id)
      .then((response) => response.json())
      .then((json) => {
        setAnimal(json);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  if (isLoaded) {
    return <PetDetails data={animal} id={id} />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator style={styles.activity} size={"large"} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  activity: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
