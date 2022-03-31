import { theme } from "@/theme";
import { TOAST_TYPE } from "@/constants/toastType";

export const OPTIONS = [
  { 
    id: 1,
    title: "Type",
    name: "type",
    option: {
      value1: "", content1: "-- Choose --", value2: "error", content2: "Error", value3: "warning", content3: "Warning", 
      value4: "success", content4: "Success", value5: "info", content5: "Info", 
    }
  },
  { 
    id: 2,
    title: "Title",
    name: "title",
    option: {
      value1: "", content1: "-- Choose --", value2: "error", content2: "Error", value3: "warning", content3: "Warning", 
      value4: "success", content4: "Success", value5: "info", content5: "Info", 
    }
  },
  { 
    id: 3,
    title: "Position",
    name: "position",
    option: {
      value1: "", content1: "-- Choose --", value2: "top-right", content2: "Top-right", value3: "top-left", content3: "Top-left", 
      value4: "bottom-right", content4: "Bottom-right", value5: "bottom-left", content5: "bottom-left", 
    }
  },
  { 
    id: 4,
    title: "Color",
    name: "color",
    option: {
      value1: "", content1: "-- Choose --", value2: theme.colors[TOAST_TYPE.warning], content2: "yellow", value3: theme.colors[TOAST_TYPE.info], content3: "purple", 
      value4: theme.colors[TOAST_TYPE.success], content4: "green", value5: theme.colors[TOAST_TYPE.error], content5: "error", 
    }
  },
  { 
    id: 5,
    title: "Decsription",
    name: "description",
    option: {
      value1: "", content1: "-- Choose --", value2: "Error example description", content2: "error", value3: "Info example description", content3: "info", 
      value4: "Success example description", content4: "success", value5: "Warning example description", content5: "warning", 
    }
  },
  { 
    id: 6,
    title: "Margins",
    name: "margins",
    option: {
      value1: "", content1: "-- Choose --", value2: "10", content2: "10px", value3: "20", content3: "20px", 
      value4: "30", content4: "30px", value5: "40", content5: "40px", 
    }
  },
]