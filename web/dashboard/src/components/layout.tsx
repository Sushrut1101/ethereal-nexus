import { Toaster } from '@/components/ui/toaster';
import ThemePicker from '@/components/theme-picker';
import { UserNav } from '@/components/user/user-nav';
import { MainNav } from '@/components/ui/main-nav/main-nav';
import { Loading } from '@/components/ui/loading';
import { NavLink } from '@/components/ui/main-nav/nav-link';
import LogoImage from '@/components/ui/logo-image';

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
            <aside className="w-60 p-8 border-r">
              <MainNav />
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
