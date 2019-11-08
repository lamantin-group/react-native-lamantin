'use strict'

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Text, View, ViewStyle } from 'react-native'
import CarouselPagination from './CarouselPagination'
import { ClickableView } from '../ClickableView'
import { on } from 'cluster'
import { Step } from './Step'
import { WizardStepComponent } from './WizardStepComponent'

const enStrings: WizardComponentStrings = {
  skip: 'Skip',
  finish: 'Finish',
  next: 'Next',
}

export interface WizardComponentStrings {
  skip: string
  finish: string
  next: string
}

export interface WizardComponentProps {
  steps: Step[]
  onFinish: () => void
  renderStep?: (step: Step, index: number) => () => React.ReactNode
  strings?: WizardComponentStrings
  style?: ViewStyle
}

export interface WizardComponentState {
  index: number
}

export class WizardComponent extends Component<WizardComponentProps, WizardComponentState> {
  static defaultProps = {
    renderStep: (step: Step) => <WizardStepComponent step={step} />,
  }

  state = {
    index: 0,
  }

  get pagination() {
    const { renderStep, onFinish, style, steps } = this.props
    const { index } = this.state

    return CarouselPagination({
      length: steps.length,
      current: index,
      style: {
        marginBottom: 0,
        marginTop: 0,
      },
    })
  }

  render() {
    const { steps, onFinish, strings = enStrings, renderStep, style } = this.props
    if (!steps || steps.length <= 0) return null

    const { index } = this.state
    const isLastStep = index === steps.length - 1
    const isFirstStep = index === 0
    return (
      <View
        style={[
          {
            flex: 1,
            justifyContent: 'space-between',
          },
          style,
        ]}>
        <ClickableView
          style={{
            alignSelf: 'flex-end',
            //    justifyContent: 'center',
            paddingVertical: 16,
            alignItems: 'center',
            paddingHorizontal: 16,
          }}
          onPress={onFinish}>
          <Text style={{ color: '#fff', fontSize: 16 }}>{isLastStep ? '' : strings.skip}</Text>
        </ClickableView>

        <View>
          {renderStep && renderStep(steps[index], index)}

          <View>{this.pagination}</View>
          <ClickableView
            style={{
              backgroundColor: '#fff',
              borderRadius: 3,
              paddingVertical: 20,
              marginHorizontal: 16,
              alignItems: 'center',
            }}
            onPress={() => {
              if (isLastStep) {
                onFinish()
              } else {
                this.setState({ index: index + 1 })
              }
            }}>
            <Text style={{ fontWeight: '500' }}>{isLastStep ? strings.finish : strings.next}</Text>
          </ClickableView>
        </View>
        <View />
      </View>
    )
  }
}
