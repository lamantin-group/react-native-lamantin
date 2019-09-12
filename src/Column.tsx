import React, { PureComponent } from 'react'
import { View, ViewStyle } from 'react-native'
import { isBoolean } from 'util'

interface ColumnProps {
  style: ViewStyle
  top: number
  bottom: number
  space: number
  separator: (
    space: number,
    isFirst: boolean,
    isLast: boolean
  ) => {
    top: number
    bottom: number
  }
}

export class Column extends PureComponent<ColumnProps> {
  static separatorDefault = (space: number, isFirst: boolean, isLast: boolean) => {
    return {
      top: space,
      bottom: isFirst ? 0 : space,
    }
  }

  static separatorBetween = (space: number, isFirst: boolean, isLast: boolean) => {
    return {
      top: isFirst ? 0 : isLast ? 0 : space,
      bottom: isFirst ? 0 : isLast ? 0 : space,
    }
  }

  static defaultProps = {
    mode: 'flex',
    top: null,
    bottom: null,
    style: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    space: 0,
    separator: Column.separatorBetween,
  }

  render() {
    const { style, space, children, separator } = this.props
    const childrenCount = children ? children.length : 0

    return (
      <View style={{ ...style, flexDirection: 'column' }}>
        {React.Children.map(children, (child, index) => {
          const isFirst = index === 0
          const isLast = index === childrenCount - 1
          const separatorStyle = separator(space, isFirst, isLast)
          if (child) {
            return (
              <View
                style={{
                  marginTop: separatorStyle.top,
                  marginBottom: separatorStyle.bottom,
                }}>
                {child}
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
