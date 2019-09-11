import React, { PureComponent } from 'react'
import { ActivityIndicator, ViewStyle } from 'react-native'

export interface ProgressViewProps {
  isLoading: boolean
  size?: 'small' | 'large'
  color?: string
  style?: ViewStyle
}

/**
 * Render ProgressView when isLoading === true or children otherwise.
 */
export class ProgressView extends PureComponent<ProgressViewProps> {
  static defaultProps = {
    isLoading: false,
    size: 'small',
    color: '#4f4f4f',
    style: {},
  }

  render() {
    const { isLoading, children, size, color, style } = this.props

    return (
      <React.Fragment>
        {isLoading ? <ActivityIndicator style={style} size={size} color={color} /> : children}
      </React.Fragment>
    )
  }
}
