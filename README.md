<div align="center">
  <img width="60%" src="https://raw.githubusercontent.com/ghostrick/kinako/master/images/banner.png?token=ACZLQK5QXMYMY6LP567TYIK5A63TS" />
</div>

## Installation

```bash
$ yarn add kinako
```

## Basic Usage
```jsx
// ...
import { Page, Presentation } from 'kinako'

const App = () => (
  <Presentation width={'500px'} height={'350px'} backgroundColor={'#111'} controllerColor={'#fff'} aspect={{width: 16, height: 9}}>
  
    <Page isCentering={true}>
      <h1 style={{color: '#fff'}}>Hello.</h1>
    </Page>
  
    <Page isCentering={true}>
      <h1 style={{color: '#fff'}}>Fin.</h1>
    </Page>
  
  </Presentation>
)

// ...

```

## Documentation
https://ghostrick.github.io/kinako

## PDF Export
When you open the in-browser print dialog, dedicated CSS is applied.


## Bugs
Use the GitHub Issues.

## License
MIT
