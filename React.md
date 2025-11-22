# React with Vite — Complete Guide

> A practical, example-driven markdown guide covering the essentials of building React apps using Vite. This file focuses on core theory + runnable code examples for the fundamentals. Advanced topics are listed at the end (names only).

---

## Table of contents

1. Introduction
2. Why Vite + React?
3. Getting started (project setup)
4. Project structure
5. JSX and element rendering
6. Components

   * Functional components
   * Component composition
   * Props
   * Children
7. State and lifecycle

   * `useState`
   * `useEffect`
   * Lifecycle equivalents explained
8. Events & forms
9. Lists and keys
10. Conditional rendering
11. Context API
12. Routing (React Router example)
13. Side effects and data fetching
14. Refs and DOM access
15. Performance optimization

* `React.memo`, `useMemo`, `useCallback`

16. `useReducer` for complex state
17. Custom hooks
18. Error boundaries
19. Styling approaches

* CSS / CSS Modules
* Tailwind + Vite
* Styled components

20. TypeScript with React + Vite (brief)
21. Testing basics (Jest + React Testing Library)
22. Build & deploy
23. Best practices and folder conventions
24. Advanced topics (names only)

---

# 1. Introduction

React is a UI library for building component-based user interfaces. Vite is a modern build tool that provides lightning-fast development server startup and efficient bundling. Together they make a developer-friendly stack for building modern web apps.

This guide focuses on concepts and practical code snippets you can run immediately.

---

# 2. Why Vite + React?

* **Fast dev server**: instant cold starts thanks to native ES modules and on-demand compilation.
* **HMR (Hot Module Replacement)**: fast updates while keeping component state.
* **Optimized builds**: uses Rollup for production builds, producing performant output.
* **Simple configuration**: minimal config to get started, easy to add TypeScript, PostCSS, etc.

---

# 3. Getting started (project setup)

```bash
# create a React + Vite app
npm create vite@latest my-app -- --template react
# or with TypeScript
npm create vite@latest my-app -- --template react-ts

cd my-app
npm install
npm run dev
```

`package.json` important scripts (typical):

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

Open `http://localhost:5173` (default) to see the app.

---

# 4. Project structure

Typical minimal Vite + React structure:

```
my-app/
├─ index.html
├─ package.json
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ components/
│  │  └─ Hello.jsx
│  ├─ styles/
│  │  └─ index.css
│  └─ assets/
└─ vite.config.js
```

`main.jsx` boots React and renders the root component.

---

# 5. JSX and element rendering

JSX is syntactic sugar for `React.createElement`. It's not HTML — it's transformed into JS calls.

```jsx
// src/main.jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/index.css'

const container = document.getElementById('root')
createRoot(container).render(<App />)
```

Basic JSX rules:

* Use `className` instead of `class`.
* JSX expressions are wrapped in `{}`.
* Components must be capitalized to be treated as components.

---

# 6. Components

## Functional components

React now favors functional components + hooks.

```jsx
// src/components/Greeting.jsx
export default function Greeting({ name }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
    </div>
  )
}
```

## Component composition

Compose small components into larger UIs.

```jsx
// src/App.jsx
import Greeting from './components/Greeting'

export default function App() {
  return (
    <main>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </main>
  )
}
```

## Props

Props are immutable inputs from parent to child. Validate shape with PropTypes or TypeScript in larger apps.

## Children

`props.children` allows components to accept nested content.

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>
}

<Card>
  <h3>Title</h3>
  <p>Body</p>
</Card>
```

---

# 7. State and lifecycle

Functional components manage local state via hooks.

## useState

```jsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  )
}
```

## useEffect (lifecycle equivalents)

`useEffect` runs side-effects. Map of classical lifecycle to hooks:

* `componentDidMount` -> `useEffect(() => { ... }, [])`
* `componentDidUpdate` -> `useEffect(() => { ... })` (no deps)
* `componentWillUnmount` -> return a cleanup function from `useEffect`

```jsx
import { useEffect, useState } from 'react'

function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setSeconds(s => s + 1), 1000)
    return () => clearInterval(id) // cleanup on unmount
  }, [])

  return <div>Seconds: {seconds}</div>
}
```

Important: always declare dependencies array correctly to avoid stale closures or infinite loops.

---

# 8. Events & forms

Event handlers are camelCase: `onClick`, `onChange`.

```jsx
function NameForm() {
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Submitting: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  )
}
```

Controlled vs uncontrolled inputs:

* Controlled: component state drives the input value (`value` + `onChange`).
* Uncontrolled: use refs (`defaultValue`) and access DOM value when needed.

---

# 9. Lists and keys

When rendering lists, always provide stable keys.

```jsx
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  )
}
```

Keys should be unique and stable (avoid array index as key unless list is static).

---

# 10. Conditional rendering

Common patterns:

```jsx
// ternary
{isLoggedIn ? <Dashboard /> : <Login />}

// short-circuit
{items.length > 0 && <List items={items} />}
```

---

# 11. Context API

Context supplies global-ish values (theme, auth) without prop drilling.

```jsx
import { createContext, useContext } from 'react'

const ThemeContext = createContext('light')

function ThemedButton() {
  const theme = useContext(ThemeContext)
  return <button className={`btn-${theme}`}>Theme: {theme}</button>
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  )
}
```

Note: Context is not a replacement for state management libraries for complex global state.

---

# 12. Routing (React Router example)

Install `react-router-dom`:

```bash
npm install react-router-dom
```

Basic router setup with Vite:

```jsx
// src/main.jsx
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
```

```jsx
// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}
```

Vite works fine with SPA routers. For production deployment on static hosts, configure a fallback to `index.html` on the server.

---

# 13. Side effects and data fetching

Data fetching is a side effect and belongs in `useEffect` or a data fetching library.

Simple example with `fetch`:

```jsx
import { useState, useEffect } from 'react'

