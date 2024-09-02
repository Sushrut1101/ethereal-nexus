import React from "react";
import { getProjects } from '@/data/projects/actions';
import { auth } from '@/auth';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ToogleIconViewProjects } from '@/components/ui/toogle-icon-view-projects';
import { UpdateProjectsView } from '@/components/ui/update-projects-view';
import { ProjectsViewProvider } from '@/components/components/projects/ProjectsViewProvider';
import { getMembersByResourceId } from '@/data/member/actions';
import NewProjectIcon from '@/components/ui/icons/NewProjectIcon';

export default async function Projects() {
  const session = await auth()
  const projects = await getProjects(session?.user?.id);

  if (projects.success) {
    projects.data = await Promise.all(
      projects.data.map(async (project) => {
        const membersData = await getMembersByResourceId(project.id, session?.user?.id);
        return { ...project, membersLength: membersData.success ? membersData.data.length : 0 };
      })
    );
  }

  return (
    <ProjectsViewProvider>
      <div className="h-full flex flex-col space-y-8 p-8">
        <div className="w-full flex">
          <div className="mr-auto space-y-4">
            <div className="flex items-baseline">
              <h2 className="text-4xl font-semibold">Active Projects</h2>
              <h4 className="text-2xl pl-2 text-[#D14600]">{projects.success ? `(${projects.data.length})`: ''}</h4>
            </div>
            <p>Manage your projects here</p>
          </div>
          {
            projects.success && (
              <Link
                href="/projects/new"
                passHref
                className={cn(
                  'mr-2',
                  session?.user?.role === 'viewer' && 'pointer-events-none opacity-50',
                )}
              >
                <NewProjectIcon width="40" height="40"></NewProjectIcon>
              </Link>
            )
          }
          <ToogleIconViewProjects></ToogleIconViewProjects>
        </div>
        <UpdateProjectsView projects={projects} />
      </div>
    </ProjectsViewProvider>
  );
}
