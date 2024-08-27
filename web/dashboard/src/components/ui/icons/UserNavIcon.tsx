import { IconJSXProps } from '@/utils/entities/icon';
import React from 'react';

export default function UserNavIcon({ width, height }: IconJSXProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="12" fill="#D14600" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 12C18.3431 12 17 13.3431 17 15C17 16.6569 18.3431 18 20 18C21.6569 18 23 16.6569 23 15C23 13.3431 21.6569 12 20 12ZM15 15C15 12.2386 17.2386 10 20 10C22.7614 10 25 12.2386 25 15C25 17.7614 22.7614 20 20 20C17.2386 20 15 17.7614 15 15ZM14.083 28H25.917C25.441 25.1623 22.973 23 20 23C17.027 23 14.559 25.1623 14.083 28ZM12 29C12 24.5817 15.5817 21 20 21C24.4183 21 28 24.5817 28 29C28 29.5523 27.5523 30 27 30H13C12.4477 30 12 29.5523 12 29Z"
        fill="white"
      />
    </svg>
  );
}