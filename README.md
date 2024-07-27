# Animease

[![npm version](https://img.shields.io/npm/v/animease)](https://www.npmjs.com/package/animease)
[![npm downloads/month](https://img.shields.io/npm/dm/animease)](https://www.npmjs.com/package/animease)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/animease/LICENSE)

Animease is a utility package designed to make using Framer Motion easier for React projects. It provides a simplified and more intuitive API for creating animations and transitions.

Made with ❤️ by [Rishabh Gokhe](https://github.com/rishabhgokhe)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [License](#license)

## Installation

You can install Animease via npm:

```sh
npm install animease framer-motion
```
>**Note** : `framer-motion` is a required dependency as Animease leverages it to provide its animation utilities.

## Usage

### Available Variants

The component supports the following values as variants:

- `div`
- `p`
- `a`
- `ul`
- `h1`
- `h2`
- `h3`

### Properties

The Component accepts the following properties:

- **`delay`**: *(Optional)* Specifies the delay before the animation starts, in seconds.
- **`duration`**: *(Optional)* Sets the duration of the animation, in seconds. Defaults to `0.5` seconds if not provided.
- **`variant`**: Determines the HTML element to render. This must be one of the available variants (`div`, `p`, `a`, `ul`, `h1`, `h2`, `h3`).

### Example Usage

Here’s a simple example to demonstrate how to use the `FadeDown` component:

```typescript
"use client";

import { FadeDown } from "animease";

const FadeDownCard = () => (
  <FadeDown variant='div' delay={0.3} className="fade-down-card">
    <div className="card-content">
      <h2 className="card-title">FadeDown Div Element</h2>
      <p className="card-description">
        This div will animate with a fade-down effect and a delay of 0.3 seconds.
      </p>
    </div>
  </FadeDown>
);

export default FadeDownCard;
```

## Contribution

- If you would like to contribute to the Animease project, please review our [CONTRIBUTING.md](CONTRIBUTING.md) file. This document outlines how to contribute effectively, including submitting issues, creating pull requests, and following project conventions.

## License

- Ensure that a `LICENSE` file is present in the repository to specify the terms under which the project is distributed. This file clarifies the legal aspects of using, modifying, and contributing to the project, ensuring transparency and compliance.

By adhering to these guidelines, you help maintain a well-organized and legally compliant project. Your contributions and feedback are highly appreciated!