import { cn } from '@/lib/utils'
import React from 'react'
import { Title } from './title'
import { FilterCheckbox } from './filter-chechbox'
import { Input } from '../ui'
import { RangeSlider } from '../ui/range-slider'
import { CheckBoxFiltersGroup } from './checkbox-filtres-group'

interface Props  {
    className?: string
}


export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
        <Title text='Фільтрація' size='sm' className='mb-5 font-bold' />

        <div className='flex flex-col gap-4'>
            <FilterCheckbox text="Можна забирати"  value="1" />
            <FilterCheckbox text="Новинки"  value="2" />
        </div>

        <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
            <div className='flex gap-3 mb-5'>
                <Input type='number' placeholder='0' min={0} max={1000} defaultValue={0}/>
                <Input type='number' min={100} max={1000} placeholder='1000'/>
            </div>

            <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
        </div>

        <CheckBoxFiltersGroup
            title='Інгредієнти'
            className='mt-5'
            limit={6}
            defaulItems={[
                {
                  text: 'Сирний соус',
                  value: '1',
                },
                {
                  text: 'Моцарела',
                  value: '2',
                },
                {
                  text: 'Часник',
                  value: '3',
                },
                {
                  text: 'Квашені огірки',
                  value: '4',
                },
                {
                  text: 'Червона цибуля',
                  value: '5',
                },
                {
                  text: 'Томати',
                  value: '6',
                },
              ]}
              items={[
                {
                  text: 'Сирний соус',
                  value: '1',
                },
                {
                  text: 'Моцарела',
                  value: '2',
                },
                {
                  text: 'Часник',
                  value: '3',
                },
                {
                  text: 'Квашені огірки',
                  value: '4',
                },
                {
                  text: 'Червона цибуля',
                  value: '5',
                },
                {
                  text: 'Томати',
                  value: '6',
                },
                {
                  text: 'Сирний соус',
                  value: '1',
                },
                {
                  text: 'Моцарела',
                  value: '2',
                },
                {
                  text: 'Часник',
                  value: '3',
                },
                {
                  text: 'Квашені огірки',
                  value: '4',
                },
                {
                  text: 'Червона цибуля',
                  value: '5',
                },
                {
                  text: 'Томати',
                  value: '6',
                },
              ]}
            searchInputPlaceholder='Пошук'    
        />
    </div>
  )
}