function UsersList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!res.ok) throw new Error('Network error')
        const data = await res.json()
        if (!cancelled) setUsers(data)
      } catch (err) {
        if (!cancelled) setError(err)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()

    return () => {
      cancelled = true
    }
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {String(error)}</div>
  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  )
}
```

For larger apps prefer libraries like React Query, SWR, or Apollo (GraphQL) to handle caching, retries, and background refetching.

---

# 14. Refs and DOM access

`useRef` gives a mutable container that survives renders and can hold DOM nodes.

```jsx
import { useRef } from 'react'

function FocusInput() {
  const inputRef = useRef(null)
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>Focus</button>
    </div>
  )
}
```

Refs can also hold mutable values that don't cause re-renders.

---

# 15. Performance optimization

### React.memo

Wrap function components to avoid re-render when props haven't changed.

```jsx
const PureItem = React.memo(function PureItem({ item }) {
  return <div>{item.label}</div>
})
```

### useMemo & useCallback

Cache expensive computations or stable function references.

```jsx
const computed = useMemo(() => expensiveCalc(items), [items])
const onClick = useCallback(() => doSomething(id), [id])
```

Avoid premature optimization—profile first.

---

# 16. useReducer for complex state

`useReducer` is useful for complex state logic or when next state depends on previous.

```jsx
import { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  )
}
```

For global complex apps combine `useReducer` with `Context`.

---

# 17. Custom hooks

Custom hooks let you extract reusable logic. They are just functions that use other hooks and start with `use`.

```jsx
// useFetch.js
import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    fetch(url)
      .then(r => r.json())
      .then(d => { if (!cancelled) setData(d) })
      .catch(err => { if (!cancelled) setError(err) })
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [url])

  return { data, loading, error }
}

// Usage
function Users() {
  const { data: users, loading } = useFetch('https://jsonplaceholder.typicode.com/users')
  if (loading) return <div>Loading...</div>
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
}
```

---

# 18. Error boundaries

Error boundaries are **class** components that catch render-time errors. Functional components cannot be error boundaries (as of now).

```jsx
import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error, info) {
    // log to error reporting service
    console.error(error, info)
  }
  render() {
    if (this.state.hasError) return <h1>Something went wrong.</h1>
    return this.props.children
  }
}

// Usage
// <ErrorBoundary>
//   <MyComponent />
// </ErrorBoundary>
```

---

# 19. Styling approaches

### Plain CSS

Vite supports importing CSS directly in JS files.

```js
import './styles/index.css'
```

### CSS Modules

Scoped class names by importing `styles.module.css` and using `styles.className`.

### Tailwind with Vite

Install Tailwind, configure `postcss.config.js`, and use utility classes in components. Great for rapid UI building.

### Styled Components / Emotion

CSS-in-JS libraries work with Vite; install the library and use tagged template literals to style components.

---

# 20. TypeScript with React + Vite (brief)

To create a TS project use the `react-ts` template. Example of typed component:

```tsx
// src/components/Person.tsx
type PersonProps = { name: string; age?: number }

export default function Person({ name, age }: PersonProps) {
  return <div>{name} {age && `(${age})`}</div>
}
```

Add `tsconfig.json` adjustments and enjoy type checking in the editor.

---

# 21. Testing basics (Jest + React Testing Library)

Install tools:

```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

Example test with React Testing Library + Vitest:

```jsx
// src/components/__tests__/Greeting.test.jsx
import { render, screen } from '@testing-library/react'
import Greeting from '../Greeting'

test('renders greeting', () => {
  render(<Greeting name="Test" />)
  expect(screen.getByText(/hello, test/i)).toBeInTheDocument()
})
```

Vite ecosystem often uses `vitest` for fast tests.

---

# 22. Build & deploy

Build for production:

```bash
npm run build
# preview build locally
npm run preview
```

The `dist` folder contains static assets. Deploy to Netlify, Vercel, GitHub Pages, or any static host. For client-side routers configure single-page fallback to `index.html`.

---

# 23. Best practices and folder conventions

* Keep components small and focused.
* Co-locate styles with components if it improves clarity.
* Use absolute imports or path aliases for large projects (configure `vite.config.js`).
* Prefer composition over inheritance.
* Lift state up only when needed; avoid unnecessary global state.
* Use linting (ESLint + plugin:react) and Prettier for consistent style.

Example alias in `vite.config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } }
})
```

---

# 24. Advanced topics (names only)

* Server-side rendering (SSR) with frameworks like Next.js or manual Vite SSR
* Static site generation (SSG)
* React Server Components
* Suspense for data fetching
* Concurrent features (Concurrent Mode primitives)
* Streaming SSR
* Code-splitting & dynamic imports
* Micro-frontends
* State machines (XState) integrations
* GraphQL/Apollo advanced patterns
* React Native
* React Three Fiber (3D in React)
* Performance profiling & flamegraphs
* WebAssembly + React integrations
* Component design systems & tokenization
* Accessibility (a11y) advanced patterns

---

## Final notes

This document covered the essentials you need to build modern React apps with Vite and included runnable examples for each key topic. Use this as a living reference: extract examples into small projects and experiment. The advanced topics list gives you direction for deeper study when you are ready.

Happy hacking — now go build and break stuff responsibly.
