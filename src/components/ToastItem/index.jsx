import React, { memo, useContext, useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ProgressBar } from '@/components/ProgressBar';

import { TOAST_POSITION } from '@/constants/toastPosition';
import { ICONS } from '@/constants/icons';

import ToastsContext from '@/context';
import Singleton from '@/singleton';
import { addClass } from '@/utils/addClass';
import { fistLetterCapitalize } from '@/utils/fistLetterCapitalize';
import { theme } from "@/theme";

import {
  Container,
  Content,
  Image,
  Title,
  Description,
  TitleContainer,
  Button
} from './styles';

import "@/index.css";

import deleteImg from "@/assets/delete.svg";


export const ToastItem = memo(({ color, title, type, position, description, margins, duration, autoHidden, index }) => {
  const [barValue, setBarValue] = useState(0);
  const { setToasts } = useContext(ToastsContext);
  const ref = useRef(null);
  const singleton = new Singleton();
  const customTitle = fistLetterCapitalize(title);

  const deleteToast = (index) => () => {
    if (!autoHidden) {
      addClass(ref.current, position);

      setTimeout(() => {
        singleton.deleteToast(index);
        setToasts(singleton.findAllToasts());
      }, 1000)
    }
  }

  useEffect(() => {
    if (autoHidden) {
      setTimeout(() => {
        addClass(ref.current, position);
      }, +duration)

      setTimeout(() => {
        singleton.deleteAllToasts();
        setToasts(singleton.findAllToasts());
      }, +duration)
    }
  }, [autoHidden])

  useEffect(() => {
    const interval = setInterval(() => {
      setBarValue(oldValue => {
        const newValue = oldValue + 1;
        if (newValue === 100) {
          clearInterval(interval);
        }

        return newValue;
      });
    }, (+duration / 100));

    return () => clearInterval(interval);
  }, []);

  return (
    <Container
      type={type}
      color={color}
      position={TOAST_POSITION[position]}
      margins={margins}
      index={index}
      ref={ref}
    > 
      <TitleContainer>
        <Title>
          {customTitle}
        </Title>
        <Button onClick={deleteToast(index)}>
          {!autoHidden &&
            <Image
              src={deleteImg}
              width={20}
              height={20}
              hover={true} 
            />
          }
        </Button>
      </TitleContainer>
      <Content>
        <Image
          src={ICONS[type] || null}
          width={40}
          height={40}
        />
        <Description>
          {description}
        </Description>
      </Content>
      {autoHidden &&
        <ProgressBar
          color={theme.colors.progressBar}
          width={theme.colors.progressBarWidth}
          value={barValue} max={100}
        />
      }
    </Container>
  );
});

ToastItem.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string.isRequired,
  position: PropTypes.string,
  description: PropTypes.string,
  margins: PropTypes.string,
  autoHidden: PropTypes.bool,
  duration: PropTypes.string,
  index: PropTypes.number
};

ToastItem.displayName = "ToastItem";
