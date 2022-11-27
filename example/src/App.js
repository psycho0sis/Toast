import React, { useCallback, useMemo } from 'react';

import {
  ToastsList,
  CreateToastBtn,
  ToastsProvider,
  Singleton,
  useStateCallback,
  TOASTS_CASES
} from "toaster-psycho0sis";

const singleton = new Singleton();

const App = () => {
  const [toasts, setToasts] = useStateCallback(() => singleton.findAllToasts());
  const value = useMemo(() => ({ toasts, setToasts }), [toasts, setToasts]);
  
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
        default:
          setToasts(
            (prevToasts) => [...prevToasts, TOASTS_CASES.infoToast],
            () => singleton.createToast(TOASTS_CASES.infoToast)
          );
          return;
      }
    },
    [setToasts]
  );

  return (
    <ToastsProvider value={value}>
      <div>
        <CreateToastBtn createNewToast={createNewToast} type="error" text="Add error toast"/>
        <CreateToastBtn createNewToast={createNewToast} type="info" text="Add info toast" />
        <CreateToastBtn createNewToast={createNewToast} type="success" text="Add success toast"/>
        <CreateToastBtn createNewToast={createNewToast} type="warning" text="Add warning toast" />
      </div>
      <ToastsList position="top-right" margins="20px"/>
    </ToastsProvider>
    
  )
};


export default App;


