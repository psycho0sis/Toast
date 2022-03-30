import { TOAST_TYPE } from "@/constants/toastType";

export const theme = {
  colors: {
    [TOAST_TYPE.warning]: "#ffd041",
    [TOAST_TYPE.error]: "#ff6d1f",
    [TOAST_TYPE.success]: "#60d182",
    [TOAST_TYPE.info]: "#a660d1",
  },
  fontSize: [15, 17],
  borderRadius: [10, 15],
  spacing: [-20, 0, 4, 10, 15, 18, 20, 25],
};