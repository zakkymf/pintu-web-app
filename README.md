# Pintu-Web

pintu-web-app is repository for the solutions of assignment to PINTU hiring process.

## Demo

You can check final result [here](https://reliable-bonbon-b934fa.netlify.app/)

## Getting Started

To get start this repo, just following these instructions below.

```
git clone https://github.com/zakkymf/pintu-web-app
cd pintu-web-app
yarn install / npm install
yarn start
```

## Structure

```
src
├── App.css
├── App.test.tsx
├── App.tsx
├── adapter
│   └── src
│       └── infrastructures
│           └── Http.ts
├── index.css
├── index.tsx
├── logo.svg
├── presentation
│   ├── assets
│   │   └── images
│   │       ├── bitcoin.png
│   │       ├── database.png
│   │       ├── index.ts
│   │       └── search.png
│   ├── components
│   │   ├── FilterBox
│   │   │   ├── FilterBox.tsx
│   │   │   └── index.ts
│   │   ├── Header
│   │   │   ├── Header.tsx
│   │   │   └── index.ts
│   │   ├── SearchBar
│   │   │   ├── SearchBar.tsx
│   │   │   └── index.ts
│   │   └── Table
│   │       ├── Content.tsx
│   │       ├── Head.tsx
│   │       ├── Table.tsx
│   │       ├── index.tsx
│   │       └── table.interface.ts
│   ├── constant
│   │   ├── filter.constant.ts
│   │   └── index.ts
│   ├── hooks
│   │   └── Market
│   │       └── useMarket.ts
│   └── pages
│       └── Market
│           ├── Market.tsx
│           └── index.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
└── setupTests.ts
```

## Build With
- [ReactJS](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/) for CSS
- [Netlify](https://www.netlify.com/)

## What's Next

- Refactor for better code
- Add some test for component or screen
- Improve UI Design
