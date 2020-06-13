import { useEffect, useState } from 'react';

function useIntersectionObserver(target, options) {
  const [entries, setEntries] = useState([]);

  useEffect(
    () => {
      const observer = new IntersectionObserver(
        entries => setEntries(entries),
        options
      );

      observer.observe(target.current);

      return () => {
        observer.unobserve(target.current);
      };
    },
    [options, target]
  );

  return entries;
}

export default useIntersectionObserver;
