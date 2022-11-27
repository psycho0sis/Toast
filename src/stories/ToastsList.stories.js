import React, { useCallback, useMemo } from 'react';

import { ToastsList } from '@/components/ToastsList';
import { CreateToastBtn } from '@/components/CreateToastBtn';
import { ToastsProvider } from '@/context';
import Singleton from '@/utils/singleton';
import { useStateCallback } from '@/hooks/useStateCallback'
import { TOASTS_CASES } from '@/constants/toastsCases';

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

const singleton = new Singleton();

const Template = (args) => {
  const [toasts, setToasts] = useStateCallback(() => singleton.findAllToasts());
  const value = useMemo(() => ({ toasts, setToasts }), [toasts]);
  
  const createNewToast = useCallback(
    (type) => () => {
      switch (type) {
          case "success":
          setToasts(
            (prevToasts) => [...prevToasts, TOASTS_CASES.successToast],
            () => singleton.createToast(TOASTS_CASES.successToast)
          );
          return;
        case "warning":
          setToasts(
            (prevToasts) => [...prevToasts, TOASTS_CASES.warningToast],
            () => singleton.createToast(TOASTS_CASES.warningToast)
          );
          return;
        case "error":
          setToasts(
            (prevToasts) => [...prevToasts, TOASTS_CASES.errorToast],
            () => singleton.createToast(TOASTS_CASES.errorToast)
          );
          return;
        case "info":
          setToasts(
            (prevToasts) => [...prevToasts, TOASTS_CASES.infoToast],
            () => singleton.createToast(TOASTS_CASES.infoToast)
          );
          return;
      }
    },
    []
  );

  return (
    <ToastsProvider value={value}>
      <div>
        <CreateToastBtn createNewToast={createNewToast} type="error" text="Add error toast"/>
        <CreateToastBtn createNewToast={createNewToast} type="info" text="Add info toast" />
        <CreateToastBtn createNewToast={createNewToast} type="success" text="Add success toast"/>
        <CreateToastBtn createNewToast={createNewToast} type="warning" text="Add warning toast" />
      </div>
      <ToastsList {...args} />
    </ToastsProvider>
    
  )
};

export const ToastsListExample = Template.bind({});

ToastsListExample.args = {
  position: 'top-left',
  margins: '10px'
};
