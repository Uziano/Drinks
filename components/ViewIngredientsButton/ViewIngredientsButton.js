import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default function ViewIngredientsButton (props) {
    return (
      <TouchableOpacity 
        onPress={props.onPress}
      >
        <View style={styles.container}>
          <Text style={styles.text}>Ver Ingredientes</Text>
        </View>
      </TouchableOpacity>
    );
}

ViewIngredientsButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};
