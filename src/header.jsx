import React, { useState, useCallback, useContext } from "react";
import { sharedIntersectionObserverContext } from './sharedIntersectionObserver';

const Header = () => {
  const { observe } = useContext(sharedIntersectionObserverContext);
  const [visibleItems, setVisibleItems] = useState(new Set());

  // Memoize the intersection callback to prevent unnecessary recreations
  const handleIntersection = (entry) => {
    setVisibleItems((prev) => {
      const next = new Set(prev);
      entry.isIntersecting ? next.add(1) : next.delete(1);
      console.log(next);
      return next;
    });
  }

  // Memoize the ref callback to observe once
  const headerRef = useCallback((el) => {
    if (el) observe(el, handleIntersection);
  }, []); // Dependencies are stable

  return (
    <section style={{ padding: '300px 0', height: '300vh', marginTop: '300vh' }}>
      <h1
        ref={headerRef}
        style={{
          backgroundColor: visibleItems.has(1) ? 'blue' : 'red',
          padding: '300px 0'
        }}
      >Main Heading!</h1>
    </section>
  );
};

export default Header;