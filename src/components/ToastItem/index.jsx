import React, {memo} from 'react';
import PropTypes from 'prop-types';

import { TOAST_POSITION } from '@/constants/toastPosition';

import { Container } from './styles';

export const ToastItem = memo(({ toast }) => {
  const { color, type, position, title } = toast;

  return (
    <Container type={type} position={TOAST_POSITION[position]}>
      <img/>
      <p>{title}</p>
    </Container>
  );
});

ToastItem.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string,
  position: PropTypes.string,
  title: PropTypes.string,
};
