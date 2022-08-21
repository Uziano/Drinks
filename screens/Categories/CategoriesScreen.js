import React from "react";
import { FlatList, Text, View, Image,TouchableOpacity } from "react-native";
import styles from "./styles";
import { categories } from "../../data/dataArrays";
import { getNumberOfRecipes } from "../../data/MockDataAPI";
import colors from "../../constants/Colors";

export default function CategoriesScreen(props) {
  const { navigation } = props;

  //Navigation Action
  const onPressCategory = (item) => {
    const title = item.name;
    const category = item;
    navigation.navigate("Lista de Recetas", { category, title });
  };

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      onPress={() => onPressCategory(item)}
    >
      <View style={styles.categoriesItemContainer}>
        <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
        <Text style={styles.categoriesName}>{item.name}</Text>
        <Text style={styles.categoriesInfo}>{getNumberOfRecipes(item.id)} Recetas </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{backgroundColor:colors.primary}}>
      <FlatList 
        data={categories} 
        renderItem={renderCategory} 
        keyExtractor={(item) => `${item.id}`} 
      />
    </View>
  );
}
