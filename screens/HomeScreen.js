import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity,ImageBackground } from 'react-native';
import React from 'react';
import { auth } from '../firebase';
import MenuImage from '../components/MenuImage/MenuImage';
import colors from '../constants/Colors';

export default function HomeScreen ({navigation}) {
  navigation.setOptions({
    headerLeft: () => (
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    ),
  });
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.jpeg")} 
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.buttonContainer}>
          
          <TouchableOpacity
            onPress={()=>{navigation.navigate("Categorias")}}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Categorias</Text>
         </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={()=>{navigation.navigate("Mis Lugares")}}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Mis Lugares</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer2}>
          <TouchableOpacity
            onPress={()=>{navigation.navigate("Login")}}
            style={styles.button2}
          >
            <Text style={styles.buttonText2}>Login</Text>
          </TouchableOpacity>
        </View>
    
        <StatusBar style="light" backgroundColor={colors.secondary}/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:colors.primary
  },

  buttonContainer:{
    justifyContent: "center",
    alignItems: "center",
    flex:1.5,
    width: '80%',
    height:'20%',
  },

  buttonContainer2:{
    justifyContent: "center",
    alignItems: "center",
    flex:1,
    width: '60%',
    height:'20%',
  },

  button: {
    backgroundColor:colors.tertiary,
    padding: 15,
    borderRadius: 30,
    marginTop: 40,
    borderColor:'black',
    width: '100%',
    height:'30%',
    justifyContent: 'center',
    alignItems: "center",
    position:"absolute",
  },
  button2: {
    backgroundColor:colors.secondary,
    padding: 15,
    borderRadius: 10,
    marginTop: 40,
    borderColor:'black',
    width: '70%',
    height:'40%',
    justifyContent: 'center',
    alignItems: "center",
  },

  buttonText: {
    color:colors.white,
    fontWeight: '700',
    fontSize: 24,
  },
  buttonText2: {
    color:colors.white,
    fontWeight: '700',
    fontSize: 20,
  },
  image: {
    flex: 1,
    justifyContent: "space-around",
    width:"100%",
    alignItems: "center",
  },
});
