import { theme } from "@/theme";
import { TOAST_TYPE } from "@/constants/toastType";

export const OPTIONS = [
  { 
    id: 1,
    title: "Type",
    selectName: "type",
    option: {
      value1: "", content_1: "-- Choose --", value2: "error", content_2: "Error", value3: "warning", content_3: "Warning", 
      value4: "success", content_4: "Success", value5: "info", content_5: "Info", 
    }
  },
  // { 
  //   id: 2,
  //   title: "Title",
  //   selectName: "title",
  //   option: {
  //     value1: "", content_1: "-- Choose --", value2: "error", content_2: "Error", value3: "warning", content_3: "Warning", 
  //     value4: "success", content_4: "Success", value5: "info", content_5: "Info", 
  //   }
  // },
  { 
    id: 3,
    title: "Position",
    selectName: "position",
    option: {
      value1: "", content_1: "-- Choose --", value2: "top-right", content_2: "Top-right", value3: "top-left", content_3: "Top-left", 
      value4: "bottom-right", content_4: "Bottom-right", value5: "bottom-left", content_5: "Bottom-left", 
    }
  },
  { 
    id: 4,
    title: "Color",
    selectName: "color",
    option: {
      value1: "", content_1: "-- Choose --", value2: theme.colors[TOAST_TYPE.warning], content_2: "Yellow", value3: theme.colors[TOAST_TYPE.info], content_3: "Purple", 
      value4: theme.colors[TOAST_TYPE.success], content_4: "Green", value5: theme.colors[TOAST_TYPE.error], content_5: "Orange", 
    }
  },
  // { 
  //   id: 5,
  //   title: "Decsription",
  //   selectName: "description",
  //   option: {
  //     value1: "", content_1: "-- Choose --", value2: "Error example description", content_2: "Error", value3: "Info example description", content_3: "Info", 
  //     value4: "Success example description", content_4: "Success", value5: "Warning example description", content_5: "Warning", 
  //   }
  // },
  { 
    id: 6,
    title: "Margins",
    selectName: "margins",
    option: {
      value1: "", content_1: "-- Choose --", value2: "10", content_2: "10px", value3: "20", content_3: "20px", 
      value4: "30", content_4: "30px", value5: "40", content_5: "40px", 
    }
  },
    { 
    id: 7,
    title: "Duration",
    selectName: "duration",
    option: {
      value1: "", content_1: "-- Choose --", value2: "3000", content_2: "3 seconds", value3: "4000", content_3: "4 seconds", 
      value4: "5000", content_4: "5 seconds", value5: "6000", content_5: "6 seconds", 
    }
  },
]