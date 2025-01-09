import { Progress } from "@/components/ui/progress"

interface SyllabusItem {
  topic: string
  percentage: number
  color: string
}

const syllabusData: SyllabusItem[] = [
  { topic: "HTML Tools, Forms, History", percentage: 80, color: "bg-blue-500" },
  { topic: "Tags & References in HTML", percentage: 60, color: "bg-orange-500" },
  { topic: "Tables & References in HTML", percentage: 24, color: "bg-red-500" },
  { topic: "Tables & CSS Basics", percentage: 96, color: "bg-green-500" },
]

export function SyllabusAnalysis() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Syllabus Wise Analysis</h3>
      <div className="space-y-4">
        {syllabusData.map((item) => (
          <div key={item.topic} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{item.topic}</span>
              <span className="text-blue-600">{item.percentage}%</span>
            </div>
            <Progress value={item.percentage} className={item.color} />
          </div>
        ))}
      </div>
    </div>
  )
}

