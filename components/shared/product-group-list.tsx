import React from 'react'
import { Title } from './title'
import { cn } from '@/lib/utils'
import { ProductCard } from './product-cart'

interface Props  {
    title: string,
    items: any[],
    className?: string,
    listClassName?: string,
    categoryId: number
}

export const ProductGroupList: React.FC<Props> = ({ title, items, className, listClassName, categoryId }) => {
  return (
    <div className={className}>
        <Title text={title} size='lg' className='font-extrabold mb-5'/>
        
        <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
            {items.map((product, index) => (
                <ProductCard 
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    imageUrl={product.imageUrl}
                    price={product.items[0].price}
                />
            ))}
        </div>
    </div>
  )
}