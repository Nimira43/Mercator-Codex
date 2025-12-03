'use client'

import { useTheme } from 'next-themes'
import { GoSun, GoMoon } from 'react-icons/go'
import { DropdownMenu, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'

export default function ModeToggler() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='icon'
        >

        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
    
  )
}