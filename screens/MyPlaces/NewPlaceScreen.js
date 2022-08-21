import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { View, Text, Button, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../../constants/Colors';
import ImageSelector from '../../components/ImageSelector';
import LocationSelector from '../../components/LocationSelector';
import { addPlace } from '../../store/place.actions';

const NewPlaceScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [location, setLocation] = useState({});

    const handleTitleChange = text => setTitle(text);

    const handleSave = () => {
        dispatch(addPlace(title, image, location));
        navigation.navigate('Mis Lugares');
    }

    const handlePickImage = (image) => {
        setImage(image);
    }

    const handlePickLocation = (location) => {
        setLocation(location);
    }

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.label}>Hoy pase por...</Text>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={handleTitleChange}
                    placeholder='Nombre del lugar que visitaste'
                />

                <ImageSelector onImage={handlePickImage} />
                <LocationSelector onLocation={handlePickLocation} />
                <Button
                    title="Guardar"
                    color={colors.tertiary}
                    onPress={handleSave}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    },
    scrollContainer:{
        backgroundColor:colors.primary,
        marginHorizontal:0
    },
    label: {
        fontSize: 18,
        marginBottom: 16,
        color:colors.white
    },
    input: {
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4,
        backgroundColor:colors.secondary,
        borderRadius:20,
        fontWeight:"700"
    },
})

export default NewPlaceScreen