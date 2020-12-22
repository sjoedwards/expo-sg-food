import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  return (
    <View style={style.backgroundStyle}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => console.log("Submitted")}
      />
      <Text>{term}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "white",
    ...StyleSheet.absoluteFillObject,
  },
});

export default SearchScreen;
