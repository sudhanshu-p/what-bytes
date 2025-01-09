"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { SkillTestHeader } from "@/components/skill-test-header"
import { SkillTestStats } from "@/components/skill-test-stats"
import { ComparisonGraph } from "@/components/comparison-graph"
import { SyllabusAnalysis } from "@/components/syllabus-analysis"
import { QuestionAnalysis } from "@/components/question-analysis"
import { UpdateScoresDialog } from "@/components/update-scores-dialog"

export default function SkillTestPage() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [scores, setScores] = useState({
    rank: 1,
    percentile: 30,
    currentScore: 10,
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <aside className="hidden w-64 lg:block">
          <Sidebar />
        </aside>
        <main className="flex-1 p-4 md:p-6 overflow-x-hidden">
          <h2 className="text-2xl font-semibold mb-6">Skill Test</h2>
          
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
            <div className="w-full lg:w-7/12 space-y-4 md:space-y-6">
              <SkillTestHeader onUpdate={() => setDialogOpen(true)} />
              <SkillTestStats scores={scores} />
              <ComparisonGraph percentile={scores.percentile} />
            </div>
            
            <div className="w-full lg:w-5/12 space-y-4 md:space-y-6">
              <SyllabusAnalysis />
              <QuestionAnalysis currentScore={scores.currentScore} totalQuestions={15} />
            </div>
          </div>
        </main>
      </div>

      <UpdateScoresDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        initialScores={scores}
        onUpdate={setScores}
      />
    </div>
  )
}

