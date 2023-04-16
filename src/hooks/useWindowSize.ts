import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [WindowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight});

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize({width: window.innerWidth, height: window.innerHeight});
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return WindowSize;
}