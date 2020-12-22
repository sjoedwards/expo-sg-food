import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get("/search");
  };
  return (
    <View style={style.backgroundStyle}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => console.log("Submitted")}
      />
      <Text>We have found {results.length} results</Text>
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
