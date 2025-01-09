"use client"

import { useMemo } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

interface PercentileGraphProps {
  percentile: number
}

export function PercentileGraph({ percentile }: PercentileGraphProps) {
  const data = useMemo(() => {
    const points = [0, 10, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 90, 100]
    const mean = 50
    const stdDev = 15

    return points.map(x => {
      const y = (1 / (stdDev * Math.sqrt(2 * Math.PI))) * 
                Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2))
      return { 
        x, 
        y: y * 2000,
        isPercentile: x === Math.round(percentile)
      }
    })
  }, [percentile])

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border rounded-lg shadow-sm">
          <p className="text-sm">{payload[0].payload.x}</p>
          <p className="text-sm text-blue-600">numberOfStudent: 4</p>
        </div>
      )
    }
    return null
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <XAxis 
          dataKey="x" 
          axisLine={{ stroke: '#E5E7EB' }}
          tickLine={false}
          tick={{ fill: '#6B7280', fontSize: 12 }}
        />
        <YAxis hide />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="y"
          stroke="#818CF8"
          strokeWidth={2}
          dot={(props: any) => {
            const { cx, cy, payload } = props
            return (
              <g key={`dot-${payload.x}`}>
                <circle 
                  cx={cx} 
                  cy={cy} 
                  r={4} 
                  fill={payload.isPercentile ? "#818CF8" : "#fff"} 
                  stroke="#818CF8" 
                  strokeWidth={2}
                />
                {payload.isPercentile && (
                  <text
                    x={cx}
                    y={cy - 15}
                    textAnchor="middle"
                    fill="#6B7280"
                    fontSize="12"
                  >
                    your percentile
                  </text>
                )}
              </g>
            )
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

