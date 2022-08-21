//React
import React from "react";
import { TouchableOpacity, Platform,Text } from "react-native";
import { Ionicons } from '@expo/vector-icons'
//Navigators
import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import HomeScreen from "../screens/HomeScreen";
import DrawerContainer from "../screens/DrawerContainer";
import LoginScreen from "../screens/LoginScreen";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";   
import RecipesListScreen from "../screens/RecipesList/RecipesListScreen";
import RecipeScreen from "../screens/Recipe/RecipeScreen";
import IngredientScreen from "../screens/Ingredient/IngredientScreen";
import SearchScreen from "../screens/Search/SearchScreen";
//Camera-Maps-Redux-db
import MapScreen from "../screens/MyPlaces/MapScreen";
import NewPlaceScreen from "../screens/MyPlaces/NewPlaceScreen";
import PlaceListScreen from "../screens/MyPlaces/PlaceListScreen";
import colors from "../constants/Colors";

//Stack Navigator
const Stack = createStackNavigator ();
function MainNavigator () {
    return (
        <Stack.Navigator 
            initialRoute="Login"
            screenOptions={{
                headerStyle:{
                    backgroundColor:colors.tertiary,
                },
                headerTintColor: colors.white,
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                title="Home"
            />
            <Stack.Screen 
                name="Buscar" 
                component={SearchScreen} 
            />
            <Stack.Screen 
                name="Login" 
                component={LoginScreen} 
                options={{headerShown: false}} 
            />
            <Stack.Screen 
                name="Categorias" 
                component={CategoriesScreen} 
                title="Categorías"
            />
            <Stack.Screen 
                name="Lista de Recetas" 
                component={RecipesListScreen} 
                title="Recetas"
            />
            <Stack.Screen 
                name="Receta" 
                component={RecipeScreen} 
            />
            <Stack.Screen 
                name="Ingredientes" 
                component={IngredientScreen} 
            />
            <Stack.Screen 
                name="Mis Lugares" 
                component={PlaceListScreen} 
                options={({ navigation }) => ({
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("Nueva Dirección")}>
                            <Ionicons
                                name="md-add"
                                color={Platform.OS === 'android' ? 'black' : colors.dark_Blue}
                                size={24}
                            />
                        </TouchableOpacity>
                    )
                })}
            />
            <Stack.Screen 
                name="Mapa" 
                component={MapScreen} 
            />
            <Stack.Screen 
                name="Nueva Dirección" 
                component={NewPlaceScreen} 
            />
        </Stack.Navigator>
    )
}

//Drawer Navigator
const Drawer = createDrawerNavigator ();
function DrawerStack () {
    return (
        <Drawer.Navigator
            drawerPosition="left"
            initialRouteName="Main"
            drawerStyle={{ width: 250}}
            screenOptions={{headerShown:false}}
            drawerContent={({navigation}) => <DrawerContainer navigation={navigation}/> }
        >
            <Drawer.Screen name="Main"  component={MainNavigator} />
        </Drawer.Navigator>
    )
}

//Combination of both
export default function AppNavigator () {
    return (
        <NavigationContainer>
            <DrawerStack/>
        </NavigationContainer>
    )
}
