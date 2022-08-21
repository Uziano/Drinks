import { StyleSheet } from "react-native";
import { RecipeCard } from "../AppStyles";
import colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  btnIcon: {
    height: 14,
    width: 14,
  },
  searchContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: colors.white, 
    borderRadius: 20, 
    width: 250,
    justifyContent: "space-around"
  },
  searchIcon: { 
    width: 20, 
    height: 20, 
    tintColor: 'grey' 
  },
  searchInput: {
    backgroundColor: colors.white, 
    color: "black",
    width: 180,
    height: 40,
  }
});

export default styles;