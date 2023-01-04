import { useEffect, useState } from "react"
import { useEventListener, useIsomorphicLayoutEffect } from 'usehooks-ts'



export function useScrollDirection() {

  
  const [scrollDirection, setScrollDirection] = useState('')
  let lastScrollY: number;

  useEffect(() => {
    lastScrollY = window.pageYOffset
  }, []) 

  const updateScrollDirection = () => {
    const scrollY = window.pageYOffset
    const direction = scrollY > lastScrollY ? 'down' : 'up'

    if (direction !== scrollDirection) {
      if (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10) {
        setScrollDirection(direction)
      }
    } 
    lastScrollY = scrollY > 0 ? scrollY : 0
  }

  useEventListener('scroll', updateScrollDirection)

  useIsomorphicLayoutEffect(() => {
    updateScrollDirection()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return scrollDirection
}
