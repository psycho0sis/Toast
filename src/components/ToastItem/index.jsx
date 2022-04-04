import '@/index.css';

import React, { memo, useContext, useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ProgressBar } from '@/components/ProgressBar';

import { ICONS } from '@/constants/icons';
import ToastsContext from '@/context';
import Singleton from '@/utils/singleton';
import { addClass } from '@/utils/addClass';
import { fistLetterCapitalize } from '@/utils/fistLetterCapitalize';
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

export const ToastItem = memo(({ color, title, type, description, duration, autoHidden, animation, index }) => {
    const [barValue, setBarValue] = useState(0);
    const { toasts, setToasts } = useContext(ToastsContext);
    const ref = useRef(null);
    const customTitle = fistLetterCapitalize(title);
    const { progressBar, progressBarWidth } = theme.colors;

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
              addClass(ref.current, animation);
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

    return (
      <Container 
        animation={animation} 
        color={color} 
        index={index} 
        type={type} 
        ref={ref}
      >
        <TitleContainer>
          <Title>
            {customTitle}
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
  color: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string.isRequired,
  description: PropTypes.string,
  autoHidden: PropTypes.bool,
  duration: PropTypes.string,
  animation: PropTypes.string,
  index: PropTypes.number,
  deleteToast: PropTypes.func
};

ToastItem.displayName = 'ToastItem';
