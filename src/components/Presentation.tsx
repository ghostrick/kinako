/** @jsx jsx */
import React, { useState, useMemo, useEffect } from 'react'
import { jsx, CSSObject, Global } from '@emotion/core'
import Right from 'react-feather/dist/icons/chevron-right'
import Left from 'react-feather/dist/icons/chevron-left'
import Page from './Page'

type Props = {
  /**
   * Index of first page
   * @default 1
   */
  currentIndex?: number
  /**
   * aspect ratio {height, width}
   */
  aspect: { height: number; width: number }
  /**
   * background color
   */
  backgroundColor?: string
  /**
   * Color of prev/next button
   */
  controllerColor?: string
  /**
   * Size of prev/next button
   * @default 32
   */
  controllerSize?: number
  /**
   * (seconds)
   * @default 1
   */
  transitionSpeed?: number
  children: React.ReactElement<typeof Page>[]
}

const Presentation: React.FC<Props> = ({
  aspect,
  children,
  backgroundColor,
  controllerColor,
  controllerSize,
  currentIndex,
  transitionSpeed
}) => {
  const [current, setCurrent] = useState(1)
  const pageTotal = useMemo(
    () => (Array.isArray(children) ? children.length : 1),
    [children]
  )
  const isLast = useMemo(() => pageTotal === current, [current])

  useEffect(() => {
    if (currentIndex !== undefined) {
      setCurrent(currentIndex)
    }
  }, [currentIndex])

  if (current > pageTotal || current < 1) {
    throw 'Page does not exist'
  }

  const controllerStyles: CSSObject = {
    position: 'absolute',
    bottom: 4,
    right: 8,
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: controllerColor || '#000',
    '> li': {
      cursor: 'pointer',
      '> svg': {
        width: controllerSize || 32,
        height: controllerSize || 32
      }
    },
    '@media print': {
      display: 'none'
    }
  }

  const contents = children.map((c, i) => (
    <div
      key={i}
      css={{
        minWidth: '100%',
        width: '100%',
        height: 'auto',
        position: 'relative',
        pageBreakAfter: 'always',
        '&:after': {
          content: `""`,
          paddingTop: (aspect.height / aspect.width) * 100 + '%',
          display: 'block'
        },
        '> *': {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: backgroundColor || '#fff'
        }
      }}
    >
      {c}
    </div>
  ))

  return (
    <div
      css={{
        overflow: 'hidden',
        position: 'relative',
        '@media print': { overflow: 'hidden' }
      }}
    >
      <Global
        styles={{
          '@media print': {
            '@page': {
              margin: 0,
              size: `${aspect.width}in ${aspect.height}in`
            },
            '*': {
              '-webkit-print-color-adjust': 'exact',
              'page-break-after': 'avoid'
            }
          }
        }}
      />
      <main
        css={{
          display: 'flex',
          position: 'relative',
          left: (current - 1) * 100 * -1 + '%',
          transition: `all ${
            transitionSpeed === undefined ? 1 : transitionSpeed
          }s`,
          '@media print': {
            left: 0,
            display: 'block'
          }
        }}
      >
        {contents}
      </main>
      <ul css={controllerStyles}>
        <li
          onClick={() => current > 1 && setCurrent(current - 1)}
          css={current < 2 ? { opacity: 0.3 } : {}}
        >
          <Left />
        </li>
        <li
          onClick={() => !isLast && setCurrent(current + 1)}
          css={isLast ? { opacity: 0.3 } : {}}
        >
          <Right />
        </li>
      </ul>
    </div>
  )
}

export default Presentation
