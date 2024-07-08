'use client'

import React from 'react'

import { useQuery } from '@tanstack/react-query'

import type { ITimeBlock } from '@/types/time-block.types'
import { timeBlockService } from '@/services/time-block.service'

export function useTimeBlocks() {
  const { data, isLoading } = useQuery({
    queryKey: ['time-blocks'],
    queryFn: () => timeBlockService.getAll()
  })

  const [items, setItems] = React.useState<ITimeBlock[] | undefined>(data?.data)

  React.useEffect(() => {
    setItems(data?.data)
  }, [data?.data])

  return { items, setItems, isLoading }
}
