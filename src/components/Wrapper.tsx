/** @jsx jsx */
import React from 'react'
import { jsx, CSSObject } from '@emotion/core'
import Presentation from './Presentation'

type Props = {
  /**
   * Width of wrapper
   * @default '100vw'
   */
  width?: string
  /**
   * Height of wrapper
   * @default '100vh'
   */
  height?: string
  children: React.ReactElement<typeof Presentation>
}

const Wrapper: React.FC<Props> = ({ width, height, children }) => {
  const styles: CSSObject = {
    width: width || '100vw',
    height: height || '100vh',
    background: '#222',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '> *': {
      maxWidth: '100%',
      maxHeight: '100%'
    },
    '@media print': {
      width: 'auto',
      height: 'auto',
      display: 'block',
      '> *': {
        maxWidth: 'none',
        maxHeight: 'none'
      }
    }
  }

  return <div css={styles}>{children}</div>
}

export default Wrapper
