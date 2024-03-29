import { createContext } from 'react';

import Singleton from '@/utils/singleton';

const singleton = new Singleton();

const ToastsContext = createContext({
  toasts: singleton.findAllToasts(),
  setToasts: () => {},
  addToast: () => {}
});

export const ToastsProvider = ToastsContext.Provider;
export default ToastsContext;
