import React, { PureComponent } from 'react'
import {
  FlatList,
  Image,
  ImageSourcePropType,
  Text,
  View,
  ViewStyle,
  ImageProps,
} from 'react-native'
import { ClickableView } from './ClickableView'
import { DividerLine } from './DividerLine'
import { Theme, defaultTheme } from './Theme'

export type ActionItem = {
  title: string
  description?: string
  onPress?: () => void
  logo?: ImageSourcePropType
}

export interface AboutComponentProps {
  app: ActionItem & { logoProps: ImageProps }
  actions: ActionItem[]
  company?: ActionItem & { includeYear: boolean; includeCopyright: boolean }
  style?: ViewStyle
  headerStyle?: ViewStyle
  actionStyle?: ViewStyle
  theme?: Theme
}

export class AboutComponent extends PureComponent<AboutComponentProps> {
  static defaultProps = {
    style: {},
    company: {
      title: '',
      description: `© 2018-${new Date().getFullYear()} LTD "Lamantin Group"`,
    },
    theme: defaultTheme,
  }

  renderFooter() {
    const { company, theme } = this.props
    if (!company) return null

    return (
      <ClickableView
        style={{
          paddingVertical: 8,
          paddingHorizontal: 16,
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={[{ fontSize: 16 }, theme!.textPrimary]}>{company.title}</Text>
        {company.description && <Text style={theme!.textSecondary}>{company.description}</Text>}
      </ClickableView>
    )
  }

  render() {
    const { actions, app, style, headerStyle, theme } = this.props

    return (
      <View style={[{ justifyContent: 'space-between', height: '100%' }, style]}>
        <ClickableView
          onPress={app.onPress}
          style={[{ paddingVertical: 64, alignItems: 'center' }, headerStyle]}>
          {app.logo && (
            <Image
              style={{ height: 86, width: 86, resizeMode: 'contain' }}
              {...app.logoProps}
              source={app.logo}
            />
          )}
          <Text style={{ fontSize: 24, ...theme!.textPrimary }}>{app.title}</Text>
          {app.description && <Text style={theme!.textSecondary}>{app.description}</Text>}
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
                  <Text style={{ fontSize: 16, ...theme!.textPrimary }}>{item.title}</Text>
                  {item.description && <Text style={theme!.textSecondary}>{item.description}</Text>}
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
