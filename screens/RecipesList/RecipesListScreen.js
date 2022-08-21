import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { getRecipes, getCategoryName } from "../../data/MockDataAPI";
import colors from "../../constants/Colors";
export default function RecipesListScreen(props) {
  const { navigation, route } = props;

  const item = route?.params?.category;
  const recipesArray = getRecipes(item.id);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
      headerRight: () => <View />,
    });
  }, []);

  //Navigation Action
  const onPressRecipe = (item) => {
    navigation.navigate("Receta", { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableOpacity
      onPress={() => onPressRecipe(item)}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{backgroundColor:colors.primary, flex:1}}>
      <FlatList 
        vertical 
        showsVerticalScrollIndicator={false} 
        numColumns={2} data={recipesArray} 
        renderItem={renderRecipes} 
        keyExtractor={(item) => `${item.recipeId}`} />
    </View>
  );
}
