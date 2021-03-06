<div align="center">
  <img width="60%" src="https://raw.githubusercontent.com/ghostrick/kinako/master/images/banner.png?token=ACZLQK5QXMYMY6LP567TYIK5A63TS" />
</div>

<p align="center">
  <a href="https://www.npmjs.com/package/kinako"><img alt="npm version" src="https://img.shields.io/npm/v/kinako.svg?style=flat-square"></a>
  <a href="https://www.npmjs.com/package/kinako"><img alt="weekly downloads from npm" src="https://img.shields.io/npm/dw/kinako.svg?style=flat-square"></a>
</p>

## Installation

```bash
$ yarn add kinako
```

## Example
```bash
$ cd example
$ yarn
$ yarn dev
```

## Basic Usage
```jsx
// ...
import { Page, Presentation } from 'kinako'

const App = () => (
  <Presentation backgroundColor={'#111'} controllerColor={'#fff'} aspect={{width: 16, height: 9}}>
  
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
