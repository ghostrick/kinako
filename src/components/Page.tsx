/** @jsx jsx */
import { jsx } from '@emotion/core'

type Props = {
  children: React.ReactNode
  /**
   * If set to true, content will be centered.
   */
  isCentering?: boolean
}

const Page: React.FC<Props> = ({ children, isCentering }) => {
  return (
    <section
      css={{
        ...(isCentering
          ? { display: 'flex', justifyContent: 'center', alignItems: 'center' }
          : {}),
        height: '100%',
        width: '100%',
        zIndex: 0,
        overflow: 'hidden',
        pageBreakBefore: 'always'
      }}
    >
      {children}
    </section>
  )
}

export default Page
