import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

const MapScreen = () => {
    const navigation = useNavigation();
    const [selectedLocation, setSelectedLocation] = useState();

    const initialRegion = {
        latitude: 37.4219023,
        longitude: -122.0839984,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    const handleSelectLocation = event => {
        setSelectedLocation({
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude,
        })
    }

    let markerCoordinates;

    if (selectedLocation) {
        markerCoordinates = {
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
        };
    }

    //Navigation Action
    const handleSaveLocation = () => {
        if (selectedLocation) {
            navigation.navigate('Nueva Dirección', { mapLocation: selectedLocation });
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={handleSaveLocation}>
                    <Ionicons 
                        name="md-save-outline" 
                        color="black" 
                        size={22} 
                    />
                </TouchableOpacity>
            )
        })
    }, [navigation, handleSaveLocation]);

    return (
        <MapView
            style={styles.container}
            initialRegion={initialRegion}
            onPress={handleSelectLocation}
        >
            {markerCoordinates && (
                <Marker 
                    title="Ubicación seleccionada" 
                    coordinate={markerCoordinates} 
                />
            )}
        </MapView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default MapScreen
