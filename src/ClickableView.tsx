import React, { PureComponent } from 'react'
import { TouchableOpacity, ViewStyle } from 'react-native'

interface ClickableViewProps {
  onPress: () => void
  style?: ViewStyle
  opacity?: number
  disabled?: boolean
}

class ClickableView extends PureComponent<ClickableViewProps> {
  static defaultProps = {
    onPress: () => {},
    style: null,
    opacity: 0.2,
    disabled: false,
  }

  render() {
    const { disabled, opacity, style, onPress, children } = this.props

    return (
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={opacity}
        style={style}
        onPress={() => onPress()}>
        {children}
      </TouchableOpacity>
    )
  }
}

export default ClickableView
