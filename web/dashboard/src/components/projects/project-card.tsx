"use client"

import React from 'react';
import { type ProjectWithComponentId} from '@/data/projects/dto';
import { Trash } from 'lucide-react';
import AvailableComponentsIcon from '@/components/ui/icons/ProjectComponentsIcons';

type MembersLength = {
  membersLength?: boolean,
}

type ProjectCardProps = {
  project: ProjectWithComponentId & MembersLength,
}
export function ProjectCard({ project }: ProjectCardProps) {
  const { description, name , components } = project;

  return (
    <div className="dark:bg-transparent border border-gray-300 dark:border-opacity-40 rounded-lg w-[210px] h-full p-6">
      <div className="flex items-end justify-end">
         <Trash className="h-4 w-4 text-red-600" />
      </div>
      <h3 className="my-3 font-bold text-lg">{name}</h3>
      <div className="card">
        {description && <p className="font-medium my-4 text-sm">{description}</p>}

        <div className="inline-flex items-center">
          <AvailableComponentsIcon width={24} height={24}></AvailableComponentsIcon>
          <p className="font-medium text-sm ml-3">{components.length > 1 ?  `${components.length} components` : `${components.length} component`} </p>
        </div>
      </div>
    </div>
  );
}
