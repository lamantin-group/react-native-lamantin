import { TextStyle } from 'react-native'

export interface Theme {
  textPrimary: TextStyle
  textSecondary: TextStyle
}

export const defaultTheme: Theme = {
  textPrimary: {
    color: '#000',
  },
  textSecondary: {
    color: '#666666',
  },
}
