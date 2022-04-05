import React from 'react';

import { ToastsList } from './ToastsList/ToastsList';
import * as ToastStories from './Toast.stories';

export default {
  title: 'ToastsList',
  component: ToastsList,
  argTypes: {
    position: {
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      control: {
        type: 'radio'
      }
    },
    margins: {
      control: {
        type: 'text'
      }
    },
  }
};

const Template = (args) => <ToastsList {...args} />;

export const ErrorList = Template.bind({});

ErrorList.args = {
  toasts: [
    { ...ToastStories.Error.args.toast, id: '1' },
    { ...ToastStories.Error.args.toast, id: '2' },
    { ...ToastStories.Error.args.toast, id: '3' }
  ],
  position: 'top-left',
  margins: '10px'
};

export const InfoList = Template.bind({});

InfoList.args = {
  toasts: [
    { ...ToastStories.Info.args.toast, id: '1' },
    { ...ToastStories.Info.args.toast, id: '2' },
    { ...ToastStories.Info.args.toast, id: '3' }
  ],
  position: 'top-right',
  margins: '20px'
};

export const WarningList = Template.bind({});

WarningList.args = {
  toasts: [
    { ...ToastStories.Warning.args.toast, id: '1' },
    { ...ToastStories.Warning.args.toast, id: '2' },
    { ...ToastStories.Warning.args.toast, id: '3' }
  ],
  position: 'bottom-right',
  margins: '30px'
};

export const SuccessList = Template.bind({});

SuccessList.args = {
  toasts: [
    { ...ToastStories.Success.args.toast, id: '1' },
    { ...ToastStories.Success.args.toast, id: '2' },
    { ...ToastStories.Success.args.toast, id: '3' }
  ],
  position: 'bottom-left',
  margins: '40px'
};
