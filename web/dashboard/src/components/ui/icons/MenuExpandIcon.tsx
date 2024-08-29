import React from 'react';
import { IconJSXProps } from '@/utils/entities/icon';

export default function MenuExpandIcon({ width, height }: IconJSXProps) {
  return (
    <svg
      className="cursor-pointer"
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 3C5.05228 3 5.5 3.44772 5.5 4V20C5.5 20.5523 5.05228 21 4.5 21C3.94772 21 3.5 20.5523 3.5 20V4C3.5 3.44772 3.94772 3 4.5 3ZM15.7929 7.29289C16.1834 6.90237 16.8166 6.90237 17.2071 7.29289L21.2071 11.2929C21.5976 11.6834 21.5976 12.3166 21.2071 12.7071L17.2071 16.7071C16.8166 17.0976 16.1834 17.0976 15.7929 16.7071C15.4024 16.3166 15.4024 15.6834 15.7929 15.2929L18.0858 13H8.5C7.94772 13 7.5 12.5523 7.5 12C7.5 11.4477 7.94772 11 8.5 11H18.0858L15.7929 8.70711C15.4024 8.31658 15.4024 7.68342 15.7929 7.29289Z"
        fill="#504167"
      />
    </svg>
  );
}
