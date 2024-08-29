import React from 'react';
import ComponentsIcon from "@/components/ui/icons/ComponentsIcon";
import ProjectsIcon from "@/components/ui/icons/ProjectsIcon";
import {UsersIcon} from "lucide-react";
import AvailableComponentsIcon from '@/components/ui/icons/ProjectComponentsIcons';
import AvailableUsersIcon from '@/components/ui/icons/AvailableUsersIcon';
import AvailableProjectsIcon from '@/components/ui/icons/AvailableProjectsIcon';

export default function DashboardCards({components, projects, users}) {
    const dashboardCards = [
        {name:'Components', icon: AvailableComponentsIcon, size: components.success ? components.data.length : 0},
        {name: 'Projects', icon: AvailableProjectsIcon, size: projects.success ? projects.data.length : 0},
        {name:'Users', icon: AvailableUsersIcon, size: users.success ? users.data.length : 0}
    ];

    return (
      <div className="grid grid-cols-3 h-full gap-4">
        {dashboardCards.map((card) => (
          <div
            key={card.name}
            className="dark:bg-transparent border border-gray-300 dark:border-opacity-40 rounded-lg w-[250px] h-full p-5 pt-4 pb-4"
          >
            <div className="card ">
              {
                <p className="font-medium text-sm pb-4">
                  {card.name}
                </p>
              }

              <div className="inline-flex items-center">
                <div className="mr-5">
                  <card.icon width={32} height={32} />
                </div>

                <p className="font-bold text-3xl text-orange-base">
                  {card.size}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
}
