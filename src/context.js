import React from 'react';

import Singleton from './singleton';

const singleton = new Singleton();

const ToastsContext = React.createContext({
  toasts: singleton.findAllToasts(),
  setToasts: () => {}
})

export const ToastsProvider = ToastsContext.Provider;
export default ToastsContext;

