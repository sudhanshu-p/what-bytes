"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

interface DonutChartProps {
  value: number
  total: number
}

export function DonutChart({ value, total }: DonutChartProps) {
  const data = [
    { name: 'Correct', value: value },
    { name: 'Incorrect', value: total - value }
  ]

  return (
    <div className="relative h-40 w-40">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={35}
            outerRadius={45}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
          >
            <Cell fill="#3b7df5" />
            <Cell fill="#eaf2fe" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          <div className="text-sm text-gray-500">out of {total}</div>
        </div>
      </div>
    </div>
  )
}

