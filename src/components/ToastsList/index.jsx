import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { ToastItem } from "@/components/ToastItem";

import {Container} from "./styles"

export const ToastsList = memo(({ toasts }) => {
  return (
    <Container>
      {toasts?.map((toast, i) => (
          <ToastItem key={ i } toast={ toast }/>
        ))}
    </Container>
  );
});

ToastsList.propTypes = {
}
