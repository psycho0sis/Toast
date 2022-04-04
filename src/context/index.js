import { createContext } from 'react';

import Singleton from '../singleton';

const singleton = new Singleton();

const ToastsContext = createContext({
  toasts: singleton.findAllToasts(),
  setToasts: () => {}
})

export const ToastsProvider = ToastsContext.Provider;
export default ToastsContext;

