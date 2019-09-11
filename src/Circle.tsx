import React, { PureComponent } from 'react'
import { View, ViewStyle } from 'react-native'

export type CircleProps = {
  size: number
  color?: string
  style?: ViewStyle
}

export class Circle extends PureComponent<CircleProps> {
  static defaultProps = {
    color: '#000',
    size: 4,
    style: {},
  }

  render() {
    const { color, size, style, children } = this.props
    return (
      <View
        style={{
          height: size,
          width: size,
          backgroundColor: color,
          borderRadius: size / 2,
          alignItems: 'center',
          justifyContent: 'center',
          ...style,
        }}>
        {children}
      </View>
    )
  }
}
