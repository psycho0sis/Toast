import React, {memo, useContext} from 'react';
import PropTypes from 'prop-types';

import { TOAST_POSITION } from '@/constants/toastPosition';
import { ICONS } from '@/constants/icons';

import ToastsContext from '@/context';
import Singleton from '@/singleton';

import {
  Container,
  Content,
  Image,
  Title,
  Description,
  TitleContainer,
  Button
} from './styles';
import deleteImg from "@/assets/delete.svg";

const ToastItem = memo(({ toast, index }) => {
  const { color, title, type, position, description, margins } = toast;
  const { setToasts } = useContext(ToastsContext);
  const singleton = new Singleton();

  const deleteToast = (index) => () => {
    singleton.deleteToast(index);
    const toasts2 = singleton.findAllToasts();
    
    setToasts(toasts2);
  }
  
  return (
    <Container
      type={type}
      color={color}
      position={TOAST_POSITION[position]}
      margins={margins}
      index={index}
    > 
      <TitleContainer>
        <Title>{title}</Title>
        <Button onClick={deleteToast(index)}>
          <Image
            src={deleteImg}
            width={20}
            height={20}
            hover={true} 
          />
        </Button>
      </TitleContainer>
      <Content>
        <Image
          src={ICONS[type]}
          width={50}
          height={50}
        />
        <Description>{ description }</Description>
      </Content>
      
    </Container>
  );
});

ToastItem.propTypes = {
  toast: PropTypes.object,
  index: PropTypes.number
};

ToastItem.defaultProps = {
  color: "white",
  title: "Title",
  type: "title",
  position: "top-right",
  description: "Description",
  margins: "10px"
};

ToastItem.displayName = "ToastItem";

export default ToastItem;