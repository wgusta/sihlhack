import { cn } from '@/lib/utils'

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
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
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
