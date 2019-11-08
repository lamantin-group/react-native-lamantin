import { Color } from 'csstype'
import React from 'react'
import { ViewStyle } from 'react-native'
import { Pagination } from 'react-native-snap-carousel'
import { Circle } from './../Circle'

export interface CarouselPaginationProps {
  current: number
  length: number
  style?: ViewStyle
  theme?: {
    enabled: Color
    disabled: Color
  }
}

export default function CarouselPagination(props: CarouselPaginationProps) {
  const {
    style,
    length,
    current,
    theme = {
      enabled: '#FFF',
      disabled: '#62A6E5',
    },
  } = props

  return (
    <Pagination
      dotsLength={length}
      activeDotIndex={current}
      containerStyle={[{ backgroundColor: 'transparent' }, style]}
      renderDots={(activeIndex: number, total: number) => {
        const dots = []
        for (let i = 0; i < total; i++) {
          dots.push({
            index: i,
            active: i === activeIndex,
          })
        }
        return dots.map(dot => {
          return (
            <Circle
              style={{ marginHorizontal: 6 / 2 }}
              key={dot.index}
              color={dot.active ? theme.enabled : theme.disabled}
              size={dot.active ? 10 : 8}
            />
          )
        })
      }}
    />
  )
}
