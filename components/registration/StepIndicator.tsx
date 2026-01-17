import { cn } from '@/lib/utils'
import { CheckIcon } from '@heroicons/react/24/solid'

interface Step {
  id: number
  name: string
}

interface StepIndicatorProps {
  steps: Step[]
  currentStep: number
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <nav aria-label="Fortschritt" className="mb-8">
      <ol className="flex items-center justify-center space-x-4">
        {steps.map((step, index) => (
          <li key={step.id} className="flex items-center">
            <div className="flex items-center">
              <span
                className={cn(
                  'w-8 h-8 flex items-center justify-center rounded-full font-mono text-sm font-semibold transition-colors',
                  step.id < currentStep
                    ? 'bg-fund-green text-white'
                    : step.id === currentStep
                    ? 'bg-sihl-red text-white'
                    : 'bg-historic-cream text-historic-sepia'
                )}
              >
                {step.id < currentStep ? (
                  <CheckIcon className="w-4 h-4" aria-hidden="true" />
                ) : (
                  step.id
                )}
              </span>
              <span
                className={cn(
                  'ml-2 text-sm font-mono hidden sm:block',
                  step.id === currentStep ? 'text-brand-black font-semibold' : 'text-historic-sepia'
                )}
              >
                {step.name}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  'w-8 sm:w-16 h-0.5 mx-2',
                  step.id < currentStep ? 'bg-fund-green' : 'bg-historic-cream'
                )}
              />
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
