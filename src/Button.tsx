import React, { PureComponent } from 'react'
import { View, ViewStyle, Text, TextStyle } from 'react-native'
import { StateView } from './StateView'
import { ClickableView } from './ClickableView'
import { ProgressView } from './ProgressView'

interface TextProps {
  text: string
  uppercase?: boolean
  textProps?: TextStyle
}

interface ButtonProps extends TextProps {
  style?: ViewStyle
  isLoading?: boolean
  onPress?: () => void
  enabled?: boolean

  /**
   * Use for customize text rendering
   */
  renderText?: (props: TextProps) => void
}

export class Button extends PureComponent<ButtonProps> {
  static defaultProps = {
    style: {},
    isLoading: false,
    enabled: false,

    text: '',
    uppercase: true,
    textProps: {},
  }

  renderContent() {
    const { isLoading, text, uppercase, renderText, textProps } = this.props
    return (
      <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
        <ProgressView isLoading={isLoading} />

        {renderText ? (
          renderText({ uppercase, text })
        ) : (
          <Text {...textProps}>{uppercase ? text.toUpperCase() : text}</Text>
        )}
      </View>
    )
  }

  render() {
    const { style, onPress, enabled, isLoading } = this.props
    return (
      <ClickableView disabled={!enabled} onPress={isLoading ? undefined : onPress} style={style}>
        <StateView enabled={enabled}>{this.renderContent()}</StateView>
      </ClickableView>
    )
  }
}
