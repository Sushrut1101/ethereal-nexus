import { Toaster } from '@/components/ui/toaster';
import ThemePicker from '@/components/theme-picker';
import { UserNav } from '@/components/user/user-nav';
import { Loading } from '@/components/ui/loading';
import { NavLink } from '@/components/ui/main-nav/nav-link';
import LogoImage from '@/components/ui/logo-image';
import { LateralMenu } from '@/components/ui/main-nav/lateralMenu';
import { SessionProvider } from 'next-auth/react';

export default function DashboardLayout({ children }: {
  children: React.ReactNode;
}) {

  return (
    <>
      <div className="container flex flex-col md:flex mt-2">
        <Loading>
          <div className="flex h-16 items-center px-8 border-b">
            <NavLink className="flex" href="/">
              <LogoImage />
            </NavLink>
            <div className="ml-auto flex items-center space-x-4">

              <ThemePicker />
              <UserNav />
            </div>
          </div>

          <div className="flex flex-1">
            <aside className="border-r">
              <SessionProvider>
                <LateralMenu></LateralMenu>
              </SessionProvider>
            </aside>
            <main className="flex-1 pt-8">
              {children}
            </main>
          </div>
          <Toaster />
        </Loading>
      </div>
    </>
  );
}
