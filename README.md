# react-use-intersection-observer

React hook for using intersection observers.

## Disclaimer

This module uses the upcoming [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
which is **subject to change** until released to a final version.

This means that the API of this module is also subject to change.
Please **don't** use it on a production application.

## Installation

Using npm:

```sh
$ npm install --save react-use-intersection-observer
```

Using yarn:

```sh
$ yarn add react-use-intersection-observer
```

Since this module uses React's upcoming Hooks feature,
to try this out you'll need to install the `16.7.0-alpha.0` version
of `react` and `react-dom`:

```sh
$ yarn add react@16.7.0-alpha.0 react-dom@16.7.0-alpha.0
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
