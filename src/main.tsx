import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.scss';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import 'react-circular-progressbar/dist/styles.css';
import 'react-quill/dist/quill.snow.css';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
