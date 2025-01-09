import { Trophy, FileText, CheckCircle } from 'lucide-react'

interface SkillTestStatsProps {
  scores: {
    rank: number
    percentile: number
    currentScore: number
  }
}

export function SkillTestStats({ scores }: SkillTestStatsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 md:p-6 bg-white rounded-lg border">
      <div className="flex items-center gap-4">
        <div className="p-2 bg-yellow-50 rounded-lg">
          <Trophy className="h-6 w-6 text-yellow-600" />
        </div>
        <div>
          <div className="text-2xl font-bold">{scores.rank}</div>
          <div className="text-sm text-gray-500">YOUR RANK</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="p-2 bg-gray-50 rounded-lg">
          <FileText className="h-6 w-6 text-gray-600" />
        </div>
        <div>
          <div className="text-2xl font-bold">{scores.percentile}%</div>
          <div className="text-sm text-gray-500">PERCENTILE</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="p-2 bg-green-50 rounded-lg">
          <CheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <div>
          <div className="text-2xl font-bold">{scores.currentScore}/15</div>
          <div className="text-sm text-gray-500">CORRECT ANSWERS</div>
        </div>
      </div>
    </div>
  )
}

