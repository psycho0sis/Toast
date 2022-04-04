import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ProgressBar } from '../../components/ProgressBar';

import { ICONS } from '../../constants/icons';
import { theme } from '../../theme';

import {
  Container,
  TitleContainer,
  Title,
  Description,
  Content,
  Button,
  Image
} from './toastStyles.js';

import deleteImg from '../../assets/delete.svg';

export const Toast = ({
  toast: { key, type, title, description, animation, color, textColor, duration, autoHidden },
  handleDeleteItem
}) => {
  const [barValue, setBarValue] = useState(0);
  const { progressBar, progressBarWidth } = theme.colors;

  const onhandleDeleteItem = (key) => () => handleDeleteItem(key);

  useEffect(() => {
    if (autoHidden) {
      const interval = setInterval(() => {
        setBarValue((oldValue) => {
          const newValue = oldValue + 1;
          if (newValue === 100) {
            clearInterval(interval);
          }
          return newValue;
        });
      }, +duration / 100);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <Container
      animation={animation}
      color={color}
      type={type}>
      <TitleContainer>
        <Title textColor={textColor} >
          {title}
        </Title>
        <Button onClick={onhandleDeleteItem(key)}>
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
          src={ICONS[type] || ICONS['error']}
          width={40}
          height={40}
        />
        <Description textColor={textColor}>
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
};

Toast.propTypes = {
  toast: PropTypes.shape({
    key: PropTypes.number,
    type: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    animation: PropTypes.string,
    duration: PropTypes.string,
    color: PropTypes.string,
    textColor: PropTypes.string,
    autoHidden: PropTypes.bool
  }),
  handleDeleteItem: PropTypes.func
};