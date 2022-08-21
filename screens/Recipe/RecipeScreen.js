import React, {useRef, useState } from "react";
import { ScrollView, Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import styles from "./styles";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { getIngredientName, getCategoryName, getCategoryById } from "../../data/MockDataAPI";
import ViewIngredientsButton from "../../components/ViewIngredientsButton/ViewIngredientsButton";
import colors from "../../constants/Colors";

const { width: viewportWidth } = Dimensions.get("window");

export default function RecipeScreen(props) {
  const { navigation, route } = props;

  const item = route.params?.item;
  const category = getCategoryById(item.categoryId);
  const title = getCategoryName(category.id);

  const [activeSlide, setActiveSlide] = useState(0);

  const slider1Ref = useRef();

  const renderImage = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    </TouchableOpacity>
  );
  
  //Navigation Action
  const onPressIngredient = (item) => {
    var name = getIngredientName(item);
    let ingredient = item;
    navigation.navigate("Ingredientes", { ingredient, name });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.carouselContainer}>
        <View style={styles.carousel}>

          {/*Check if does work or not*/}
          <Carousel
            ref={slider1Ref}
            data={item.photosArray}
            renderItem={renderImage}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            firstItem={0}
            loop={false}
            autoplay={false}
            autoplayDelay={500}
            autoplayInterval={3000}
            onSnapToItem={(index) => setActiveSlide(0)}
          />

          <Pagination
            dotsLength={item.photosArray.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.paginationContainer}
            dotColor={colors.white}
            dotStyle={styles.paginationDot}
            inactiveDotColor="white"
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            carouselRef={slider1Ref.current}
            tappableDots={!!slider1Ref.current}
          />
          
        </View>
      </View>
      <View style={styles.infoRecipeContainer}>
        
        {/*navigate to RecipeList Screen*/}
        <Text style={styles.infoRecipeName}>{item.title}</Text>
        
        {/*En desuso ({getCategoryName(item.categoryId)})*/}
        
        {/*Time based on data*/}
        <View style={styles.infoContainer}>
          <Text style={styles.infoRecipe}>( Tiempo estimado: </Text>
          <Text style={styles.infoRecipe}>{item.time} Minutos )</Text>
        </View>

        {/*navigate to Ingredient Screen*/}
        <View style={styles.infoContainer}>
          <ViewIngredientsButton
            onPress={() => {
              let ingredients = item.ingredients;
              let title = "Ingredientes para " + item.title;
              navigation.navigate("Ingredientes", { ingredients, title });
            }}
          />
        </View>

        {/*Recipe based on data*/}
        <View style={styles.infoContainer}>
          <Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
        </View>

      </View>
    </ScrollView>
  );
}
