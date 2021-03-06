import React, { PureComponent } from 'react'
import { View, ViewStyle } from 'react-native'
import { Row } from './Row'

interface Props {
  style?: ViewStyle
  vertical?: boolean
  width?: number
  color?: string
}

export class DividerLine extends PureComponent<Props> {
  static defaultProps = {
    style: {},
    vertical: false,
    width: 1,
    color: '#E0E0E0',
  }

  render() {
    const { vertical, style, width, color } = this.props
    if (vertical) {
      return (
        <View
          style={{
            flexDirection: 'row',
            height: '100%',
            borderColor: color,
            borderRightWidth: width,
            ...style,
          }}
        />
      )
    }
    return <Row style={{ width: '100%', borderColor: color, borderTopWidth: width, ...style }} />
  }
}
