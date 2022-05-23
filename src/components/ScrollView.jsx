import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { FontAwesome, EvilIcons  } from '@expo/vector-icons';

const ScrollViewComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <FontAwesome name="search" size={20} color="black" style={{marginHorizontal: 10}} />
        <Text style={{fontSize: 20, color: "grey"}}>Search here</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.details}>
          <Image source={require("../../assets/1-cat.jpg")} style={styles.img} />
          <View elevation={5} style={styles.description}>
            <Text style={styles.name}>Pastel</Text>
            <Text style={styles.aniDetails}>Cat</Text>
            <Text style={styles.aniDetails}>2 years old</Text>
            <View style={{flexDirection: "row"}}>
              <EvilIcons name="location" size={24} color="grey"/> 
              <Text style={styles.aniDetails}>30th Oplen Link</Text>
            </View>
          </View>
        </View>

        <View style={styles.details}>
          <Image source={require("../../assets/1.dog.jpg")} style={styles.img} />
          <View style={styles.description}>
            <Text style={styles.name}>Raka</Text>
            <Text style={styles.aniDetails}>Dog</Text>
            <Text style={styles.aniDetails}>6 years old</Text>
            <View style={{flexDirection: "row"}}>
              <EvilIcons name="location" size={24} color="grey"/> 
              <Text style={styles.aniDetails}>30th Oplen Link</Text>
            </View>
          </View>
        </View>

        <View style={styles.details}>
          <Image source={require("../../assets/2.dog.jpg")} style={styles.img} />
          <View style={styles.description}>
            <Text style={styles.name}>Jhony</Text>
            <Text style={styles.aniDetails}>Dog</Text>
            <Text style={styles.aniDetails}>8 years old</Text>
            <View style={{flexDirection: "row"}}>
              <EvilIcons name="location" size={24} color="grey"/> 
              <Text style={styles.aniDetails}>30th Oplen Link</Text>
            </View>
          </View>
        </View>

        <View style={styles.details}>
          <Image source={require("../../assets/3.dog.jpg")} style={styles.img} />
          <View style={styles.description}>
            <Text style={styles.name}>Hope</Text>
            <Text style={styles.aniDetails}>Dog</Text>
            <Text style={styles.aniDetails}>4 years old</Text>
            <View style={{flexDirection: "row"}}>
              <EvilIcons name="location" size={24} color="grey"/> 
              <Text style={styles.aniDetails}>30th Oplen Link</Text>
            </View>
          </View>
        </View>

        <View style={styles.details}>
          <Image source={require("../../assets/4.tigers.jpg")} style={styles.img} />
          <View style={styles.description}>
            <Text style={styles.name}>Dracula</Text>
            <Text style={styles.aniDetails}>Tiger</Text>
            <Text style={styles.aniDetails}>13 years old</Text>
            <View style={{flexDirection: "row"}}>
              <EvilIcons name="location" size={24} color="grey"/> 
              <Text style={styles.aniDetails}>30th Oplen Link</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    height: 40,
    width: "100%",
    borderRadius: 10,
    borderColor: "grey",
    padding: 5,
    backgroundColor: "white"
  },

  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10
  },

  img: {
    flex: 4,
    resizeMode: "cover",
    height: 200,
    width: 50,
    borderRadius: 15,
  },

  description: {
    flex: 4,
    justifyContent: "space-evenly",
    padding: 10,
    borderWidth: 1,
    backgroundColor: "white",
    height: 140,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 5,
      width: 1
    }
  },

  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "blue"
  },

  aniDetails: {
    fontSize: 20,
    color: "grey",
  }
});

export default ScrollViewComponent;