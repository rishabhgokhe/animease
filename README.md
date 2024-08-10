# Animease

[![npm version](https://img.shields.io/npm/v/animease)](https://www.npmjs.com/package/animease)
[![npm downloads/month](https://img.shields.io/npm/dm/animease)](https://www.npmjs.com/package/animease)
![License](https://img.shields.io/github/license/rishabhgokhe/animease?color=blue)
![Beta](https://img.shields.io/badge/status-beta-yellow)
![Docs](https://img.shields.io/badge/docs-%E2%9C%94-brightgreen)

Animease is a utility package designed to make using animations easier for React projects. It provides a simplified react components for creating animations and transitions.

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

### Currently Available Animations

#### Fade Animations - [Preview](https://codesandbox.io/embed/87ftmt?view=preview)

1. **`FadeUp`** - Animates the component by fading it up after reload.
2. **`FadeDown`** - Animates the component by fading it down after reload.
3. **`FadeRight`** - Animates the component by fading it to the right after reload.
4. **`FadeLeft`** - Animates the component by fading it to the left after reload.

#### SVG Animations - [Preview](https://codesandbox.io/embed/sygz3x?view=preview&module=%2Fsrc%2FApp.tsx)

1. **`AnimateSvgPath`** - Animates SVG paths to create smooth transitions.

#### Parallax Animations - [Preview]()

1. **`ParallaxImageAndText`** - Creates a parallax effect when scrolling between an image and any JSX div (text recommended). 

### Available Variants

The `FadeAnimations` component supports the following HTML element variants:

- `div`
- `p`
- `a`
- `ul`
- `h1`
- `h2`
- `h3`

### Properties for Fade Animations

The component accepts the following properties:

- **`delay`** (number) : *(Optional)* Specifies the delay before the animation starts, in seconds.
- **`duration`** (number) : *(Optional)* Sets the duration of the animation, in seconds. Defaults to `0.5` seconds if not provided.
- **`variant`**: Determines the HTML element to render. This must be one of the available variants (`div`, `p`, `a`, `ul`, `h1`, `h2`, `h3`).
- **`children`** (React.ReactNode) : A JSX component div can be placed in between components like `Fade Animations` and `ParallaxImageAndText` as children.
- **`exitAnimation`** (boolean) : *(Optional)* Whether to apply the exit animation. Defaults to `false`.

### Properties for SVG Animations

The component accepts the following properties:

- **`fillColor`** (string) : *(Optional)* Specifies the color to fill the SVG path after animation (e.g., `rgb(255,0,0)` or `#ff0000`).
- **`d`** (string) : stores the path to be animated 
- **`duration`** (number) : *(Optional)* Sets the duration of the animation, in seconds. Defaults to `2` seconds if not provided.

### Properties for Parallax Animations

The component accepts the following properties:

- **`imageSrc`** (string) : Specifies the location of the image.
- **`altText`** (string) : *(Optional)* Alternate description of the image.
- **`children`** (React.ReactNode) : A JSX component div can be placed in between components like `Fade Animations` and `ParallaxImageAndText` as children.


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

## Upcoming Animations

- **Scroll-Based Animations**: Enhancing user engagement with animations that respond to scrolling actions.
- **Parallax Scrolling**: Adding depth and motion to the background elements as you scroll.
- **Advanced Easing Functions**: Introducing customizable easing options for more refined animation control.
- **Interactive Animations**: Creating animations that activate based on user interactions for a more dynamic experience.

We’re working hard to roll these out and make your animations even more powerful!

## License

- Ensure that a `LICENSE` file is present in the repository to specify the terms under which the project is distributed. This file clarifies the legal aspects of using, modifying, and contributing to the project, ensuring transparency and compliance.

By adhering to these guidelines, you help maintain a well-organized and legally compliant project. Your contributions and feedback are highly appreciated!

## <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWxuNTJlaTIwcWp6Mmx4ODl5dXgxbThqNnI5eWh3YmIwMnZhbWp5MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/7NgYelDPXmzbzxrKsj/giphy.gif" width=40px /> Connect with Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/rishabh-gokhe-22168b287)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://portfolio-rishabhgokhe.vercel.app/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:rishabhgokhe20contact@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rishabhgokhe)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=x&logoColor=white)](https://twitter.com/rishabhgokhe)
[![Instagram](https://img.shields.io/badge/Instagram-DD2A7B?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/rishabh_gokhe)

**Email Address** : [rishabhgokhe20contact@gmail.com](mailto:rishabhgokhe20contact@gmail.com)