import { useState } from "react";

import { ToastsList } from "toaster";
// import { Toast } from "toast";

function App() {
  const [ toasts, setToasts ] = useState([
    {
      id: 1,
      title: "Error",
      description: "Error example description",
      animation: "opacity",
      color: "red",
      textColor: "white",
      duration: "3000", 
      autoHidden: false
    },
    {id: 2,
      title: "Error",
      description: "Error example description",
      animation: "opacity",
      color: "red",
      textColor: "white",
      duration: "3000", 
      autoHidden: false
    },
    {id: 3,
      title: "Error",
      description: "Error example description",
      animation: "opacity",
      color: "red",
      textColor: "white",
      duration: "3000", 
      autoHidden: false
    },
  ])

  return (
    <div className="App">
      <ToastsList toasts={toasts} position="bottom-left" margins="20px" />
        {/* {toasts.map(toast => (
        <Toast
          key={toast.id}
          handleDeleteItem={handleDeleteItem}
          toast={toast}
        />
      ))}
      </ToastsList> */}
    </div>
  );
}

export default App;
