import React from 'react';
import Link from "next/link";

export default function LatestComponentReleases() {
    return (
        <div className="relative h-full p-4">
            <span className="font-bold">Latest component releases</span>
            <div className="mt-2">
                <div className="grid grid-cols-6 gap-4">
                    <span className="col-span-3 text-grey-light text-s font-normal">Name</span>
                    <span
                        className="col-span-1 text-grey-light text-s font-normal">Version</span>
                    <span
                        className="col-span-2 text-grey-light text-s font-normal justify-center flex">Release date</span>
                </div>
                <div className="grid grid-cols-6 border-b border-gray-300 pt-4 pb-1">
                    <span className="col-span-3 w-max">Birthday Widget Calendar</span>
                    <span className="col-span-1 justify-center flex ml-4">1.0</span>
                    <span className="col-span-2 justify-center flex">25/05/2024</span>
                </div>
            </div>

            <Link className="absolute bottom-4 right-4 text-orange-base font-bold text-base" href={`/components/`}> View
                all</Link>
        </div>
    );
}
