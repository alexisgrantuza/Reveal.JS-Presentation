---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# some information about your slides (markdown enabled)
title: Welcome to Slidev
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# take snapshot for each slide in the overview
overviewSnapshots: true
---

<div class="flex items-center space-x-4 ml-28">
  <h1>Introduction to React.js</h1>
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React.js Logo" class="h-10 w-10 rounded animate-bounce-alt animate-count-infinite animate-duration-1s" />
</div>

<p>A Modern JavaScript Library for Building User Interfaces</p>

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    <carbon:arrow-right class="inline" />
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

<div class="flex flex-col justify-center mt-[20%]">
  <h1>What is React.js?</h1>
  <p>React.js is an open-source JavaScript library for building user interfaces, maintained by Facebook and a community of developers. This component-based architecture allows for the development of highly maintainable and flexible applications, where each part of the UI is broken into smaller, independent components that manage their own state. As a result, React promotes code reuse, faster development, and ease of debugging.</p>
</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
Here is another comment.
-->

---

# Why Use React?

Build dynamic user interfaces with clear, readable code.

```html{all|1|2|3|4|5|6|7|all} twoslash
⚛️ Component-Based - Build encapsulated components that manage their own state and compose them to create complex UIs
🚀 Fast and Efficient - Uses a virtual DOM to update only the necessary parts of the page, improving performance
💻 Developer Tools - Powerful developer tools for debugging, including React DevTools
🔄 Reusable Code - Write components once and reuse them across your application for consistency and efficiency
🧩 Rich Ecosystem - Leverage a large ecosystem of libraries for routing, state management, and more
🌐 Cross-Platform - Build web, mobile, and desktop apps with React (React Native, Electron)
🎯 Strong Community - Supported by a vast community, with plenty of resources and learning materials
```

---

# React’s Core Concepts

```js {all|6|7-8|9|11-12|14-20|all} twoslash
// Components: Building blocks of a React app. {Functional Components, Class Components}
// JSX: JavaScript syntax extension that allows writing HTML within JavaScript.
// State & Props: Data that influences rendering.
// Lifecycle Methods: Control over component behavior during different stages.

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default App;
```

<arrow v-click="[5, 6]" x1="650" y1="170" x2="450" y2="334" color="#953" width="2" arrowSize="1" />

<!-- Inline style -->
<style>
.footnotes-sep {
  @apply mt-5 opacity-10;
}
.footnotes {
  @apply text-xm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>

---

# Components: The Heart of React

```js {all}
Functional vs Class Components:
 - Functional: Simpler, with hooks.
 - Class: Stateful, with lifecycle methods (older).
```

````md magic-move {lines: true}
```js {all}
// step 1
function Welcome() {
  return ();
}
```

```js {*|3|*}
// step 2
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

```js
// step 3

import './App.css'

function App() {

  return ();
}

export default App

```

```js {*|8|*}
// Step 4

import "./App.css";

function App() {
  return (
    <>
      <Welcome name={"Alexis"} />
    </>
  );
}

export default App;
```
````

<arrow v-click="[2, 3]" x1="650" y1="170" x2="370" y2="223" color="#953" width="2" arrowSize="1" />

---

# JSX: JavaScript + XML

<div grid="~ cols-2 gap-4">
<div>

What is JSX?

```
- JSX (JavaScript XML) is a syntax used in React
that lets you write HTML-like code inside JavaScript.
It makes it easier to create and visualize user
interfaces by combining the logic and layout in one
place.

- JSX: Beside the code, we are using JSX,
which allows us to write HTML-like code inside
our JavaScript files.

  * The <h1> and <p> tags are JSX
  elements that will be rendered as HTML.

- Functional Component: The Greeting component is a
functional component that returns some JSX,
which represents the UI.
```

</div>
<div>

```jsx
import React from "react";

// Simple functional component using JSX
const Greeting = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Welcome to learning React with JSX.</p>
    </div>
  );
};

