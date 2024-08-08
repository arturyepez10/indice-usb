import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import Checkout from './checkout-template/Checkout'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Checkout />
  </React.StrictMode>,
)
