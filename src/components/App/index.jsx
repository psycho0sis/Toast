import React, { useEffect, useState, memo} from 'react';
import { ThemeProvider } from "styled-components";

import { Options } from '@/components/Options';
import { ToastsList } from '@/components/ToastsList';

import Singleton from '@/singleton';
import { theme } from "@/theme";

import {
  Container,
  Title,
} from './styles';
import { Portal } from '../Portal';

const singleton = new Singleton();
  
export const App = () => {
  const [toasts, setToasts] = useState([]);
  const [options, setOptions] = useState({
    color: "",
    position: "",
    title: "",
    description: "",
    type: "",
    margins: 0
  })

  useEffect(() => {
    const toasts = singleton.findAllToasts();
    setToasts(toasts)
  }, [])

  const createNewToast = (e) => {
    e.preventDefault();
    singleton.createToast(options);
    setToasts(toasts => [...toasts, options])
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>Toast Constructor</Title>
        <Options options={options} setOptions={setOptions} createNewToast={createNewToast}/>
        <Portal>
          <ToastsList toasts={toasts} />
        </Portal>
      </Container>
    </ThemeProvider>
    
  );
};
