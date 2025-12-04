import { Menubar, MenubarMenu } from '../ui/menubar'
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
          
        </MenubarMenu>
      </div>
    </Menubar>
    
  )
}