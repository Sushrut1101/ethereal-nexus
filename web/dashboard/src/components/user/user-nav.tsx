import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { auth } from '@/auth';
import { UserNavLogout } from '@/components/user/user-nav-logout';
import { UserNavLogin } from '@/components/user/user-nav-login';
import Link from 'next/link';
import UserNavIcon from '@/components/ui/icons/UserNavIcon';

export async function UserNav() {
  const session = await auth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8">
          <Avatar className="h-8 w-8">
            <AvatarFallback>
              <UserNavIcon />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        {session ? (
          <>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  {session?.user?.name}
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  {session?.user?.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link href={`/users/${session?.user?.id}?tab=profile`}>
                <DropdownMenuItem>Profile</DropdownMenuItem>
              </Link>
              <Link href={`/users/${session?.user?.id}?tab=keys`}>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <UserNavLogout />
          </>
        ) : (
          <UserNavLogin />
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
