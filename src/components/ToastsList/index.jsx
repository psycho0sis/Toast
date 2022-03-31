import React, { memo, useContext, useEffect } from 'react';

import ToastItem from "@/components/ToastItem";

import ToastsContext from '@/context';
import Singleton from '@/singleton';

import { Container } from "./styles";



export const ToastsList = memo(() => {
  const { toasts, setToasts } = useContext(ToastsContext);
  const singleton = new Singleton();

  useEffect(() => {
    const toasts = singleton.findAllToasts();
    setToasts(toasts);
  }, [toasts])

  return (
    <Container>
      {toasts.map((toast, i) => (
        <ToastItem key={i} toast={toast} index={i}/>
      )).slice(0, 3)}
    </Container>
  );
});
