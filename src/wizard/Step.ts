import React from 'react'

export interface Step {
  title: string
  description?: string

  /**
   * Image or something else that can be render to the top of title
   */
  renderCustom?: () => React.ReactNode
}
