import { GiAbstract059 } from 'react-icons/gi'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from '../ui/menubar'
import ModeToggler from './mode-toggler'
import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'

export default function TopNav() {
  return (
    <Menubar className='py-6 px-4'>
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
            <Link href='/dashboard'>
              Dashboard
            </Link>
          </MenubarTrigger>
        </MenubarMenu>

        <SignedOut>
          <SignInButton>
            <Button variant='mainBtn' size='sm'>
              Login
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        
        <MenubarMenu>
          <ModeToggler />
        </MenubarMenu>

      </div>
    </Menubar>
    
  )
}