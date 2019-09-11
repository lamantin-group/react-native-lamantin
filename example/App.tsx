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
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native'

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

class App extends Component {
  state = {
    isLoading: false,
    enabled: true,
  }

  render() {
    const { isLoading, enabled } = this.state

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

              <DividerLine style={{ marginVertical: 12 }} color="transparent" />
              <Text style={styles.h1}>Button</Text>
              <View style={{ marginTop: 12 }} />
              <Button text="Button" isLoading={isLoading} enabled={enabled} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    )
  }
}

export default App
