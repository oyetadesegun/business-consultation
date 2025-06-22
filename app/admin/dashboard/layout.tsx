import SideBar from '@/components/layout/SideBar'
import { SignOut } from '@/components/SignOut'
import React, { ReactNode } from 'react'

export default function DashBoardLayout({ children }: { children: ReactNode }) {
  return (
    <div className='flex'>
      <SideBar>
        <SignOut />
      </SideBar>
      <div className="mx-auto min-h-screen px-4 md:px-6 pt-8">
        {children}
      </div>
    </div>
  )
}
