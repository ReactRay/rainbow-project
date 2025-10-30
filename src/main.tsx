import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from "react-redux";
import { store } from "./redux/store";
import './index.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>

    <App />
    <ToastContainer
      position="top-right"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnHover
      theme="colored"
      toastClassName="rainbow-toast"
      style={{ top: '5rem' }} // 👈 moves it slightly lower
    />
  </Provider>

)
