import { cn } from '@/lib/utils'
import { ArrowUpDown } from 'lucide-react'
import React from 'react'
import { Categories } from './categories'
import { SortPoput } from './sort-poput'
import { Container } from './container'

interface Props  {
    className?: string
}


export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
        <Container className="flex justify-between mt-2">
          <Categories />
          <SortPoput />
        </Container>
    </div>
  )
}