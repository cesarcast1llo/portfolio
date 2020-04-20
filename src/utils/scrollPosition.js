import { useState, useEffect } from 'react';

const useScrollPosition = () => {
  if (typeof window === 'undefined') {
    global.window = {};
  }

  const [scrollPos, setScrollPos] = useState(window.pageYOffset);

  const onScroll = () => {
    setScrollPos(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('load', onScroll);
    window.addEventListener('scroll', onScroll);
    return () => {
      // TODO find a fix for it constantly running
      window.removeEventListener('scroll', onScroll);
    };
  });

  return scrollPos;
};

export default useScrollPosition;
