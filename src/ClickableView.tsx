import React, { PureComponent } from 'react'
import { TouchableOpacity, ViewStyle, StyleProp } from 'react-native'

interface ClickableViewProps {
  onPress: () => void
  style?: StyleProp<ViewStyle>

  /**
   * Use for change opacity for pressed button;
   * 0 - transparent
   * 1 - visible
   *
   * default: 0.3
   */
  opacity?: number

  disabled?: boolean
}

export class ClickableView extends PureComponent<ClickableViewProps> {
  static defaultProps = {
    onPress: null,
    opacity: 0.3,
    disabled: false,
  }

  render() {
    const { disabled, opacity, style, onPress, children } = this.props

    return (
      <TouchableOpacity
        disabled={disabled || !onPress}
        activeOpacity={opacity}
        style={style}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    )
  }
}
