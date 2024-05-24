import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { auth } from '@/auth';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import React from 'react';
import ProjectsIcon from "@/components/ui/icons/ProjectsIcon";
import {UsersIcon} from "lucide-react";
import ComponentsIcon from "@/components/ui/icons/ComponentsIcon";
import {getProjects} from "@/data/projects/actions";
import {getComponents} from "@/data/components/actions";
import {getUsers} from "@/data/users/actions";

export default async function Home() {
  const session = await auth();
    const projects = await getProjects(session?.user?.id);
    const components = await getComponents();
    const users = await getUsers();

    const dashboardCards = [
        {name:'Components', icon: ComponentsIcon, size: components.success ? components.data.length : 0},
        {name: 'Projects', icon: ProjectsIcon, size: projects.success ? projects.data.length : 0},
        {name:'Users', icon:UsersIcon, size: users.success ? users.data.length : 0}
    ];

    return (
      <div className="container">
          <div className="inline-flex">
              { dashboardCards.map((card) => (
                  <>
                      <div className="w-[440px] h-[64px] bg-white inline-flex items-center rounded-lg p-4 mr-4">
                          <div className="mr-4"><card.icon width={32} height={32}/></div>
                          <span className="text-xl text-grey-light">{card.name}</span>
                          <div className=" flex justify-end w-full">
                              <div className=" w-[34px] h-[23px]"></div>
                          </div>
                          <div
                              className="ml-3 pr-4 leading-[36px] font-bold text-[36px] text-right text-orange-base">{card.size} </div>
                      </div>
                  </>
              ))}
          </div>
      </div>
  );
}
