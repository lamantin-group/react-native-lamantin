import React, { PureComponent } from 'react'
import { FlatList, Image, ImageSourcePropType, Text, View, ViewStyle } from 'react-native'
import { ClickableView } from './ClickableView'
import { DividerLine } from './DividerLine'

export type ActionItem = {
  title: string
  description?: string
  onPress?: () => void
  logo?: ImageSourcePropType
}

export interface AboutComponentProps {
  app: ActionItem
  actions: ActionItem[]
  company?: ActionItem
  style?: ViewStyle
  headerStyle?: ViewStyle
  actionStyle?: ViewStyle
}

export class AboutComponent extends PureComponent<AboutComponentProps> {
  static defaultProps = {
    style: {},
    company: {
      title: '',
      description: `© 2018-${new Date().getFullYear()} LTD "Lamantin Group"`,
    },
  }

  renderFooter() {
    const { company } = this.props
    if (!company) return null

    return (
      <ClickableView
        style={{
          paddingVertical: 8,
          paddingHorizontal: 16,
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 16 }}>{company.title}</Text>
        {company.description && <Text style={{ color: '#666666' }}>{company.description}</Text>}
      </ClickableView>
    )
  }

  render() {
    const { actions, app, style, headerStyle } = this.props

    return (
      <View style={[{ justifyContent: 'space-between', height: '100%' }, style]}>
        <ClickableView
          onPress={app.onPress}
          style={[{ paddingVertical: 64, alignItems: 'center' }, headerStyle]}>
          {app.logo && <Image style={{ height: 86, width: 86 }} source={app.logo} />}
          <Text style={{ fontSize: 24 }}>{app.title}</Text>
          {app.description && <Text>{app.description}</Text>}
        </ClickableView>
        <FlatList
          data={actions}
          keyExtractor={item => item.title}
          ItemSeparatorComponent={() => <DividerLine />}
          renderItem={({ item }) => {
            return (
              <ClickableView
                onPress={item.onPress}
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                  alignContent: 'center',
                  flexDirection: 'row',
                }}>
                {item.logo && (
                  <Image source={item.logo} style={{ height: 24, width: 24, marginEnd: 8 }} />
                )}
                <View>
                  <Text style={{ fontSize: 16 }}>{item.title}</Text>
                  {item.description && <Text style={{ color: '#666666' }}>{item.description}</Text>}
                </View>
              </ClickableView>
            )
          }}
        />
        <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          {this.renderFooter()}
        </View>
      </View>
    )
  }
}
