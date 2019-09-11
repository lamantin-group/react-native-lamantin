import React, { PureComponent } from 'react'
import { View, ViewStyle } from 'react-native'

type RowProps = {
  style?: ViewStyle
}
export class Row extends PureComponent<RowProps> {
  static defaultProps = {
    style: {},
  }

  render() {
    const { style, children } = this.props
    return <View style={{ ...style, flexDirection: 'row' }}>{children}</View>
  }
}
