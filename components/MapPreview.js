import React from "react";
import {View, Image, StyleSheet} from "react-native";
import {MAP} from '../constants/Map';


const MapPreview = (props) => {
    const mapPreviewUrl = props.location
      ? `https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
      &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
      &markers=color:red%7Clabel:C%7C40.718217,-73.998284
      &key=${MAP.API_KEY}`
      : '';
  
    return (
      <View style={{ ...styles.mapPreview, ...props.style }}>
        {props.location
          ? <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} />
          : (props.children)}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    mapPreview: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    mapImage: {
      width: '100%',
      height: '100%',
    }
  });
  
export default MapPreview;
