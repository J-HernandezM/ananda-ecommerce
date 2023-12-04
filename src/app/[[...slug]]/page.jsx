'use client'
 
import dynamic from 'next/dynamic'
import { ThemeProvider, createTheme } from '@mui/material'
import '../../index.css'
import '../../fonts.css'

const customTheme = createTheme({
  typography: {
    fontSize: '16px',
  }
})
const App = dynamic(() => import('../../App'), { ssr: false })
 
export default function Page() {
  return (
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  )
}