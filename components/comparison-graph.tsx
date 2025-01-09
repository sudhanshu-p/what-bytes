import { PercentileGraph } from "@/components/percentile-graph"

interface ComparisonGraphProps {
  percentile: number
}

export function ComparisonGraph({ percentile }: ComparisonGraphProps) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg border">
      <h3 className="text-lg font-semibold mb-4">Comparison Graph</h3>
      <p className="text-sm text-gray-600 mb-4">
        You scored {percentile}% percentile which is {percentile < 72 ? 'lower' : 'higher'} than the
        average percentile 72% of all the engineers who took this assessment
      </p>
      <div className="w-full overflow-x-auto">
        <div className="min-w-[300px]">
          <PercentileGraph percentile={percentile} />
        </div>
      </div>
    </div>
  )
}

