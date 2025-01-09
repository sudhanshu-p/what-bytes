"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface UpdateScoresDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  initialScores: {
    rank: number
    percentile: number
    currentScore: number
  }
  onUpdate: (scores: {
    rank: number
    percentile: number
    currentScore: number
  }) => void
}

interface ValidationErrors {
  rank?: string
  percentile?: string
  currentScore?: string
}

export function UpdateScoresDialog({
  open,
  onOpenChange,
  initialScores,
  onUpdate,
}: UpdateScoresDialogProps) {
  const [scores, setScores] = useState(initialScores)
  const [errors, setErrors] = useState<ValidationErrors>({})

  const validateField = (name: string, value: number): string | undefined => {
    if (isNaN(value)) {
      return "Must be a valid number"
    }
    
    switch (name) {
      case "rank":
        if (value < 1) {
          return "Rank must be greater than 0"
        }
        break
      case "percentile":
        if (value < 0 || value > 100) {
          return "Percentile must be between 0 and 100"
        }
        break
      case "currentScore":
        if (!Number.isInteger(value)) {
          return "Must be a whole number"
        }
        if (value < 0 || value > 15) {
          return "Score must be between 0 and 15"
        }
        break
    }
  }

  const handleChange = (name: keyof typeof scores, value: string) => {
    const numberValue = Number(value)
    const error = validateField(name, numberValue)
    
    setErrors(prev => ({
      ...prev,
      [name]: error
    }))

    setScores(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Convert all values to numbers for submission
    const numberScores = {
      rank: Number(scores.rank),
      percentile: Number(scores.percentile),
      currentScore: Number(scores.currentScore)
    }
    
    onUpdate(numberScores)
    onOpenChange(false)
  }

  const isValid = !Object.values(errors).some(error => error) && 
                 !Object.values(scores).some(value => value === "" || isNaN(Number(value)))

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Update scores</span>
            <div className="h-8 w-8 bg-red-500 rounded flex items-center justify-center">
              <svg
                className="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
              </svg>
            </div>
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="rank">
                <span className="inline-flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">1</span>
                  Update your Rank
                </span>
              </Label>
              <Input
                id="rank"
                type="number"
                value={scores.rank}
                onChange={(e) => handleChange("rank", e.target.value)}
                aria-invalid={!!errors.rank}
                aria-describedby={errors.rank ? "rank-error" : undefined}
              />
              {errors.rank && (
                <p id="rank-error" className="text-sm text-red-500">
                  {errors.rank}
                </p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="percentile">
                <span className="inline-flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">2</span>
                  Update your Percentile
                </span>
              </Label>
              <Input
                id="percentile"
                type="number"
                value={scores.percentile}
                onChange={(e) => handleChange("percentile", e.target.value)}
                aria-invalid={!!errors.percentile}
                aria-describedby={errors.percentile ? "percentile-error" : undefined}
              />
              {errors.percentile && (
                <p id="percentile-error" className="text-sm text-red-500">
                  {errors.percentile}
                </p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="currentScore">
                <span className="inline-flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">3</span>
                  Update your Current Score (out of 15)
                </span>
              </Label>
              <Input
                id="currentScore"
                type="number"
                value={scores.currentScore}
                onChange={(e) => handleChange("currentScore", e.target.value)}
                aria-invalid={!!errors.currentScore}
                aria-describedby={errors.currentScore ? "currentScore-error" : undefined}
              />
              {errors.currentScore && (
                <p id="currentScore-error" className="text-sm text-red-500">
                  {errors.currentScore}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              cancel
            </Button>
            <Button type="submit" disabled={!isValid}>
              save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

