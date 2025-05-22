import ShopPage from '@/components/ShopPage/ShopPage'
import { useTranslations } from 'next-intl'
import React from 'react'

const page = () => {
  const t = useTranslations('Common')
  return (
    <main className='max-w-10xl mx-auto'>
        <ShopPage/>
        <hr className='my-4 lg:my-6 border-gray-400'/>
        <p className="text-center text-gray-600 text-sm tracking-widest">{t('disclaimer_txt')}</p>
    </main>
  )
}

export default page