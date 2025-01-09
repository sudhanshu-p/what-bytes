import { Button } from "@/components/ui/button"

interface SkillTestHeaderProps {
  onUpdate: () => void
}

export function SkillTestHeader({ onUpdate }: SkillTestHeaderProps) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg border space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex gap-4">
          <div className="h-12 w-12 shrink-0 bg-red-500 rounded-lg flex items-center justify-center">
            <svg
              className="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Hyper Text Markup Language</h3>
            <p className="text-sm text-gray-500">
              Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
            </p>
          </div>
        </div>
        <Button variant="default" onClick={onUpdate} className="w-full sm:w-auto">
          Update
        </Button>
      </div>
    </div>
  )
}

