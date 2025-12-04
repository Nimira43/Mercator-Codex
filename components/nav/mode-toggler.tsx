'use client'

import { useTheme } from 'next-themes'
import { GoSun, GoMoon } from 'react-icons/go'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'

export default function ModeToggler() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Button
      variant='link'
      size='icon'
      onClick={() => setTheme(
        theme === 'dark'
          ? 'light'
          : 'dark'
      )}
    >
      {
        theme === 'dark'
          ? <GoSun size={18} /> 
          : <GoMoon size={18} />
      }          
    </Button>
  )
}