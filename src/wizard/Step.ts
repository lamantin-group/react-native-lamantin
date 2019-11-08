import React from 'react'

export interface Step {
  title: string
  description: string
  customRender: () => React.ReactNode
}
