This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev

# Install node modules
npm i

# Run unit tests
npm test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech/Tools/Framework used

- Next.js 13
- React/JSX
- Fetch API
- SCSS
- Slick React Carousel (3rd party)
- Jest with React Testing Library
- TVMaze API
- Prettier

## Introduction

Next TV is a tv show app that gives users a dashboard overview of highly rated shows and shows by genre. It also allows users to browse the latest added TV shows and see more show information, such as summary, cast list and seasons list.

## NextJS 13

The app is built with NextJS which is a flexible React framework that gives you building blocks to create fast web applications. Using the latest version of NextJS (13), which allows for pre-rendering such as Server-side Rendering, as well as Client-side rendering. The new app/ directory introduces the ability to progressively render and incrementally stream rendered units of the UI to the client.

## Next TV App Features

- The Dashboard shows a list of Top Rated Shows, based on a minimum score of 9.
- The Dashboard shows various lists based on tv genre as a Carousel.
- Show details can be viewed by clicking on a tvserie showing cast, episodes and seasons info.
- A Search page where users can browse for shows by name
- A Loader icon can be viewed when components(data) are not yet loaded on the screen
- Responsive for tablet and mobile, and works cross browsers
  Data for all shows being shown on current date in selected area
- Users are able to view up to 18 episode cards per screen

### Routing

NextJS13 uses the new file-based routing: folders are used to define routes. A Route is a single path of nested folders, following the hierarchy from the root folder down to a final leaf folder that includes a page.js file. A URL path is created from this route segment. Furthermore, dynamic routing is used to create a dynamic paths.

### API

Next.js extends the native Web fetch() API.

### Styling, Accessibilty, BEM

- SCSS syntax was included for style preprocessing as it gives an efficient way of nesting and usage of various functions/mixins/variables etc. Also by categorizing the css files into primitives, elements, tools, utilities folders it is easy to use. I also tried (as much as possible) to optimise the class naming conventions according to BEM standards (Block Element Modifier).
- I tried to meet WCAG Accesibility standards as much as possible in given time. Used SiteImprov site accesibility checker

### Unit tests

Using Jest framework I included some basic unit tests.
