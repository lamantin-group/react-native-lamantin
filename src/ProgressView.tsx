import React, { PureComponent } from 'react'
import { ActivityIndicator } from 'react-native'

export interface ProgressViewProps {
  isLoading: boolean
  size?: 'small' | 'large'
  color?: string
}

/**
 * Render ProgressView when isLoading === true or children otherwise.
 */
export default class ProgressView extends PureComponent<ProgressViewProps> {
  static defaultProps = {
    isLoading: false,
    size: 'small',
    color: '#4f4f4f',
  }

  render() {
    const { isLoading, children, size, color } = this.props

    return (
      <React.Fragment>
        {isLoading ? <ActivityIndicator size={size} color={color} /> : children}
      </React.Fragment>
    )
  }
}
