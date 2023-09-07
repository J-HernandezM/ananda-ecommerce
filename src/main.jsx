import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, createTheme } from '@mui/material'
import './fonts/Abnormal-Light.woff'
import './fonts/Abnormal-Light.woff2'
import './fonts/Innova-Light.woff'
import './fonts/Innova-Light.woff2'
import './fonts/MyriadPro-Regular.woff'
import './fonts/MyriadPro-Regular.woff2'
import './fonts/Selfie-Light.woff'
import './fonts/Selfie-Light.woff2'
import './fonts/Vogue-Regular.woff'
import './fonts/Vogue-Regular.woff2'
import './index.css'

const customTheme = createTheme({
  typography: {
    fontFamily: 'Myriad Pro',
    fontSize: '16rem',
  }
})

console.clear()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
