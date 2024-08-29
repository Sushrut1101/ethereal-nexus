'use client';

import { NavLink } from '@/components/ui/main-nav/nav-link';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import ProjectsIcon from '@/components/ui/icons/ProjectsIcon';
import ComponentsIcon from '@/components/ui/icons/ComponentsIcon';
import ApiDocumentationIcon from '@/components/ui/icons/ApiDocumentationIcon';
import UserNavIcon from '@/components/ui/icons/UserNavIcon';
import MenuExpandIcon from '@/components/ui/icons/MenuExpandIcon';

export function LateralMenu({className = "", ...props } : React.HTMLAttributes<HTMLElement>) {
  const { data } = useSession()
  const [open, setOpen] = useState(false);

  const handle = () => {
    setOpen(!open)
    console.log('open: ', open)
  }
  return (
    <div className={`p-5 ${open ? 'w-50 ' : ''}`}>

      <nav
        className={cn('pt-5', className)}
        {...props}
      >
        <div
          className="justify-center flex pb-5"
          onClick={async () => {
            handle();
          }}
        >
          <MenuExpandIcon width="24" height="24"></MenuExpandIcon>
        </div>
        <div className="space-y-4 w-fit">

          <NavLink className={`p-2 flex ${open ? 'w-[176px]' : ''}`} href="/projects">
            <div className={`${open ? 'mr-2' : ''}`}>
              <ProjectsIcon width={32} height={32} />
            </div>
            <span>{open ? 'Projects' : ''}</span>
          </NavLink>

          <NavLink className={`p-2 flex ${open ? 'w-[176px]' : ''}`} href="/components">
            <div className={`${open ? 'mr-2' : ''}`}>
              <ComponentsIcon width={32} height={32} />
            </div>
            <span>{open ? 'Components' : ''}</span>
          </NavLink>

          <NavLink
            className={`p-2 flex ${open ? 'w-[176px]' : ''}`}
            rel="noreferrer noopener"
            target="_blank"
            href="https://diconium.github.io/ethereal-nexus/"
          >
            <div className={`${open ? 'mr-2' : ''}`}>
              <ApiDocumentationIcon width={32} height={32} />
            </div>
            <span>{open ? 'Documents' : ''}</span>
          </NavLink>
          {data?.user?.role === 'admin' && (
            <NavLink className={`p-2 flex ${open ? 'w-[176px]' : ''}`} href="/users">
              <div className={`${open ? 'mr-2' : ''}`}>
                <UserNavIcon width={32} height={32} />
              </div>
              <span>{open ? 'Users' : ''}</span>
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  )
    ;
}
