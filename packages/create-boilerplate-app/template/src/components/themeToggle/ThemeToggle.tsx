'use client'

import classNames from 'classnames/bind'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import styles from './ThemeToggle.module.scss'

const cx = classNames.bind(styles)

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    const { theme, setTheme } = useTheme()

    return (
        <button
            className={cx('themeButton')}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            {mounted && theme === 'light' ? (
                <Sun className={cx('icon', 'sunIcon')} />
            ) : (
                <Moon className={cx('icon', 'moonIcon')} />
            )}
        </button>
    )
}
