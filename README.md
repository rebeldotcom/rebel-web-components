<!-- <div align="center" style="background-color: #222328;">
  <a href="https://rebel.com" >
    <img style="background: #000;" alt="Gatsby" src="https://github.com/rebeldotcom/rebel-web-components/blob/master/static/rebel.svg" width="60" />
  </a>
</div> -->

<h1 align="center">Rebel Web Components</h1>

<p align="center">React components with a focus on Simplicity and Accessibility</p>

<p align="center">
  <a aria-label="npm package" href="https://www.npmjs.com/package/@rebeldotcom/components">
    <img alt="" src="https://img.shields.io/npm/v/@rebeldotcom/components?style=for-the-badge">
  </a>
  <a aria-label="contributors graph" href="https://github.com/rebeldotcom/rebel-web-components/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/rebeldotcom/rebel-web-components?style=for-the-badge">
  </a>
  <a aria-label="last commit" href="https://github.com/rebeldotcom/rebel-web-components/commits/master">
    <img alt="" src=
  "https://img.shields.io/github/last-commit/rebeldotcom/rebel-web-components?style=for-the-badge">
  </a>
  
  <a aria-label="license" href="https://github.com/rebeldotcom/rebel-web-components/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/rebeldotcom/rebel-web-components?style=for-the-badge" alt="">
  </a>
</p>

## What’s In This Document

- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [The Theme](#the-theme)
- [The Components, Providers and Hooks](#the-components-providers-and-hooks)
- [License](#license)

## Dependencies

This [React](https://reactjs.org/) component library leverages [Styled Components](https://www.styled-components.com/) and [Styled System](https://styled-system.com/) as well as a few other key packages. In order to keep this package light and simple, we don't include them as main dependecies but rather as [peerDependencies](http://npm.github.io/using-pkgs-docs/package-json/types/peerdependencies.html)

They make our lives easier, but you'll have to make sure your own project includes them as well.

- [react and react-dom](https://reactjs.org/)
- [styled-components](https://www.styled-components.com/)
- [styled-system](https://styled-system.com/)
- [styled-normalize](https://github.com/sergeysova/styled-normalize)
- [styled-reset](https://github.com/zacanger/styled-reset)

## Installation

```sh
npm install --save react react-dom styled-components styled-system styled-normalize styled-reset @rebeldotcom/components
```

or

```sh
yarn add react react-dom styled-components styled-system styled-normalize styled-reset @rebeldotcom/components
```

## Usage

All of our components and providers are exported by name from `@rebeldotcom/components`, so you can import them with:

```js
import {
  Box,
  Button,
  Heading,
  Input,
  ThemeProvider,
  GlobalStyle,
} from '@rebeldotcom/components'
```

Rebel Components are built using styled-components and styled-system alongside a provided theme.

In order to use the components, you'll have to bring in the `<ThemeProvider>` and `<GlobalStyles>` into your project to wrap your UI elements.

#### Example

```jsx

import React from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  ThemeProvider,
  GlobalStyle
} from "@rebeldotcom/components";

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Box height="100vh" justifyContent="center" alignItems="center">
        <Box border={1} p={3} borderRadius="large" flexDirection="column">
          <Heading as="h1">My App here</Heading>
          <Input id="email" label="email address" />
          <Button
            id="click-me"
            onClick={() => console.log("clicked me")}
            ariaLabel="Click Me"
          >
            Click Me
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;

```

## The Theme

## The Components, Providers and Hooks

#### Components

- Box
- Badge
- Button
- Divider
- Heading
- HtmlBlock
- Icon
- Image (Not included anymore. Lives in CMS)
- ImageBG (Not included anymore. Lives in CMS)
- Input
- Link
- Loader
- Message
- Section
- SectionBG (Not included anymore. Lives in CMS)
- Skeleton
- Text

#### Providers

- ModalProvider
- ThemeProvider

#### Hooks

- useModal

## License

Licensed under the [MIT License](./LICENSE).
