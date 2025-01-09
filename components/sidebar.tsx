import Link from "next/link"
import { BarChart2, GraduationCap, BookOpen } from 'lucide-react'

export function Sidebar() {
  return (
    <div className="pb-12 min-h-screen border-r">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
            >
              <BarChart2 className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all"
            >
              <BookOpen className="h-4 w-4" />
              Skill Test
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
            >
              <GraduationCap className="h-4 w-4" />
              Internship
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

