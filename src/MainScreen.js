import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Foundation from "@expo/vector-icons/Foundation";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const COLORS = {
  white: "#efeff1",
  smokeWhite: "#a1a2a4",
  grey: "#4f5052",
  main: "#212227",
  blue: "#8cb4fc",
};
const MainScreen = () => {
  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar style="light" />
      <View style={styles.upperView}>
        <MaterialIcons name="music-note" size={200} color="#5f6269" />
      </View>
      <View style={styles.lowerView}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{ fontSize: 22, color: COLORS.white, fontWeight: "bold" }}
            numberOfLines={1}
          >
            lker, Sabrina Carpenter & Farruko - On My Way
          </Text>
          <Text style={{ fontSize: 14, color: COLORS.smokeWhite }}>
            Unknown Artist
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 10,
          }}
        >
          <MaterialIcons name="repeat" size={30} color={COLORS.grey} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MaterialIcons
              name="skip-previous"
              size={30}
              color={COLORS.smokeWhite}
            />
            <View
              style={{
                borderRadius: 50,
                height: 60,
                width: 60,
                backgroundColor: COLORS.blue,
                marginLeft: 15,
                marginRight: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Foundation name="pause" size={30} color={COLORS.white} />
            </View>
            <MaterialIcons
              name="skip-next"
              size={30}
              color={COLORS.smokeWhite}
            />
          </View>
          <MaterialIcons name="shuffle" size={30} color={COLORS.grey} />
        </View>
        <View
          style={{
            borderBottomColor: "#333d47",
            borderBottomWidth: 2,
            marginEnd: 20,
            marginStart: 20,
          }}
        ></View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              justifyContent: "center",
              alignItems: "center",
              color: COLORS.smokeWhite,
            }}
          >
            MP3 | 192 KBPS | 48.0 KHZ
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 40,
            marginRight: 40,
          }}
        >
          <MaterialIcons name="comment" size={25} color={COLORS.smokeWhite} />
          <MaterialIcons
            name="favorite-border"
            size={25}
            color={COLORS.smokeWhite}
          />
          <FontAwesome name="moon-o" size={25} color={COLORS.smokeWhite} />

          <MaterialIcons
            name="playlist-play"
            size={25}
            color={COLORS.smokeWhite}
          />
          <SimpleLineIcons name="options" size={25} color={COLORS.smokeWhite} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.main,
    alignItems: "center",
    justifyContent: "center",
  },
  upperView: {
    flex: 1,
    margin: 40,
    width: windowWidth - 40,
    borderRadius: 20,
    backgroundColor: "#121315",
    alignItems: "center",
    justifyContent: "center",
  },
  lowerView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: windowWidth - 20,
  },
});
