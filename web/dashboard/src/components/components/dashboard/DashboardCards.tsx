import React from 'react';
import ComponentsIcon from "@/components/ui/icons/ComponentsIcon";
import ProjectsIcon from "@/components/ui/icons/ProjectsIcon";
import {UsersIcon} from "lucide-react";

export default function DashboardCards({components, projects, users}) {
    const dashboardCards = [
        {name:'Components', icon: ComponentsIcon, size: components.success ? components.data.length : 0},
        {name: 'Projects', icon: ProjectsIcon, size: projects.success ? projects.data.length : 0},
        {name:'Users', icon:UsersIcon, size: users.success ? users.data.length : 0}
    ];

    return (
        <div className="grid grid-cols-3 h-full gap-4">
            {dashboardCards.map((card) => (
                <div key={card.name} className="h-16 bg-white inline-flex items-center rounded-lg p-4">
                    <div className="mr-4">
                        <card.icon width={32} height={32}/>
                    </div>
                    <span className="text-xl text-grey-light">{card.name}</span>
                    <div className="flex justify-end w-full">
                        <div className="w-[2em] h-[1.5em]"></div>
                    </div>
                    <div
                        className="ml-3 pr-4 font-bold text-4xl text-right text-orange-base">{card.size}</div>
                </div>
            ))}
        </div>
    );
}
