'use client'

import { useSortable } from '@dnd-kit/sortable'
import { UniqueIdentifier } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

import type { CSSProperties } from 'react'

export function useTimeBlockSortable(id: UniqueIdentifier) {
  const { attributes, listeners, transform, transition, setNodeRef } =
    useSortable({ id })

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return { attributes, listeners, style, setNodeRef }
}
