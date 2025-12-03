'use client'

import { useTheme } from 'next-themes'
import { GoSun, GoMoon } from 'react-icons/go'
import { Button } from '../ui/button'
import { useState } from 'react'

export default function ModeToggler() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

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



// 'use client'

// import { useTheme } from 'next-themes'
// import { GoSun, GoMoon } from 'react-icons/go'
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
// import { Button } from '../ui/button'

// export default function ModeToggler() {
//   const { theme, setTheme } = useTheme()

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button
//           variant='link'
//           size='icon'
//           onClick={() => setTheme(
//             theme === 'dark'
//               ? 'light'
//               : 'dark'
//           )}
//         >
//           {
//             theme === 'dark'
//               ? <GoSun className='light-icon' size={18} /> 
//               : <GoMoon className='dark-icon' />    
//           }          
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align='end'>
//         <DropdownMenuItem onClick={() => setTheme('light')}>
//            Light
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme('dark')}>
//           Dark
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }

