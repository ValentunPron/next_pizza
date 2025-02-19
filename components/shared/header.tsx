import { cn } from '@/lib/utils'
import React from 'react'
import { Container } from './container'

interface Props  {
    className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
        <Container className=''>

        </Container>
    </header>
  )
}