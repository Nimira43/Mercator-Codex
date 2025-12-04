import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from '../ui/menubar'
import ModeToggler from './mode-toggler'

export default function TopNav() {
  return (
    <Menubar>
      <div className='flex-none'>
        <MenubarMenu>
          Logo
        </MenubarMenu>
      </div>
      <div className='centre-items flex-grow justify-end gap-1'>
        <MenubarMenu>
          <MenubarTrigger className='text-base font-medium'>
            Dashboard
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Menu Item 1</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Menu Item 2</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </div>
    </Menubar>
    
  )
}