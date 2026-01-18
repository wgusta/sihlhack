'use client'

import { HACKATHON_PACKAGES, HACKATHON_ROLES, PACKAGE_TEAM_COMPOSITIONS } from '@/lib/roles'
import { ResourceSubmissionForm } from './ResourceSubmissionForm'
import { ChallengeExplanation } from './ChallengeExplanation'
import { Icon } from '@/components/ui/Icon'

type Package = typeof HACKATHON_PACKAGES[number]

interface PackageCardProps {
  pkg: Package
  showVisualization?: boolean
  visualization?: React.ReactNode
}

export function PackageCard({ pkg, showVisualization = false, visualization }: PackageCardProps) {
  const teamComposition = PACKAGE_TEAM_COMPOSITIONS[pkg.id as keyof typeof PACKAGE_TEAM_COMPOSITIONS]
  
  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; border: string; text: string }> = {
      'thermal-orange': { bg: 'bg-thermal-orange/10', border: 'border-thermal-orange', text: 'text-thermal-orange' },
      'sihl-red': { bg: 'bg-sihl-red/10', border: 'border-sihl-red', text: 'text-sihl-red' },
      'compute-blue': { bg: 'bg-compute-blue/10', border: 'border-compute-blue', text: 'text-compute-blue' },
      'grid-green': { bg: 'bg-grid-green/10', border: 'border-grid-green', text: 'text-grid-green' },
      'industrial-gold': { bg: 'bg-industrial-gold/10', border: 'border-industrial-gold', text: 'text-industrial-gold' },
    }
    return colorMap[color] || colorMap['thermal-orange']
  }

  const colors = getColorClasses(pkg.color)

  return (
    <div className={`rounded-2xl border-2 ${colors.border} ${colors.bg} overflow-hidden`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Icon emoji={pkg.icon} size="2xl" color={`text-${pkg.color}`} />
            <div>
              <h3 className="font-display text-xl font-bold text-brand-black">{pkg.nameDE}</h3>
              <p className="font-mono text-sm text-historic-sepia mt-1">{pkg.descriptionDE}</p>
            </div>
          </div>
          
          {/* Type Badge */}
          <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${
            pkg.type === 'mandatory' 
              ? 'bg-sihl-red text-white' 
              : 'bg-gray-200 text-gray-600'
          }`}>
            {pkg.type === 'mandatory' ? 'Pflicht' : 'Optional'}
          </span>
        </div>

        {/* Prize Share for mandatory packages */}
        {pkg.type === 'mandatory' && (
          <div className="mt-4 flex items-center gap-2">
            <span className="font-mono text-sm text-historic-sepia">Preisgeld-Anteil:</span>
            <span className={`font-mono text-lg font-bold ${colors.text}`}>{pkg.prizeShare}%</span>
          </div>
        )}
      </div>

      {/* Visualization */}
      {showVisualization && visualization && (
        <div className="p-4 bg-white/50">
          {visualization}
        </div>
      )}

      {/* Challenge Explanation - Accordions */}
      <div className="p-6 bg-white/30 border-t border-gray-100">
        <h4 className="font-display font-semibold text-brand-black mb-4 flex items-center gap-2">
          <span>📖</span> Erklärung
        </h4>
        <ChallengeExplanation packageId={pkg.id} color={pkg.color} />
      </div>

      {/* Deliverables */}
      <div className="p-6 bg-white/50">
        <h4 className="font-display font-semibold text-brand-black mb-3 flex items-center gap-2">
          <span>📦</span> Deliverables
        </h4>
        <ul className="space-y-2">
          {pkg.deliverables.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm font-mono text-historic-sepia">
              <span className="text-grid-green mt-0.5">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Scoring Criteria */}
      <div className="p-6 border-t border-gray-100">
        <h4 className="font-display font-semibold text-brand-black mb-3 flex items-center gap-2">
          <span>📊</span> Bewertungskriterien
        </h4>
        <div className="space-y-2">
          {pkg.scoringCriteria.map((criterion, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-sm font-mono text-historic-sepia">{criterion.name}</span>
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${colors.bg.replace('/10', '')} rounded-full`}
                    style={{ width: `${criterion.weight}%` }}
                  />
                </div>
                <span className="font-mono text-xs text-brand-black font-bold w-8">{criterion.weight}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Empfohlene Open-Source Tools */}
      {'resources' in pkg && pkg.resources && (pkg.resources as unknown as Array<{name: string; url: string; license: string; description: string}>).length > 0 && (
        <div className="p-6 border-t border-gray-100 bg-white/30">
          <h4 className="font-display font-semibold text-brand-black mb-4 flex items-center gap-2">
            <span>🔧</span> Empfohlene Open-Source Tools
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(pkg.resources as unknown as Array<{name: string; url: string; license: string; description: string}>).map((resource, i) => (
              <a
                key={i}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-thermal-orange/50 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between mb-1">
                  <span className="font-mono text-sm font-semibold text-brand-black group-hover:text-thermal-orange transition-colors">
                    {resource.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-grid-green/10 text-grid-green rounded-full">
                    {resource.license}
                  </span>
                </div>
                <p className="text-xs font-mono text-historic-sepia leading-relaxed">
                  {resource.description}
                </p>
                <span className="text-[10px] font-mono text-thermal-orange opacity-0 group-hover:opacity-100 transition-opacity mt-1 block">
                  GitHub →
                </span>
              </a>
            ))}
          </div>
          
          {/* Resource Submission Form */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <ResourceSubmissionForm packageId={pkg.id} packageName={pkg.nameDE} />
          </div>
        </div>
      )}

      {/* Team Composition */}
      {teamComposition && (
        <div className="p-6 bg-brand-black">
          <h4 className="font-display font-semibold text-white mb-4 flex items-center gap-2">
            <span>👥</span> Team ({pkg.teamSize} Personen)
          </h4>
          <div className="flex flex-wrap gap-2">
            {teamComposition.map((member, i) => {
              const role = HACKATHON_ROLES.find(r => r.id === member.role)
              if (!role) return null
              
              return (
                <div
                  key={i}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${
                    member.priority === 'essential' 
                      ? 'bg-grid-green/20 border border-grid-green/30' 
                      : member.priority === 'recommended'
                      ? 'bg-thermal-orange/20 border border-thermal-orange/30'
                      : 'bg-white/10 border border-white/20'
                  }`}
                >
                  <Icon emoji={role.icon} size="lg" className="text-white" />
                  <span className="font-mono text-xs text-white">{role.nameDE}</span>
                  <span className={`text-[10px] font-mono ${
                    member.priority === 'essential' ? 'text-grid-green' :
                    member.priority === 'recommended' ? 'text-thermal-orange' :
                    'text-gray-400'
                  }`}>
                    {member.priority === 'essential' ? '●' : member.priority === 'recommended' ? '○' : '◌'}
                  </span>
                </div>
              )
            })}
          </div>
          <div className="mt-3 flex gap-4 text-[10px] font-mono text-gray-400">
            <span><span className="text-grid-green">●</span> Essential</span>
            <span><span className="text-thermal-orange">○</span> Recommended</span>
            <span><span className="text-gray-400">◌</span> Optional</span>
          </div>
        </div>
      )}
    </div>
  )
}

// Compact version for overview
export function PackageCardCompact({ pkg }: { pkg: Package }) {
  const colors = {
    'thermal-orange': 'border-thermal-orange bg-thermal-orange/10 hover:bg-thermal-orange/20',
    'sihl-red': 'border-sihl-red bg-sihl-red/10 hover:bg-sihl-red/20',
    'compute-blue': 'border-compute-blue bg-compute-blue/10 hover:bg-compute-blue/20',
    'grid-green': 'border-grid-green bg-grid-green/10 hover:bg-grid-green/20',
    'industrial-gold': 'border-industrial-gold bg-industrial-gold/10 hover:bg-industrial-gold/20',
  }[pkg.color] || 'border-gray-200 bg-gray-50 hover:bg-gray-100'

  return (
    <a
      href={`#${pkg.id}`}
      className={`block p-4 rounded-xl border-2 ${colors} transition-all group`}
    >
      <div className="text-center">
        <div className="mb-2 flex justify-center">
          <Icon emoji={pkg.icon} size="xl" color={`text-${pkg.color}`} />
        </div>
        <h3 className="font-display font-semibold text-brand-black text-sm">{pkg.nameDE}</h3>
        <span className={`inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-mono ${
          pkg.type === 'mandatory' ? 'bg-sihl-red text-white' : 'bg-gray-200 text-gray-600'
        }`}>
          {pkg.type === 'mandatory' ? 'Pflicht' : 'Optional'}
        </span>
        {pkg.type === 'mandatory' && (
          <p className="font-mono text-xs text-historic-sepia mt-1">{pkg.prizeShare}% Preisgeld</p>
        )}
      </div>
    </a>
  )
}
