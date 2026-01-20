import { GiAbstract059 } from 'react-icons/gi'
import { Menubar, MenubarMenu, MenubarTrigger } from '../ui/menubar'
import ModeToggler from './mode-toggler'
import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { RiDashboardHorizontalLine } from 'react-icons/ri'
import { MdLogin, MdLogout } from 'react-icons/md'
import { FiPlus } from 'react-icons/fi'
import { currentUser } from '@clerk/nextjs/server'

export default async function TopNav() {
  const user = await currentUser()
  
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
            <Link href='/business/add'>
              <span className='centre-items'>
                <FiPlus
                  size={16}
                  className='mr-2'
                />
                <span>Add Business</span>  
              </span>              
            </Link>
          </MenubarTrigger>
        </MenubarMenu>

        {user && (
          <MenubarMenu>
            <MenubarTrigger className='text-base font-normal'>
              <Link href='/dashboard'>
                <span className='centre-items'>
                  <RiDashboardHorizontalLine
                    size={16}
                    className='mr-2'
                  />
                  <span>Dashboard</span>  
                </span>          
              </Link>
            </MenubarTrigger>
          </MenubarMenu>
        )}

        <SignedOut>
          <span className='centre-items'>
            <MdLogin 
              size={16}
              className='mr-2'
            />
            <SignInButton />
          </span>          
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