import { render } from 'react-dom';
import React, { useRef } from 'react';
import useIntersectionObserver from '../src';

function buildThresholdList() {
  const thresholds = [];
  const numSteps = 20;

  for (let i = 1.0; i <= numSteps; i++) {
    const ratio = i / numSteps;

    thresholds.push(ratio);
  }

  thresholds.push(0);

  return thresholds;
}

function times(number, callback) {
  const result = [];

  for (let i = 0; i < number; i++) {
    result.push(callback(i));
  }

  return result;
}

function getBackgroundColor(intersection) {
  if (!intersection || !intersection.length) {
    return 'rgba(40, 40, 19)';
  }

  return `rgba(40, 40, 190, ${intersection[0].intersectionRatio})`;
}

const Box = () => {
  const ref = useRef();
  const intersections = useIntersectionObserver(ref, {
    root: null,
    rootMargin: '0px',
    threshold: buildThresholdList()
  });

  return (
    <div
      ref={ref}
      style={{
        background: getBackgroundColor(intersections)
      }}
    />
  );
};

const Example = () => (
  <>
    {times(50, i => (
      <Box key={i} />
    ))}
  </>
);

render(<Example />, document.getElementById('root'));
