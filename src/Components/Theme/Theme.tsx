'use client'
import React, { useEffect, useState } from 'react'

const Theme = () => {

    const [isDark, setIsDark] = useState<boolean>(false)

    useEffect(() => {
        const saved = localStorage.getItem('theme')

        if(saved === 'dark'){
            setIsDark(true)

            document.documentElement.setAttribute('data-theme', 'dark')
        }
    },[isDark])

    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const dark = e.target.checked

        setIsDark(dark)

        document.documentElement.setAttribute('data-theme' , dark ? 'dark' : 'light')

        localStorage.setItem('theme',dark ? 'dark' : 'light')
    }
    return (
        <input
            type="checkbox"
            checked={isDark}
            className="toggle "
            onChange={handleToggle}
        />
    )
}

export default Theme