// Usage
export default function App() {
  return <Greeting />;
}
```

</div>
</div>

<!--
Presenter note with **bold**, *italic*, and ~~striked~~ text.

Also, HTML elements are valid:
<div class="flex w-full">
  <span style="flex-grow: 1;">Left content</span>
  <span>Right content</span>
</div>
-->

---

# JS to Library/Frameworks

To transition smoothly into `Library/Frameworks,` a solid understanding of JavaScript fundamentals is essential.

<v-click>

JavaScript Basics - <span v-mark.red="2">Variables & Data Types, Operators, Conditional Statements, Loops</span>

Functions and Scope - <span v-mark.red="3">Function Declarations and Arrow Functions, Parameters and Arguments</span>

ES6+ Features - <span v-mark.red="4">Template Literals, Destructuring Assignment, Spread and Rest Operators,
Modules (import/export), Default Parameters, Shorthand Syntax</span>

Arrays and Objects - <span v-mark.red="5">Array Methods, Object Manipulation</span>

<span v-mark.circle.orange="6"> DOM Manipulation </span>

Asynchronous JavaScript - <span v-mark.red="7">Promises, Async/Await, Fetch API</span>

Event Handling - <span v-mark.red="8">Event Listeners</span>

JSON - <span v-mark.red="9">Understanding how to parse and stringify JSON is important when working with APIs.</span>

</v-click>

<div mt-20 v-click>

[Learn more](https://sli.dev/guide/animations#click-animation)

</div>

---

# Tech Stack

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }"
  :click-3="{ x: 80 }"
  :leave="{ x: 1000 }"
>
  The purpose of a User Interface (UI) is to provide a way for users to interact
  with a system, application, or device in an intuitive, efficient, and visually
  appealing way.
</div>
```

<div class="flex justify-center items-center gap-24 mt-12">
  <!-- Slidev Column -->
  <div class="flex flex-col items-center w-60 relative">
    <div class="relative w-40 h-40 mt-[-20px]">
      <img
        v-motion
        :initial="{ x: 800, y: -100, scale: 1.5, rotate: -50 }"
        :enter="final"
        class="absolute inset-0"
        src="https://sli.dev/logo-square.png"
        alt="Slidev Logo Square"
      />
      <img
        v-motion
        :initial="{ y: 500, x: -100, scale: 2 }"
        :enter="final"
        class="absolute inset-0"
        src="https://sli.dev/logo-circle.png"
        alt="Slidev Logo Circle"
      />
      <img
        v-motion
        :initial="{ x: 600, y: 400, scale: 2, rotate: 100 }"
        :enter="final"
        class="absolute inset-0"
        src="https://sli.dev/logo-triangle.png"
        alt="Slidev Logo Triangle"
      />
    </div>
    <div
      class="text-5xl text-[#2B90B6] -z-1 mt-[-20px]"
      v-motion
      :initial="{ x: -80, opacity: 0 }"
      :enter="{ x: 0, opacity: 1, transition: { delay: 2000, duration: 1000 } }"
    >
      Slidev
    </div>

  </div>

  <!-- Vue.js Column -->
  <div class="flex flex-col items-center w-60 relative">
    <img
      v-motion
      :initial="{ x: -600, y: 100, scale: 2, rotate: 100 }"
      :enter="final"
      class="h-25 mb-6"
      src="https://play.vuejs.org/logo.svg"
      alt="Vue.js Logo"
    />
    <div
      class="text-5xl text-[#42b883] mt-[-15px]"
      v-motion
      :initial="{ x: 80, opacity: 0 }"
      :enter="{ x: 0, opacity: 1, transition: { delay: 2000, duration: 1000 } }"
    >
      Vue.js
    </div>
  </div>
  <div class="flex flex-col items-center w-60 relative">
    <img
      v-motion
      :initial="{ x: -600, y: 100, scale: 2, rotate: -150 }"
      :enter="final"
      class="h-25 mb-6"
      src="https://unocss.dev/logo.svg"
      alt="Vue.js Logo"
    />
    <div
      class="text-5xl text-[#CCCCCC] mt-[-15px]"
      v-motion
      :initial="{ x: 80, opacity: 0 }"
      :enter="{ x: 0, opacity: 1, transition: { delay: 2000, duration: 1000 } }"
    >
      UnoCSS
    </div>
  </div>
</div>

<!-- vue script setup scripts can be directly used in markdown, and will only affects current page -->
<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>

---

# Activity:

<img src="https://code.visualstudio.com/assets/docs/nodejs/reactjs/markdown-preview.png" />

---

```ts {monaco}
import { ref } from "vue";
import { emptyArray } from "./external";

const arr = ref(emptyArray(10));
```

```ts {monaco-run}
import { version } from "vue";
import { emptyArray, sayHello } from "./external";

sayHello();
console.log(`vue ${version}`);
console.log(
  emptyArray<number>(10).reduce(
    (fib) => [...fib, fib.at(-1)! + fib.at(-2)!],
    [1, 1]
  )
);
```

---

# Thank you for Listening... kalamue ah tama na spelling ko!

<PoweredBySlidev mt-10 />
