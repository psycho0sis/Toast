import React from 'react';
import PropTypes from 'prop-types';

import { CreateToastButton } from './styles';

export const CreateToastBtn = ({ createNewToast, type }) => {
  return (
    <CreateToastButton
      onClick={createNewToast}
      type='submit'
      disabled={type ? false : true}>
      Create new toast
    </CreateToastButton>
  );
};

CreateToastBtn.propTypes = {
  createNewToast: PropTypes.func,
  type: PropTypes.string
};
