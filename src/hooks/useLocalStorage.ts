'use client'

import React from 'react'

interface IUseLocalStorage<T> {
  key: string
  defaultValue: T
}

export function useLocalStorage<T>({
  key,
  defaultValue
}: IUseLocalStorage<T>): [T, React.Dispatch<React.SetStateAction<T>>, boolean] {
  const [isLoading, setIsLoading] = React.useState(true)

  const isMounted = React.useRef(false)
  const [value, setValue] = React.useState<T>(defaultValue)

  React.useEffect(() => {
    try {
      const item = window.localStorage.getItem(key)

      if (item) {
        setValue(JSON.parse(item))
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }

    return () => {
      isMounted.current = false
    }
  }, [key])

  React.useEffect(() => {
    if (isMounted.current) {
      window.localStorage.setItem(key, JSON.stringify(value))
    } else {
      isMounted.current = true
    }
  }, [key, value])

  return [value, setValue, isLoading]
}
