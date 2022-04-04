import { TOAST_TYPE } from "../constants/toastType";

export const theme = {
  colors: {
    [TOAST_TYPE.warning]: "#ffd041",
    [TOAST_TYPE.error]: "#ff6d1f",
    [TOAST_TYPE.success]: "#60d182",
    [TOAST_TYPE.info]: "#a660d1",
    buttonBorder: "#008d93",
    disabledButtonBorder: "#636363",
    btnBg: "#9eced0",
    disabledBtnBg: "#b4b6b6",
    text: "#ffffff",
    disabledBtnText: "#636363",
    progressBar: "#000000",
    defaultToastBg: "#7c9192",
    progressBarWidth: "24vw",
  },
  fontSize: [15, 17, 20, 24, 30],
  borderRadius: [10, 15],
  spacing: [-20, 0, 4, 10, 15, 18, 20, 25],
};