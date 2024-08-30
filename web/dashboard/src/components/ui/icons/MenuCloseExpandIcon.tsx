import React from 'react';
import { IconJSXProps } from '@/utils/entities/icon';

export default function MenuCloseExpandIcon({ width, height }: IconJSXProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20V4C19 3.44772 19.4477 3 20 3ZM8.70711 7.29289C9.09763 7.68342 9.09763 8.31658 8.70711 8.70711L6.41421 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H6.41421L8.70711 15.2929C9.09763 15.6834 9.09763 16.3166 8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.29289 7.29289C7.68342 6.90237 8.31658 6.90237 8.70711 7.29289Z"
        fill="#504167"
      />
    </svg>
  );
}
