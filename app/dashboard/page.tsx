import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import SideBar from "@/components/layout/SideBar"
import { SignOut } from "@/components/SignOut"

export default function DashboardPage() {

  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-200 bg-white">
        <Link href="/" className="flex items-center">
          <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">MB</span>
          </div>
          <span className="ml-2 text-xl font-bold text-gray-900">MyBiz.Com</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Link href="/get-help">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Help</Button>
          </Link>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <div className="flex flex-1">
        <main className="flex-1 overflow-auto p-4 md:p-6 bg-gray-50">
          <SideBar />
          <div className="mt-3">
            <SignOut />
          </div>
        </main>
      </div>
    </div>
  )
}
