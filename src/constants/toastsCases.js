import { TOAST_TYPE } from '@/constants/toastType';
import { theme } from '@/theme';

export const TOASTS_CASES = {
  errorToast: {
    type: "error",
    title: "Error",
    description: "Error example description", 
    color: theme.colors[TOAST_TYPE.error],
    animation: 'margin-top',
    textColor: 'white',
    autoHidden: false
  },
  infoToast: {
    type: 'info',
    title: 'Info',
    description: 'Info example description',
    animation: 'margin-left',
    color: theme.colors[TOAST_TYPE.info],
    textColor: 'white',
    autoHidden: false,
    id: new Date().toLocaleString()
  },
  successToast: {
    type: 'success',
    title: 'Success',
    description: 'Success example description',
    animation: 'opacity',
    color: theme.colors[TOAST_TYPE.success],
    textColor: 'white',
    autoHidden: true,
    duration: "3000",
    id: new Date().toLocaleString()
  },
  warningToast: {
    type: 'warning',
    title: 'Warning',
    description: 'Warning example description',
    animation: 'transform',
    color: theme.colors[TOAST_TYPE.warning],
    textColor: 'white',
    autoHidden: true,
    duration: "3000",
    id: new Date().toLocaleString()
  },
}

