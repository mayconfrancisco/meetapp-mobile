import React from 'react';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function ButtonOpacity({ children, icon, iconSize, ...rest }) {
  return (
    <Container {...rest}>
      {icon ? (
        <>
          <Icon
            type="MaterialIcons"
            name={icon}
            style={{ fontSize: iconSize, color: '#fff' }}
          />
        </>
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

ButtonOpacity.propTypes = {
  children: PropTypes.element,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
};

ButtonOpacity.defaultProps = {
  children: null,
  icon: null,
  iconSize: 20,
};
