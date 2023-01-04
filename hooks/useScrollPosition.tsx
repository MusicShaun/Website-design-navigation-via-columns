import {  useState } from "react";
import { useEventListener, useIsomorphicLayoutEffect } from 'usehooks-ts'

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updatePosition = () => {
    setScrollPosition(window.pageYOffset);
  }
  
  useEventListener("scroll", updatePosition);
  
  useIsomorphicLayoutEffect(() => {
    updatePosition()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return scrollPosition;
};