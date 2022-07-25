import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import PetList from "../components/screen/PetList";

export default function Home() {
  const [animals, setAnimals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    //Fetch categories
    fetch("https://619e80d71ac52a0017ba43ea.mockapi.io/api/v1/categories")
      .then((response) => response.json())
      .then((json) => setCategories(json))
      .catch((error) => {
        console.error(error);
      });
    //Fetch animals
    fetch("https://619e80d71ac52a0017ba43ea.mockapi.io/api/v1/animals")
      .then((response) => response.json())
      .then((json) => {
        setAnimals(json);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (isLoaded) {
    return <PetList data={animals} />;
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator style={styles.activity} size={"large"} />
      </View>
    );
  }
  // <View style={styles.container}>
  //   <Text>Hello Home!</Text>
  //   <Text>The following animals are up for adoption:</Text>
  //   <View>
  //     <DropDownPicker
  //       schema={{
  //         value: "name",
  //         key: "id",
  //       }}
  //       key={Math.random()}
  //       open={open}
  //       items={items}
  //       setOpen={setOpen}
  //       setValue={setValue}
  //       setItems={setItems}
  //     />
  //   </View>
  // </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
