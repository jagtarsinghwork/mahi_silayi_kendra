'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import { User } from 'next-auth'
// import {User} from '@/types/auth/index';

// interface User {
//   name?: string | null
//   email?: string | null
//   image?: string | null
// }

interface UserNavProps {
  // user: Pick<User, 'name' | 'email' | 'image'> 
  user?: Pick<User, 'name' | 'email' | 'image'> | null

}

export function UserNav({ user }: UserNavProps) {
  if (!user) {
    return <div>...loading</div>
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user?.image || ''} alt={user?.name || ''} />
            <AvatarFallback className="bg-gradient-to-r from-blue-400 to-purple-500 text-white">
              {user?.name
                ? user?.name.split(' ').map((n) => n[0]).join('')
                : user?.email?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-gray-800 border-gray-700" align="end" forceMount>
        <div className="p-2">
          <p className="text-sm font-medium text-white">{user.name}</p>
          <p className="text-xs text-gray-400 truncate">{user.email}</p>
        </div>
        <DropdownMenuItem 
          className="text-gray-400 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700 cursor-pointer"
          onClick={() => signOut({ callbackUrl: '/' })}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}