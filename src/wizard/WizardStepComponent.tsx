import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import { Step } from './Step'

export interface WizardStepComponentProps {
  step: Step
}

export class WizardStepComponent extends PureComponent<WizardStepComponentProps> {
  render() {
    const { title, description, renderCustom } = this.props.step

    return (
      <View style={{ alignItems: 'center' }}>
        {renderCustom && renderCustom()}
        {!!title && (
          <Text style={{ textAlign: 'center', color: '#fff', fontSize: 24, marginTop: 47 }}>
            {title}
          </Text>
        )}
        {!!description && (
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              marginTop: 12,
              marginHorizontal: 34,
              fontSize: 16,
              letterSpacing: -0.27,
              opacity: 0.8,
            }}>
            {description}
          </Text>
        )}
      </View>
    )
  }
}
