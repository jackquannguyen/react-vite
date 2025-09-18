import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render( //bảo react lấy div root này render component App -> react sẽ
  //nhét tất cả code App vào bên trong div root trong HTML 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
