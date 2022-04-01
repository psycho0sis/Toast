import React, { useState, useMemo, useCallback } from 'react';
import { ThemeProvider } from "styled-components";

import { Portal } from '@/components/Portal';
import { Options } from '@/components/Options';
import { ToastsList } from '@/components/ToastsList';

import { ToastsProvider } from '@/context';
import Singleton from '@/singleton';
import { useStateCallback } from '@/hooks/useStateCallback';
import { theme } from "@/theme";

import {
  Container,
  Title,
} from './styles';


const singleton = new Singleton();
  
export const App = () => {
  const [toasts, setToasts] = useStateCallback(() => singleton.findAllToasts());
  const value = useMemo(
    () => ({ toasts, setToasts }), 
    [toasts]
  );

  const [options, setOptions] = useState({
    type: "info",
    title: "Example",
    position: "top-left",
    color: theme.colors.defaultToastBg,
    description: "Example description",  
    margins: "10px",
    duration: "3000",
    autoHidden: false
  })

  const createNewToast = useCallback((e) => {
    e.preventDefault();
    if (toasts.length < 3) {
      setToasts(prevToasts => ([...prevToasts, options]), () => singleton.createToast(options))
    }
  }, [options]);

  return (
    <ThemeProvider theme={theme}>
      <ToastsProvider value={value}>
        <Container>
          <Title>
            Toast Constructor
          </Title>
          <Options
            options={options}
            setOptions={setOptions}
            createNewToast={createNewToast}
          />
          <Portal>
            <ToastsList />
          </Portal>
        </Container>
      </ToastsProvider>
    </ThemeProvider>
  );
};
