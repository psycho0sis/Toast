import React, { memo, useContext, useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ProgressBar } from '@/components/ProgressBar';

import { ICONS } from '@/constants/icons';
import ToastsContext from '@/context';
import Singleton from '@/utils/singleton';
import { theme } from '@/theme';

import {
  Container,
  Content,
  Image,
  Title,
  Description,
  TitleContainer,
  Button
} from './styles';

import deleteImg from '@/assets/delete.svg';

const singleton = new Singleton();

export const ToastItem = memo(({ toast, index }) => {
  const { color, title, type, description, duration, autoHidden, animation } = toast;
  const { progressBar, progressBarWidth } = theme.colors;
  const [barValue, setBarValue] = useState(0);
  const { toasts, setToasts } = useContext(ToastsContext);
  const ref = useRef(null);

  const onDeleteToast = (index) => () => {
    if (!autoHidden) {
      singleton.deleteToast(index);
      setToasts(singleton.findAllToasts());
    }
  };

  useEffect(() => {
    if (autoHidden) {
      const interval = setInterval(() => {
        setBarValue((oldValue) => {
          const newValue = oldValue + 1;
          if (newValue === 100) {
            clearInterval(interval);
            singleton.deleteToast(index);
          }
          return newValue;
        });
      }, +duration / 100);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    if (autoHidden) {
      setTimeout(() => {
        singleton.deleteAllToasts();
        setToasts(singleton.findAllToasts());
      }, +duration + 1000);
    }
  }, [toasts]);

  const dragEndHandler = (id) => () => {
    onDeleteToast(id)();
  }
  
  return (
    <Container 
      animation={animation} 
      color={color} 
      index={index} 
      type={type} 
      ref={ref}
      draggable={true}
      onDragEnd={dragEndHandler(index)}
    >
      <TitleContainer>
        <Title>
          {title}
        </Title>
        <Button onClick={onDeleteToast(index)}>
          {!autoHidden
            &&
            <Image 
              src={deleteImg} 
              width={20} 
              height={20} 
            />}
        </Button>
      </TitleContainer>
      <Content>
        <Image 
          src={ICONS[type]} 
          width={40} 
          height={40}
        />
        <Description>
          {description}
        </Description>
      </Content>
      {autoHidden && (
        <ProgressBar 
          color={progressBar} 
          width={progressBarWidth} 
          value={barValue} 
          max={100}
        />
      )}
    </Container>
    );
  }
);

ToastItem.propTypes = {
  toast: PropTypes.shape({
    type: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    animation: PropTypes.string,
    duration: PropTypes.string,
    color: PropTypes.string,
    textColor: PropTypes.string,
    autoHidden: PropTypes.bool
  }),
  index: PropTypes.number,
  deleteToast: PropTypes.func
};

ToastItem.displayName = 'ToastItem';
