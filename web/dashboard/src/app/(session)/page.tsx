import { auth } from '@/auth';
import React from 'react';
import {getProjects} from "@/data/projects/actions";
import {getComponents} from "@/data/components/actions";
import {getUsers} from "@/data/users/actions";

import DashboardCards from "@/components/components/dashboard/DashboardCards";

export default async function Home() {
  const session = await auth();
  const userName = session?.user?.name;
  const projects = await getProjects(session?.user?.id);
  const components = await getComponents();
  const users = await getUsers();

  return (
    <div className="container">
      <h2 className="text-4xl font-semibold">Hi, {userName}</h2>
      <div className="mt-12">
        <DashboardCards components={components} projects={projects} users={users}></DashboardCards>
      </div>
    </div>
  );
}
