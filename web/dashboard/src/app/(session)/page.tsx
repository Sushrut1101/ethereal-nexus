import { auth } from '@/auth';
import React from 'react';
import {getProjects} from "@/data/projects/actions";
import {getComponents} from "@/data/components/actions";
import {getUsers} from "@/data/users/actions";

import DashboardCards from "@/components/components/dashboard/DashboardCards";
import LatestComponentReleases from '@/components/components/dashboard/LatestComponentReleases';
import History from '@/components/components/dashboard/History';

export default async function Home() {
  const session = await auth();
  const userName = session?.user?.name;
  const projects = await getProjects(session?.user?.id);
  const components = await getComponents();
  const users = await getUsers();

  return (
    <div className="space-y-8 p-8">
      <h2 className="text-4xl font-semibold">Hi, {userName}</h2>
      <div className="mt-12 inline-flex">
        <DashboardCards components={components} projects={projects} users={users}></DashboardCards>
      </div>
      <div className="grid grid-cols-3 h-full mt-4 gap-4">
        <div className="border rounded-lg">
          <LatestComponentReleases></LatestComponentReleases>
        </div>
        <History></History>
      </div>

    </div>
  );
}
