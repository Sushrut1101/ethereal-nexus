import { cn } from "@/lib/utils";
import { NavLink } from './nav-link';
import { auth } from '@/auth';
import ProjectsIcon from '@/components/ui/icons/ProjectsIcon';
import ComponentsIcon from '@/components/ui/icons/ComponentsIcon';
import ApiDocumentationIcon from '@/components/ui/icons/ApiDocumentationIcon';
import UserNavIcon from '@/components/ui/icons/UserNavIcon';

export async function MainNav({className = "", ...props } : React.HTMLAttributes<HTMLElement>) {
  const session = await auth()

  return (
    <nav
      className={cn('flex items-center justify-between w-full', className)}
      {...props}
    >
      <div className="space-y-4">
          <NavLink className="p-2 flex" href="/projects">
            <div className="mr-2">
              <ProjectsIcon width={32} height={32} />
            </div>
            <span>Projects</span>

          </NavLink>

          <NavLink className="p-2 flex" href="/components">
            <div className="mr-2">
              <ComponentsIcon width={32} height={32} />
            </div>
            <span>Components</span>
          </NavLink>

          <NavLink
            className="p-2 flex"
            rel="noreferrer noopener"
            target="_blank"
            href="https://diconium.github.io/ethereal-nexus/"
          >
            <div className="mr-2">
              <ApiDocumentationIcon width={32} height={32} />
            </div>
            <span>Documents</span>
          </NavLink>

          {session?.user?.role === 'admin' && (
            <NavLink className="p-2 flex" href="/users">
              <div className="mr-2">
                <UserNavIcon width={32} height={32} />
              </div>
              <span>Users</span>
            </NavLink>
          )}
        </div>
    </nav>
  );
}
