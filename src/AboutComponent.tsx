import React, { PureComponent } from 'react'
import {
  View,
  ViewStyle,
  ScrollView,
  FlatList,
  Image,
  ImageSourcePropType,
  Text,
} from 'react-native'
import { ClickableView } from './ClickableView'
import { DividerLine } from './DividerLine'

type ActionItem = {
  title: string
  description?: string
  onPress?: () => void
}

interface AboutComponentProps {
  appName: string
  actions: ActionItem[]
  style?: ViewStyle
  appLogo?: ImageSourcePropType
}

export default class AboutComponent extends PureComponent<AboutComponentProps> {
  static defaultProps = {
    style: {},
  }

  render() {
    const { style, actions, appLogo, appName } = this.props
    // textStyles
    return (
      <FlatList
        data={actions}
        ListHeaderComponent={() => {
          return (
            <View style={{ paddingVertical: 64, alignItems: 'center' }}>
              {appLogo && <Image style={{ height: 64, width: 64 }} source={appLogo} />}
              <Text style={{ fontSize: 24 }}>{appName}</Text>
            </View>
          )
        }}
        ItemSeparatorComponent={() => <DividerLine />}
        renderItem={({ item }) => {
          return (
            <ClickableView onPress={item.onPress}>
              <Text>{item.title}</Text>
              {item.description && <Text></Text>}
            </ClickableView>
          )
        }}
      />
    )
  }
}
