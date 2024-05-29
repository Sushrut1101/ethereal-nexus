import {Button} from '@/components/ui/button';
import Link from 'next/link';
import { auth } from '@/auth';
import React from 'react';
import ProjectsIcon from "@/components/ui/icons/ProjectsIcon";
import {UsersIcon} from "lucide-react";
import ComponentsIcon from "@/components/ui/icons/ComponentsIcon";
import {getProjects} from "@/data/projects/actions";
import {getComponents} from "@/data/components/actions";
import {getUsers} from "@/data/users/actions";

import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineItem,
    TimelineSeparator
} from "@mui/lab";
import DashboardCards from "@/components/components/dashboard/DashboardCards";
import LatestComponentReleases from "@/components/components/dashboard/LatestComponentReleases";
import LatestUsers from "@/components/components/dashboard/LatestUsers";
import History from "@/components/components/dashboard/History";


export default async function Home() {
  const session = await auth();
    const projects = await getProjects(session?.user?.id);
    const components = await getComponents();
    const users = await getUsers();

    return (
        <div className="container">
            <DashboardCards components={components} projects={projects} users={users}></DashboardCards>
            <div className="grid grid-cols-3 h-full mt-4 gap-4">
                <div>
                    <LatestComponentReleases></LatestComponentReleases>
                    <LatestUsers></LatestUsers>
                </div>
                <History></History>
            </div>
        </div>
    );
}
