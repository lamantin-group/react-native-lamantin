import React, { PureComponent } from 'react'
import { Switch, Text, View, ViewStyle } from 'react-native'

interface SwitchViewProps {
  title: string
  checked: boolean
  description?: string
  descriptionUncheked?: string
  onChanges: (checked: boolean) => void
  style?: ViewStyle
  styleSwitch?: ViewStyle
  titleStyle?: ViewStyle
  descriptionStyle?: ViewStyle
}

export class SwitchView extends PureComponent<SwitchViewProps> {
  static defaultProps = {
    title: null,
    description: null,
    descriptionUncheked: null,
    onChanges: (checked: boolean) => {},
    checked: false,
    style: {},
    styleSwitch: {},
    titleStyle: {
      fontSize: 18,
      fontWeight: '500',
    },
  }

  render() {
    const {
      title,
      description,
      descriptionUncheked,
      onChanges,
      style,
      styleSwitch,
      titleStyle,
      descriptionStyle,
      checked,
    } = this.props
    const descriptionFallback = descriptionUncheked ? descriptionUncheked : description
    const selectedDescription = checked ? description : descriptionFallback
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', ...style }}>
        <View style={{ flexGrow: 1, flexShrink: 1 }}>
          {title && <Text style={titleStyle}>{title}</Text>}
          {selectedDescription && (
            <Text style={[descriptionStyle, { marginTop: 8 }]}>{selectedDescription}</Text>
          )}
        </View>
        <Switch
          style={[{ marginStart: 16 }, styleSwitch]}
          value={checked}
          onValueChange={checkedChanges => {
            onChanges(checkedChanges)
          }}
        />
      </View>
    )
  }
}
