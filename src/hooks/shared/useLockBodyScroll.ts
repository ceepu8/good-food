import { useLayoutEffect } from "react";

const useLockBodyScroll = (show: Boolean): void => {
  useLayoutEffect(() => {
    if (show) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [show]);
};

export default useLockBodyScroll;
