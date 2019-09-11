import React, { PureComponent } from 'react'
import { View, ViewStyle } from 'react-native'

const SOLVER_SEPARATOR = {
  first: {
    solveTop: (isFirst: boolean, isLast: boolean) => isFirst,
    solveBottom: (isFirst: boolean, isLast: boolean) => false,
  },
  last: {
    solveTop: (isFirst: boolean, isLast: boolean) => false,
    solveBottom: (isFirst: boolean, isLast: boolean) => isLast,
  },
  between: {
    solveTop: (isFirst: boolean, isLast: boolean) => !isFirst,
    solveBottom: (isFirst: boolean, isLast: boolean) => !isLast,
  },
  top: {
    solveTop: () => true,
    solveBottom: () => false,
  },
  bottom: {
    solveTop: () => false,
    solveBottom: () => true,
  },
  flex: {
    solveTop: () => true,
    solveBottom: () => true,
  },
}

interface ColumnProps {
  style: ViewStyle
  top: number
  bottom: number
  space: number
  separator: (space: number) => React.ReactNode
  mode: 'first' | 'last' | 'between' | 'top' | 'bottom' | 'flex'
}

export class Column extends PureComponent<ColumnProps> {
  static defaultProps = {
    mode: 'flex',
    top: null,
    bottom: null,
    style: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    space: 0,
    separator: (space: number) => <View style={{ marginTop: space }} />,
  }

  render() {
    const { style, space, children, separator, mode, top, bottom } = this.props
    const isFlex = this.props.mode === 'flex'
    let childrenCount = 0
    React.Children.forEach(child => {
      if (child) childrenCount++
    })
    const solverSeparator = SOLVER_SEPARATOR[mode]
    if (top !== null) {
      style.paddingTop = top
    }
    if (bottom !== null) {
      style.paddingBottom = bottom
    }
    return (
      <View style={{ ...style, flexDirection: 'column' }}>
        {React.Children.map(children, (child, index) => {
          const isFirst = index === 0
          const isLast = index === childrenCount - 1
          if (child) {
            return (
              <View>
                {solverSeparator.solveTop(isFirst, isLast) &&
                  separator(isFlex && isFirst ? space : space / 2)}
                {child}
                {solverSeparator.solveBottom(isFirst, isLast) &&
                  separator(isFlex && isLast ? space : space / 2)}
              </View>
            )
          } else {
            return null
          }
        })}
      </View>
    )
  }
}
