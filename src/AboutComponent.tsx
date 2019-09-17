import React, { PureComponent } from 'react'
import { FlatList, Image, ImageSourcePropType, Text, View, ViewStyle } from 'react-native'
import { ClickableView } from './ClickableView'
import { DividerLine } from './DividerLine'

type ActionItem = {
  title: string
  description?: string
  onPress?: () => void
}

interface AboutComponentProps {
  app: {
    name: string
    version?: string
    logo?: ImageSourcePropType
  }
  actions: ActionItem[]
  company?: ActionItem
  style?: ViewStyle
}

export default class AboutComponent extends PureComponent<AboutComponentProps> {
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
    const { actions, app } = this.props

    return (
      <View style={{ justifyContent: 'space-between', height: '100%' }}>
        <View style={{ paddingVertical: 64, alignItems: 'center' }}>
          {app.logo && <Image style={{ height: 86, width: 86 }} source={app.logo} />}
          <Text style={{ fontSize: 24 }}>{app.name}</Text>
          {app.version && <Text>{app.version}</Text>}
        </View>
        <FlatList
          data={actions}
          ItemSeparatorComponent={() => <DividerLine />}
          renderItem={({ item }) => {
            return (
              <ClickableView
                onPress={item.onPress}
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                  alignContent: 'center',
                }}>
                <Text style={{ fontSize: 16 }}>{item.title}</Text>
                {item.description && <Text style={{ color: '#666666' }}>{item.description}</Text>}
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
