# Toast

# How to use #

- Import nessesary components

```
import {
  ToastsList,
  CreateToastBtn,
  ToastsProvider,
  Singleton,
  useStateCallback
} from "toaster-psycho0sis";
```

- Create a new instance of Singleton;

`const singleton = new Singleton();`

- Create your own toast configuration like this:
```
  const toast = {
    type: 'success',
    title: 'Success',
    description: 'Success example description',
    animation: 'opacity',
    color: '#ffd041',
    textColor: 'white',
    autoHidden: true,
    duration: "3000",
    id: new Date().toLocaleString()
  }
```
create `createNewToast` function like this:
```
  const createNewToast = () => {
    setToasts(
      (prevToasts) => [...prevToasts, toast],
      () => singleton.createToast(toast)
    )
  };
```

The hole component could look like this:
```
export const App = () => {
  const [toasts, setToasts] = useStateCallback(() => singleton.findAllToasts());
  const value = useMemo(() => ({ toasts, setToasts }), [toasts, setToasts]);
  
  const toast = {
    type: 'success',
    title: 'Success',
    description: 'Success example description',
    animation: 'opacity',
    color: "black",
    textColor: 'white',
    autoHidden: false,
    duration: "3000",
    id: new Date().toLocaleString()
  };

  const createNewToast = (type) => () => {
    setToasts(
      (prevToasts) => [...prevToasts, toast],
      () => singleton.createToast(toast)
    )
  };

  return (
    <ToastsProvider value={value}>
      <div>
        <CreateToastBtn createNewToast={createNewToast} type="success" text="Add toast" />
      </div>
      <ToastsList position="top-right" margins="20px"/>
    </ToastsProvider>
    
  )
};
```

Some instructions: 
- You could create up to three toasts at the moment
- You could pass the position of toasts on the screen and margin
- You could create your own button, which woul add your toasts
- You could use the `theme` from libriary

Happy hacking!