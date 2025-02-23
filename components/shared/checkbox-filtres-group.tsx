'use client'
import React from 'react'
import { FilterChecboxProps, FilterCheckbox } from './filter-chechbox'
import { Input } from '../ui'

type Item = FilterChecboxProps

interface Props  {
    title: string;
    items: Item[];
    defaulItems: Item[];
    limit: number;
    searchInputPlaceholder?: string;
    onChange?: (value: string[]) => void;
    defaultValue?: string[]
    className?: string,
}


export const CheckBoxFiltersGroup: React.FC<Props> = ({ 
    title,
    items,
    defaulItems,
    limit,
    searchInputPlaceholder,
    className,
    onChange,
    defaultValue,
 }) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const list = showAll 
  ? items.filter((item) => item.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) 
  : defaulItems?.slice(0, limit);

  const onChangeSearchInput = (value: string) => {
    setSearchValue(value);
  }
  
  return (
    <div className={className}>
        <p className='font-bold mb-3'>{title}</p>

        {
            showAll &&         
            <div className='mb-5'>
                <Input onChange={e => onChangeSearchInput(e.target.value)} placeholder={searchInputPlaceholder} className='bg-gray-50 border-none'/>
            </div>
        }

        <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
            {list.map((item, index) => (
                <FilterCheckbox 
                    onCheckedChange={(ids) => console.log(ids)}
                    checked={false}
                    key={index}
                    value={item.value}
                    text={item.text}
                    endAdornment={item.endAdornment}
                />
            ))}
        </div>

        {
            items.length > limit && (
                <div className={showAll ? 'border-t' : 'border-t-neutral-100 mt-4'}>
                    <button onClick={() => setShowAll(!showAll)} className='text-primary mt-3'>
                        {showAll ? 'Сховати' : 'Показати все'}
                    </button>
                </div>
            )
        }
    </div>
  )
}