import React, { useEffect, useState, useMemo} from 'react';
import { ThemeProvider } from "styled-components";

import { Options } from '@/components/Options';
import { ToastsList } from '@/components/ToastsList';

import { ToastsProvider } from '@/context';
import Singleton from '@/singleton';
import { theme } from "@/theme";

import {
  Container,
  Title,
} from './styles';
import { Portal } from '../Portal';

const singleton = new Singleton();
  
export const App = () => {
  const [toasts, setToasts] = useState(() => singleton.findAllToasts());
  const value = useMemo(
    () => ({ toasts, setToasts }), 
    [toasts]
  );
  const [options, setOptions] = useState({
    type: "",
    title: "",
    position: "",
    color: "",
    description: "",  
    margins: 0
  })

  const createNewToast = (e) => {
    e.preventDefault();
    singleton.createToast(options);

    // setToasts(toasts => (
    //   {
    //     ...toasts,
    //     [options.type] : [...toasts[options.type], options]
    //   }
    // ))

    setToasts(toasts => (
      [...toasts, options]
    ))
  }

  // console.log("from app context", toasts)

  return (
    <ThemeProvider theme={theme}>
      <ToastsProvider value={value}>
        <Container>
          <Title>Toast Constructor</Title>
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
