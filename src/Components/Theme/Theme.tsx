'use client'
import React, { useEffect} from 'react'

// Define props interface
interface ThemeProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

const Theme = ({isDark,setIsDark}:ThemeProps) => {


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

       window.dispatchEvent(new Event("themeChange"));
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