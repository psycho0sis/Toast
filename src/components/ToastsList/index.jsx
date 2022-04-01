import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ToastItem } from "@/components/ToastItem";

import ToastsContext from '@/context';
import { TOAST_POSITION } from '@/constants/toastPosition';

import { Container } from "./styles";

export const ToastsList = ({ position }) => {
  const { toasts  } = useContext(ToastsContext);

  return (
    <Container position={TOAST_POSITION[position]}>
      {toasts.map((toast, i) => (
        <ToastItem key={i} {...toast} index={i}/>
      )).slice(0, 3)}
    </Container>
  );
};

ToastsList.propTypes = {
  position: PropTypes.string
}