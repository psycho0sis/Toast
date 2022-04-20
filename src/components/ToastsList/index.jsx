import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ToastItem } from '@/components/ToastItem';
import { TOAST_POSITION } from '@/constants/toastPosition';
import ToastsContext from '@/context';
import { Portal } from '@/components/Portal';

import { Container } from './styles';

export const ToastsList = ({ position, margins }) => {
  const { toasts } = useContext(ToastsContext);

  return (
    <Portal>
      <Container
        position={TOAST_POSITION[position]}
        margins={margins}
      >
        {toasts.map((toast, i) =>
          <ToastItem key={i} toast={toast} index={i} />
        ).slice(0, 3)}
      </Container>
    </Portal>
  );
};

ToastsList.propTypes = {
  position: PropTypes.string,
  margins: PropTypes.string, 
};
