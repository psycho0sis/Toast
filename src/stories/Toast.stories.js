import React from 'react';

import { ToastItem } from '@/components/ToastItem'

import { theme } from '@/theme';

export default {
  title: 'toast-lib',
  component: ToastItem
};

export const Error = (args) => <ToastItem {...args} />;

Error.args = {
  toast: {
    type: 'error',
    title: 'Error',
    description: 'Error example description',
    animation: 'margin-top',
    color: theme.colors['error'],
    textColor: 'white',
    autoHidden: false
  }
};

export const Info = (args) => <ToastItem {...args} />;

Info.args = {
  toast: {
    type: 'info',
    title: 'Info',
    description: 'Info example description',
    animation: 'transform',
    color: theme.colors['info'],
    textColor: 'white',
    autoHidden: false
  }
};

export const Success = (args) => <ToastItem {...args} />;

Success.args = {
  toast: {
    type: 'success',
    title: 'Success',
    description: 'Success example description',
    animation: 'opacity',
    color: theme.colors['success'],
    textColor: 'white',
    autoHidden: true
  }
};

export const Warning = (args) => <ToastItem {...args} />;

Warning.args = {
  toast: {
    type: 'warning',
    title: 'Warning',
    description: 'Warning example description',
    animation: 'margin-left',
    color: theme.colors['warning'],
    textColor: 'white',
    autoHidden: true
  }
};
