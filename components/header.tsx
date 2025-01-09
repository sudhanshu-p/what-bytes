import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4 justify-between">
        <div className="flex items-center gap-2">
          <svg
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" className="fill-black" />
            <path
              d="M6 7H18M6 12H18M6 17H18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-xl font-bold">WhatBytes</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Rahil Siddique</span>
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>RS</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}

