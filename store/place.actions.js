import * as FileSystem from 'expo-file-system';
import { MAP } from '../constants/Map';

import { fetchAddress, insertAddress } from '../db';

export const ADD_PLACE = 'ADD_PLACE';
export const LOAD_PLACES = 'LOAD_PLACES';

export const addPlace = (title, image, location) => {
    return async dispatch => {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${MAP.API_KEY}`);
        const resData = await response.json();

        const address = resData.results[0].formatted_address;
        console.log(address);

        const fileName = image.split('/').pop();
        const Path = FileSystem.documentDirectory + fileName;

        try {
            FileSystem.moveAsync({
                from: image,
                to: Path,
            });

            const result = await insertAddress(
                title,
                Path,
                address,
                location.lat,
                location.lng
            );
            console.log(result);

            dispatch({
                type: ADD_PLACE,
                payload: {
                    id: result.insertId,
                    title,
                    image: Path,
                    lat: location.lat,
                    lng: location.lng,
                    address,
                },
            });
        } catch(err) {
            console.log(err.message);
            throw err;
        }
    };
}

export const loadAddress = () => {
    return async dispatch => {
        try {
            const result = await fetchAddress()
            console.log(result)
            dispatch({
                type: LOAD_PLACES,
                places: result.rows._array,
            })
        } catch(err) { 
            throw err;
        }
    }
}