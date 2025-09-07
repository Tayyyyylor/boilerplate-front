'use client'

import { useTranslations } from 'next-intl'
import React from 'react'
import { ThemeToggle } from '../themeToggle/ThemeToggle'

const Homepage = () => {
    const t = useTranslations('HomePage')
    return (
        <>
            <h1>{t('title')}</h1>
            <ThemeToggle />
        </>
    )
}

export default Homepage
