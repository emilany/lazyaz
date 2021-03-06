import PropTypes from 'prop-types';
import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

import styles from './styles';

const ImageButton = ({ source, text, onPress }) => {
  const textStyles = [styles.text, styles.lightText, styles.buttonText];
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.buttonContainer}
    >
      {text && (
        <Text style={textStyles}>
          {text.toUpperCase()}
        </Text>
      )}
      <Image
        source={source}
        style={styles.logo}
      />
    </TouchableOpacity>
  );
};

ImageButton.propTypes = {
  source: PropTypes.number,
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default ImageButton;
