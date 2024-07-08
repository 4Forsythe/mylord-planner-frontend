'use client'

import React from 'react'

export function useOutside(state: boolean) {
  const [isVisible, setIsVisible] = React.useState(state)

  const ref = React.useRef<HTMLDivElement>(null)

  const onClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsVisible(false)
    }
  }

  React.useEffect(() => {
    document.addEventListener('click', onClickOutside, true)

    return () => {
      document.removeEventListener('click', onClickOutside, true)
    }
  }, [])

  return { ref, isVisible, setIsVisible }
}
