import React from "react";
import ReactDOM from "react-dom";

// export const Portal = ({children}) => {
//   const node = document.createElement("div");
//   document.body.prepend(node);
//   return ReactDOM.createPortal(children, node);
// };

export const Portal = ({ children, className = 'root-portal', el = 'div' }) => {
  const [container] = React.useState(() => {
    return document.createElement(el);
  });

  React.useEffect(() => {
    container.classList.add(className)
    document.body.prepend(container)

    return () => {
      document.body.removeChild(container)
    }
  }, [])

  return ReactDOM.createPortal(children, container)
}
