import React from 'react';
import { Toast } from './Toast/Toast';

import { theme } from "../theme";

export default {
  title: 'toast-lib',
  component: Toast,
};

export const Error = (args) => <Toast  {...args} />

Error.args = {
  toast: {
    type: "error",
    title: "Error",
    description: "Error example description",
    animation: "transform",
    color:  theme.colors["error"],
    textColor: "white",
    autoHidden: false
  }
};

export const Info = (args) => <Toast  {...args} />

Info.args = {
  toast: {
    type: "info",
    title: "Info",
    description: "Info example description",
    animation: "transform",
    color: theme.colors["info"],
    textColor: "white",
    autoHidden: false
  }

};

export const Success = (args) => <Toast  {...args} />

Success.args = {
  toast: {
    type: "success",
    title: "Success",
    description: "Success example description",
    animation: "opacity",
    color: theme.colors["success"],
    textColor: "white",
    autoHidden: true
  }
  
};

export const Warning = (args) => <Toast  {...args} />

Warning.args = {
  toast: {
    type: "warning",
    title: "Warning",
    description: "Warning example description",
    animation: "opacity",
    color: theme.colors["warning"],
    textColor: "white",
    autoHidden: true
  }
};