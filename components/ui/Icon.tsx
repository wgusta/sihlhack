// Icon component that maps emoji strings to Heroicons solid
import {
  WrenchIcon,
  PowerIcon,
  SignalIcon,
  SunIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  PencilIcon,
  DocumentTextIcon,
  BookOpenIcon,
  ScaleIcon,
  ClipboardDocumentListIcon,
  StarIcon,
  SparklesIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  HomeIcon,
  RocketLaunchIcon,
  BeakerIcon,
  ComputerDesktopIcon,
  ExclamationTriangleIcon,
  FireIcon,
  UsersIcon,
  TrophyIcon,
  GiftIcon,
  TrashIcon,
  BuildingStorefrontIcon,
  CpuChipIcon,
  LightBulbIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  FolderIcon,
  DocumentIcon,
  ReceiptPercentIcon,
  EnvelopeIcon,
  CameraIcon,
  DocumentDuplicateIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/solid'
import { cn } from '@/lib/utils'

// Map emoji to Heroicon component
const emojiToIcon: Record<string, React.ComponentType<{ className?: string }>> = {
  '🔧': WrenchIcon,
  '🔌': PowerIcon,
  '📡': SignalIcon,
  '☀️': SunIcon,
  '⚙️': Cog6ToothIcon,
  '📊': ChartBarIcon,
  '✏️': PencilIcon,
  '📝': DocumentTextIcon,
  '📖': BookOpenIcon,
  '📜': DocumentTextIcon,
  '⚖️': ScaleIcon,
  '📋': ClipboardDocumentListIcon,
  '🌟': StarIcon,
  '🎯': SparklesIcon,
  '🛡️': ShieldCheckIcon,
  '🏢': BuildingOfficeIcon,
  '🏠': HomeIcon,
  '🚀': RocketLaunchIcon,
  '🔬': BeakerIcon,
  '💻': ComputerDesktopIcon,
  '💀': ExclamationTriangleIcon,
  '🔥': FireIcon,
  '👥': UsersIcon,
  '🏆': TrophyIcon,
  '🎁': GiftIcon,
  '🗑️': TrashIcon,
  '🏭': BuildingStorefrontIcon,
  '🤖': CpuChipIcon,
  '💡': LightBulbIcon,
  '💳': CreditCardIcon,
  '📁': FolderIcon,
  '📄': DocumentIcon,
  '📒': BookOpenIcon,
  '🧾': ReceiptPercentIcon,
  '✉️': EnvelopeIcon,
  '📷': CameraIcon,
  '📐': DocumentDuplicateIcon,
  '✓': CheckCircleIcon,
}

// Map emoji to default color class
const emojiToColor: Record<string, string> = {
  '🔧': 'text-thermal-orange',
  '🔌': 'text-sihl-red',
  '📡': 'text-compute-blue',
  '☀️': 'text-solar-yellow',
  '⚙️': 'text-fund-green',
  '📊': 'text-sihl-red',
  '✏️': 'text-historic-sepia',
  '📝': 'text-historic-sepia',
  '📖': 'text-grid-green',
  '📜': 'text-historic-sepia',
  '⚖️': 'text-industrial-gold',
  '📋': 'text-refund-amber',
  '🌟': 'text-brand-black',
  '🎯': 'text-thermal-orange',
  '🛡️': 'text-sihl-red',
  '🏢': 'text-historic-sepia',
  '🏠': 'text-grid-green',
  '🚀': 'text-compute-blue',
  '🔬': 'text-insight-cyan',
  '💻': 'text-compute-blue',
  '💀': 'text-sihl-red',
  '🔥': 'text-thermal-orange',
  '👥': 'text-compute-blue',
  '🏆': 'text-solar-yellow',
  '🎁': 'text-thermal-orange',
  '🗑️': 'text-historic-sepia',
  '🏭': 'text-industrial-gold',
  '🤖': 'text-compute-blue',
  '💡': 'text-solar-yellow',
  '💳': 'text-fund-green',
  '📁': 'text-historic-sepia',
  '📄': 'text-historic-sepia',
  '📒': 'text-historic-sepia',
  '🧾': 'text-historic-sepia',
  '✉️': 'text-compute-blue',
  '📷': 'text-historic-sepia',
  '📐': 'text-historic-sepia',
  '✓': 'text-grid-green',
}

interface IconProps {
  emoji: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  className?: string
  color?: string
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
  '2xl': 'w-10 h-10',
  '3xl': 'w-12 h-12',
}

export function Icon({ emoji, size = 'md', className, color }: IconProps) {
  const IconComponent = emojiToIcon[emoji]
  const defaultColor = emojiToColor[emoji] || 'text-brand-black'
  // Handle dynamic color classes like "text-${pkg.color}" by checking if it starts with "text-"
  const colorClass = color?.startsWith('text-') ? color : (color || defaultColor)

  if (!IconComponent) {
    // Fallback to emoji if no icon mapping found
    return <span className={className}>{emoji}</span>
  }

  return (
    <IconComponent
      className={cn(sizeClasses[size], colorClass, className)}
      aria-hidden="true"
    />
  )
}
