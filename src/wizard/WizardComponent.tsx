'use strict'

import React, { Component } from 'react'
import { Dimensions, LayoutAnimation, Text, View, ViewStyle } from 'react-native'
import Carousel, { CarouselStatic } from 'react-native-snap-carousel'
import { ClickableView } from '../ClickableView'
import CarouselPagination from './CarouselPagination'
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

  carouselRef?: CarouselStatic<any> = undefined

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
    const width = Dimensions.get('window').width
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
          {/* {renderStep && renderStep(steps[index], index)} */}

          <Carousel
            data={steps}
            ref={(ref: any) => (this.carouselRef = ref)}
            slideStyle={{ paddingHorizontal: 16 }}
            renderItem={({ item, index }) => renderStep && renderStep(item, index)}
            sliderWidth={width}
            itemWidth={width}
            onSnapToItem={index => {
              LayoutAnimation.easeInEaseOut()
              this.setState({ index })
            }}
          />

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
                if (this.carouselRef) {
                  this.carouselRef.snapToNext()
                }
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
