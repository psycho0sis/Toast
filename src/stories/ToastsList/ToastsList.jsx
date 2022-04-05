import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Toast } from '../Toast/Toast';

import { TOAST_POSITION } from '../../constants/toastPosition';
import { ToastsContainer } from './toastsListsStyles';

export const ToastsList = ({ toasts, position, margins }) => {
  const [list, setList] = useState([...toasts]);

  const handleDeleteItem = (id) => {
    const listItemIndex = list.findIndex((el) => el.id === id);
    const toastListItemIndex = toasts.findIndex((el) => el.id === id);

    list.splice(listItemIndex, 1);
    toasts.splice(toastListItemIndex, 1);

    setList([...list]);
  };

  return (
    <ToastsContainer
      position={TOAST_POSITION[position]}
      margins={margins}
    >
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          index={toast.id}
          toast={toast}
          handleDeleteItem={handleDeleteItem}
        />
      ))}
    </ToastsContainer>
  );
};

ToastsList.propTypes = {
  position: PropTypes.string,
  margins: PropTypes.string,
  toasts: PropTypes.arrayOf(Toast.propTypes.toast)
};
