import { GiAbstract059 } from 'react-icons/gi'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from '../ui/menubar'
import ModeToggler from './mode-toggler'
import Link from 'next/link'

export default function TopNav() {
  return (
    <Menubar>
      <div className='flex-none'>
        <MenubarMenu>
          <Link
            href='/'
            className='centre gap-1 cursor-pointer'
          >
            <GiAbstract059 className='text-main text-2xl' />
            <span className='logo text-2xl text-main-dark dark:text-main-light'>Mercator Codex</span>
          </Link>
          
        </MenubarMenu>
      </div>
      
      <div className='centre-items flex-grow justify-end gap-1'>
        
        <MenubarMenu>
          <MenubarTrigger className='text-base font-normal'>
            Dashboard
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Menu Item 1</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Menu Item 2</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <ModeToggler />
        </MenubarMenu>

      </div>
    </Menubar>
    
  )
}