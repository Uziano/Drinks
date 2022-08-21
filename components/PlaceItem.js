import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import colors from '../constants/Colors';

const PlaceItem = ({ title, image, address, onSelect }) => {
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={styles.placeItem}
    >
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  placeItem: {
    borderRadius: 35,
    borderBottomWidth: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:colors.secondary
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.tertiary,
  },
  info: {
    marginLeft: 25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    color: colors.white,
    fontSize: 20,
    marginBottom: 6,
  },
  address: {
    color: colors.white,
    fontSize: 16,
  }
});

export default PlaceItem;