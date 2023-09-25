"use client"
import React from 'react'
import { ThemeProvider } from 'next-themes'

const DarkModeProvider = ({children}) => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>{children}</ThemeProvider>
  )
}

export default DarkModeProvider