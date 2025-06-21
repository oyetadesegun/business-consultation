import Link from 'next/link'
import React, { ReactNode } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'


export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-200 bg-white">
        <Link href="/" className="flex items-center">
          <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">MB</span>
          </div>
          <span className="ml-2 text-xl font-bold text-gray-900">MyBiz.Com</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
            Cancel
          </Button>
          {/* <Button variant="ghost" onClick={() => router.back()} className="text-gray-600 hover:text-blue-600">
            Cancel
          </Button> */}
        </div>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}
