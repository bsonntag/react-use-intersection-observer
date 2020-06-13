# react-use-intersection-observer

React hook for using intersection observers.

## Installation

Using npm:

```sh
$ npm install --save react-use-intersection-observer
```

Using yarn:

```sh
$ yarn add react-use-intersection-observer
```

Since this module uses [React Hooks](https://reactjs.org/docs/hooks-intro.html),
to use this module you'll need to install at least version `16.8.0`
of `react` and `react-dom`:

```sh
$ yarn add react@^16.8.0 react-dom@^16.8.0
```

## Usage

```js
import React, { useRef } from 'react';
import useIntersectionObserver from 'react-use-intersection-observer';

function Example() {
  const ref = useRef();
  const [intersection] = useIntersectionObserver(ref);

  const style = {
    background: intersection && intersection.isIntersecting ? 'red' : 'blue',
    height: 50,
    width: 50
  };

  return <div style={style} />;
}
```

## API

```js
useIntersectionObserver(Ref, ?Object): Array<IntersectionObserverEntry>
```

Receives a ref and an optional object and returns a list of
[intersections](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)
reported by an [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver).

## Contributing

Please feel free to submit any issues or pull requests.

## License

MIT
