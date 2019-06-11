import React from 'react'
import { render } from 'react-dom'
import { Page, Presentation } from 'kinako'
import styled from '@emotion/styled'

type Props = {}

const App: React.FC<Props> = () => {
  const CenterDiv = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  return (
    <Presentation
      aspect={{ width: 16, height: 9 }}
      transitionSpeed={0.4}
      controllerSize={48}
    >
      <Page>
        <CenterDiv>
          <h1>Hello, I am kinako</h1>
        </CenterDiv>
      </Page>
      <Page>
        <CenterDiv>
          <h1>Fin.</h1>
        </CenterDiv>
      </Page>
    </Presentation>
  )
}

render(<App />, document.getElementById('root'))
