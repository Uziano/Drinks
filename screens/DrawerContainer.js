import React from "react";
import { View, StyleSheet,Text,ImageBackground } from "react-native";
import PropTypes from "prop-types";
import MenuButton from "../components/MenuButton/MenuButton";
import { auth } from '../firebase';
import colors from "../constants/Colors";
//Drawer Buttons for Nav.
export default function DrawerContainer ({navigation}) {
    
    const handleSignOut = () => {
        auth
          .signOut()
          .then(() => {
            navigation.navigate("Login")
          })
          .catch(error => alert(error.message))
    }
    
    return (
        <View style={styles.content}>
            <ImageBackground
                source={require("../assets/icon2.png")} 
                resizeMode="cover"
                style={styles.image}
            >
            <View style={styles.container}>
                <MenuButton
                    title="Home"
                    source={require("../assets/icons/home.png")}
                    onPress={() => {
                        navigation.navigate("Home");
                        navigation.closeDrawer();
                    }}
                />
                <MenuButton
                    title="Categorias"
                    source={require("../assets/icons/category.png")}
                    onPress={() => {
                        navigation.navigate("Categorias");
                        navigation.closeDrawer();
                    }}
                />
                <MenuButton
                    title="Buscar"
                    source={require("../assets/icons/search.png")}
                    onPress={() => {
                        navigation.navigate("Buscar");
                        navigation.closeDrawer();
                    }}
                />
                <MenuButton
                    title="Cerrar Sesión"
                    source={require("../assets/icons/backArrow.png")}
                    onPress={() => {
                        handleSignOut();
                        navigation.closeDrawer();
                    }}
                />
                <View>
                    <Text style={styles.buttonText}>Hola! {auth.currentUser?.email}</Text>
                </View>
            </View>
            </ImageBackground>
        </View>
    )
}

DrawerContainer.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }),
};
  
const styles = StyleSheet.create({
    image: {
        flex: 1,
        width:"100%",
        height:"100%",
        alignItems: "center",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:colors.tertiary
    },
    container: {
      flex: 1,
      alignItems: 'flex-start',
      paddingHorizontal: 20
    },
    buttonText: {
        fontSize: 16,
        marginLeft: 10,
        marginTop: 2,
        color:colors.white
    }
  });



