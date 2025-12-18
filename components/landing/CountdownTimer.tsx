'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface CountdownTimerProps {
  targetDate: Date
  label?: string
  className?: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer({ targetDate, label, className }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!mounted) {
    return (
      <div className={cn("animate-pulse", className)}>
        <div className="flex gap-2 sm:gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white/10 rounded-lg w-14 sm:w-20 h-16 sm:h-20" />
          ))}
        </div>
      </div>
    )
  }

  const units = [
    { value: timeLeft.days, label: 'Tage' },
    { value: timeLeft.hours, label: 'Std' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Sek' },
  ]

  return (
    <div className={className}>
      {label && (
        <p className="text-center font-mono text-xs text-gray-400 uppercase tracking-wider mb-3">
          {label}
        </p>
      )}
      <div className="flex justify-center gap-2 sm:gap-3">
        {units.map((unit, index) => (
          <div
            key={unit.label}
            className="flex flex-col items-center"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-3 min-w-[3rem] sm:min-w-[4rem]">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-white tabular-nums">
                {String(unit.value).padStart(2, '0')}
              </span>
            </div>
            <span className="font-mono text-[10px] sm:text-xs text-gray-400 mt-1">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
