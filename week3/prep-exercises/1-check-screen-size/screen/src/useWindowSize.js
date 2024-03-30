import { useState, useEffect, useDebugValue } from "react";

function useWindowSize(minWidth, maxWidth) {
  const isClient = typeof window === "object";

  const getSize = () => ({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  });

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]); // Empty array ensures that effect is only run on mount and unmount

  useDebugValue(
    `${minWidth}px - ${maxWidth}px: ${
      windowSize.width >= minWidth && windowSize.width <= maxWidth
        ? "Inside Range"
        : "Outside Range"
    }`
  );

  return windowSize;
}

export { useWindowSize };
