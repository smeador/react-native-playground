import React from 'react';
import { View , Text } from 'react-native';
import styles from './styles';

const Cell = () => (
    <View>
        <Text>Hello</Text>
    </View>
)

Cell.propTypes = {
  label: React.PropTypes.string,
};

Cell.defaultProps = {
  size: 'large',
};

export default Cell;
