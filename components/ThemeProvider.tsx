import React from 'react'
import baseTheme from './../config/theme'

const ThemeContext = React.createContext<typeof baseTheme>(baseTheme)

export default ThemeContext

export function ThemeProvider({
  theme = baseTheme,
  children,
}: {
  theme?: typeof baseTheme
  children: React.ReactNode
}) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export const ThemeConsumer = ThemeContext.Consumer
