/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment, Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ButtonProps,
  Slider,
} from 'react-native'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  h1: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
})

import { Button } from 'react-native-library'
import { Row } from '../src/Row'
import { SwitchView } from '../src/SwitchView'
import { DividerLine } from '../src/DividerLine'
import { Column } from '../src/Column'
import { Circle } from '../src/Circle'
import AboutComponent from '../src/AboutComponent'

class App extends Component {
  state = {
    isLoading: false,
    enabled: true,
    uppercase: true,
    space: 24,
    renderable: {
      type: 'about',
    },
  }

  button(props: any = {}) {
    const { isLoading, enabled, uppercase } = this.state

    return (
      <Button
        text="Button"
        isLoading={isLoading}
        enabled={enabled}
        uppercase={uppercase}
        {...props}
      />
    )
  }

  renderMain = () => {
    const { isLoading, enabled, uppercase, space } = this.state

    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
            <View style={styles.body}>
              <Text style={styles.h1}>Настройки</Text>
              <SwitchView
                style={{ marginTop: 12 }}
                title="isLoading"
                description="description isLoading"
                checked={isLoading}
                onChanges={isLoading => this.setState({ isLoading })}
              />

              <SwitchView
                style={{ marginTop: 12 }}
                title="enabled"
                description="description enabled"
                checked={enabled}
                onChanges={enabled => this.setState({ enabled })}
              />

              <SwitchView
                style={{ marginTop: 12 }}
                title="uppercase"
                description="description uppercase"
                checked={uppercase}
                onChanges={uppercase => this.setState({ uppercase })}
              />

              <DividerLine style={{ marginTop: 24 }} color="transparent" />
              <Text>Column space = {space}</Text>
              <Slider
                step={1}
                minimumValue={0}
                maximumValue={36}
                value={space}
                onValueChange={space => this.setState({ space })}
              />

              <DividerLine style={{ marginVertical: 12 }} color="transparent" />
              <Text style={styles.h1}>Button inside Column</Text>
              <View style={{ marginTop: 12 }} />

              <Column
                space={space}
                mode={'between'}
                style={{ borderColor: 'blue', borderWidth: 1 }}>
                {this.button({
                  text: 'Separator: ',
                  style: {
                    backgroundColor: '#f4f4f4',
                  },
                  onPress: () => {},
                })}
                {this.button({
                  style: {
                    backgroundColor: '#ffcc00',
                  },
                })}
                {this.button({
                  text: 'Go to about screen: ',
                  style: {
                    backgroundColor: 'cyan',
                  },
                  onPress: () => {
                    this.setState({
                      renderable: {
                        type: 'about',
                      },
                    })
                  },
                })}
              </Column>

              <View style={{ marginTop: 24 }}>
                <Text style={styles.h1}>Circle</Text>
                <Row>
                  <Circle size={24} />
                  <Circle size={36} color="transparent" borderWidth={1} borderColor="#4f4f4f" />
                  <Circle size={48} color="#ffcc00" />
                </Row>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    )
  }

  renderAboutPage = () => {
    return (
      <AboutComponent
        appName={'Example'}
        actions={[
          {
            title: 'Title',
            description: 'Description',
            onPress: () => this.setState({ renderable: { render: this.renderMain } }),
          },
          { title: 'Title without description' },
        ]}
      />
    )
  }

  render() {
    const { renderable } = this.state
    if (renderable.type === 'about') {
      return <SafeAreaView>{this.renderAboutPage()}</SafeAreaView>
    } else {
      return this.renderMain()
    }
  }
}

export default App
