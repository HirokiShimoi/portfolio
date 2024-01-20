import { useState, useEffect, useRef } from 'react';

const useOnScreen = (options) => {
  const ref = useRef();
  const [isOnScreen, setIsOnScreen] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false); // 新しい状態

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasBeenVisible) {
        setIsOnScreen(true);
        setHasBeenVisible(true); // 一度表示されたら状態を更新
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options, hasBeenVisible]);

  return [ref, isOnScreen];
};

export default useOnScreen;

