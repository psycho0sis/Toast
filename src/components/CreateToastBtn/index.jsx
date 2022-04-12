import React from 'react';
import PropTypes from 'prop-types';

import { CreateToastButton } from './styles';

export const CreateToastBtn = ({ createNewToast, type, text}) => {
  return (
    <CreateToastButton
      onClick={type ? createNewToast(type) : null}
    >
      {text}
    </CreateToastButton>
  );
};

CreateToastBtn.propTypes = {
  createNewToast: PropTypes.func,
  type: PropTypes.string, 
  text: PropTypes.string, 
};
