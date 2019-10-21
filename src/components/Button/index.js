import React from 'react';

import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { MyRectButton, TextButton } from './styles';

export default function Button({ children, loading, ...rest }) {
  return (
    <MyRectButton {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <TextButton>{children}</TextButton>
      )}
    </MyRectButton>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
