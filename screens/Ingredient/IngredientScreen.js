import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, Image,} from "react-native";
import styles from "./styles";
import { getIngredientName, getAllIngredients } from "../../data/MockDataAPI";
import colors from '../../constants/Colors';

export default function IngredientsDetailsScreen(props) {
  const { navigation, route } = props;

  const item = route.params?.ingredients;
  const ingredientsArray = getAllIngredients(item);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
      headerTitleStyle: {
        fontSize: 16,
      },
    });
  }, []);

  const renderIngredient = ({ item }) => (
    <View>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item[0].photo_url }} />
        <Text style={styles.title}>{item[0].name}</Text>
        <Text style={{ color: "grey" }}>{item[1]}</Text>
      </View>
    </View>
  );

  return (
    <View style={{backgroundColor:colors.primary, flex:1}}>
      <FlatList 
        vertical 
        showsVerticalScrollIndicator={false} 
        numColumns={3} 
        data={ingredientsArray} 
        renderItem={renderIngredient} 
        keyExtractor={(item) => `${item.recipeId}`} 
      />
    </View>
  );
}