import React, { useContext } from 'react';

import { ToastItem } from "@/components/ToastItem";

import ToastsContext from '@/context';

import { Container } from "./styles";

export const ToastsList = () => {
  const { toasts  } = useContext(ToastsContext);

  return (
    <Container >
      {toasts.map((toast, i) => (
        <ToastItem key={i} {...toast} index={i}/>
      ))}
    </Container>
  );
};
