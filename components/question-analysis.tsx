import { DonutChart } from "@/components/donut-chart"

interface QuestionAnalysisProps {
  currentScore: number
  totalQuestions: number
}

export function QuestionAnalysis({ currentScore, totalQuestions }: QuestionAnalysisProps) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg border">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <DonutChart value={currentScore} total={totalQuestions} />
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Question Analysis</h3>
            <span className="text-blue-600 font-semibold">{currentScore}/{totalQuestions}</span>
          </div>
          <p className="text-sm text-gray-600">
            You scored {currentScore} question{currentScore !== 1 ? 's' : ''} correct out of {totalQuestions}. 
            {currentScore < totalQuestions * 0.7 ? ' However it still needs some improvements.' : ' Great job!'}
          </p>
        </div>
      </div>
    </div>
  )
}

