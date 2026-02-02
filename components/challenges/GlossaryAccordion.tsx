'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Icon } from '@/components/ui/Icon'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

type GlossaryCategory = {
  id: string
  title: string
  icon: string
  color: string
  terms: {
    term: string
    definition: string
  }[]
}

const glossaryCategories: GlossaryCategory[] = [
  {
    id: 'thermal',
    title: 'Thermal & Hardware',
    icon: '🔥',
    color: 'thermal-orange',
    terms: [
      {
        term: 'Immersion Cooling / Öl-Immersion',
        definition: 'Server-Komponenten werden vollständig in dielektrisches Öl getaucht. Das Öl leitet Wärme direkt ab, ohne Luftkühlung. Vorteile: 99% Wärmeabfuhr, lautlos, verlängert GPU-Lebensdauer. Nachteile: Öl-Handling, Brandschutz, komplexe Wartung.',
      },
      {
        term: 'Direct-to-Chip Kühlung',
        definition: 'Wasserkühlung direkt auf CPU/GPU-Chips. Standard-Komponenten, bewährt, reparierbar. Erreicht 60-70% Wärmeabfuhr. Weniger elegant als Immersion, aber einfacher zu handhaben.',
      },
      {
        term: 'Heat Pump Integration / Wärmepumpe',
        definition: 'Server-Wärme als Quelle für eine Wärmepumpe. Niedrige Temperaturen (30-50°C) werden auf 70°C+ gehoben, genug für Radiatoren. Komplexität und COP-Trade-offs müssen berücksichtigt werden.',
      },
      {
        term: 'COP (Coefficient of Performance)',
        definition: 'Verhältnis von abgegebener Wärme zu aufgenommener elektrischer Energie. COP von 3 bedeutet: 1 kWh Strom erzeugt 3 kWh Wärme. Höherer COP = effizienter, aber teurer.',
      },
      {
        term: 'Thermal Baseline',
        definition: 'Messung der Temperaturdifferenz (ΔT) in Abhängigkeit von Compute-Last und Durchflussrate. Charakterisiert, wie effizient das System Wärme abführt. Basis für alle weiteren Optimierungen.',
      },
      {
        term: 'BOM (Bill of Materials)',
        definition: 'Stückliste aller benötigten Komponenten mit Bezugsquellen (CH/EU). Muss nachbaubar sein, damit andere Teams oder LEGs das System replizieren können.',
      },
      {
        term: 'Safety Case',
        definition: 'Dokumentation aller Sicherheitsmassnahmen: RCD/GFCI-Schutz, Not-Aus-Schalter, Leckwanne für Öl/Wasser, Brandschutz. Beweist, dass das System sicher betrieben werden kann.',
      },
      {
        term: 'RCD/GFCI',
        definition: 'Residual Current Device (RCD) oder Ground Fault Circuit Interrupter (GFCI). Schaltet bei Fehlerströmen sofort ab. Pflicht für alle elektrischen Systeme mit Wasser/Öl-Kontakt.',
      },
    ],
  },
  {
    id: 'energy',
    title: 'Energie & Grid',
    icon: '⚡',
    color: 'compute-blue',
    terms: [
      {
        term: 'LEG (Lokale Elektrizitätsgemeinschaft)',
        definition: 'Rechtlicher Zusammenschluss nach StromVG Art. 18. Nachbarn produzieren und teilen Strom gemeinsam. Kann das öffentliche Netz nutzen. Technische Infrastruktur muss selbst gebaut werden.',
      },
      {
        term: 'Grid-OS',
        definition: 'Betriebssystem für den Sihlicon Hub. Steuert Lastscheduling: Wann Compute läuft, wann Batterie lädt, wann Wärme produziert wird. Integriert Solar-Budget, Swissgrid-Signale und Fallback-Policies.',
      },
      {
        term: 'Deferred Compute',
        definition: 'Compute-Jobs werden verschoben, um Solar-Überschuss zu nutzen. Batch-Processing statt Echtzeit. Server läuft tagsüber (Solar), pausiert nachts (Batterie-Reserve). Zeit-Shift-Architektur.',
      },
      {
        term: 'Load Shedding',
        definition: 'Automatisches Drosseln oder Pausieren von Compute, wenn das Netz instabil ist oder ausfällt. Grid stabil? Compute läuft. Grid down? Compute pausiert, Batterie versorgt Nachbarschaft.',
      },
      {
        term: 'Solar-Budget',
        definition: 'Verfügbare Solar-Energie pro Zeiteinheit. Grid-OS berechnet: Wie viel Solar ist da? Wie viel kann für Compute verwendet werden? Wie viel für Batterie? Rest geht ins Netz.',
      },
      {
        term: 'Fallback-Policy',
        definition: 'Regeln für den Fall, dass Solar ausfällt oder Netz instabil wird. Beispiel: "Wenn Solar < 100W, pausiere Compute, lade Batterie nur bis 50%". Jedes Team definiert eigene Policy.',
      },
      {
        term: 'Swissgrid',
        definition: 'Schweizer Übertragungsnetzbetreiber. Verantwortlich für Netzstabilität. Grid-OS kann Swissgrid-Signale (Frequenz, Spannung) lesen und darauf reagieren.',
      },
      {
        term: 'VPP (Virtual Power Plant)',
        definition: 'Virtuelles Kraftwerk: Viele dezentrale Energiequellen (Solar, Batterien, Server) werden zu einem grossen, steuerbaren System zusammengeschaltet. Sihlicon Hubs können Teil eines VPP sein.',
      },
      {
        term: 'Demand Response',
        definition: 'Verbraucher reagieren auf Netzsignale, indem sie Last reduzieren oder erhöhen. Server können bei Überproduktion hochfahren (mehr Compute), bei Engpässen drosseln (weniger Compute).',
      },
      {
        term: 'PUE (Power Usage Effectiveness)',
        definition: 'Verhältnis von Gesamtenergie zu IT-Energie. PUE 1.0 = perfekt (keine Overhead). Rechenzentren haben PUE 1.5-2.0. Immersion-Cooling erreicht PUE 1.03-1.10. Niedriger = effizienter.',
      },
      {
        term: 'SDL (Systemdienstleistungen)',
        definition: 'Dienstleistungen für Netzstabilität: Frequenzhaltung, Spannungshaltung, Blindleistung. Swissgrid bezahlt dafür. Sihlicon Hubs könnten SDL anbieten, indem sie Last flexibel steuern.',
      },
    ],
  },
  {
    id: 'software',
    title: 'Software & APIs',
    icon: '💻',
    color: 'grid-green',
    terms: [
      {
        term: 'API Spec',
        definition: 'Spezifikation der Programmierschnittstelle. Definiert Endpoints, Request/Response-Formate, Authentifizierung. Grid-OS braucht API, damit andere Systeme (Dashboard, LEG-Manager) darauf zugreifen können.',
      },
      {
        term: 'Replay-Modus',
        definition: 'Grid-OS kann historische Solar-Zeitreihen "abspielen", um Scheduler-Verhalten zu testen. Simuliert: "Was hätte der Scheduler gemacht, wenn er diese Solar-Daten gesehen hätte?"',
      },
      {
        term: 'Scheduler',
        definition: 'Kern-Komponente von Grid-OS. Entscheidet: Wann läuft Compute? Wie viel? Basierend auf Solar-Budget, Batterie-Status, Netzstabilität. Kann Batch-Jobs priorisieren und verschieben.',
      },
      {
        term: 'Sensor-Map',
        definition: 'Übersicht aller Sensoren im System: Position, Typ (Temperatur, Durchfluss, Power), Kalibrierung, Datenformat. Dokumentiert, welche Sensoren wo messen und wie die Daten interpretiert werden.',
      },
    ],
  },
  {
    id: 'legal',
    title: 'Recht & Regulierung',
    icon: '⚖️',
    color: 'industrial-gold',
    terms: [
      {
        term: 'StromVG',
        definition: 'Stromversorgungsgesetz. Art. 18 ermöglicht Lokale Elektrizitätsgemeinschaften (LEGs). Definiert rechtlichen Rahmen für Energie-Sharing zwischen Nachbarn.',
      },
      {
        term: 'EnG',
        definition: 'Energiegesetz. Reguliert Energieversorgung in der Schweiz. EnG Art. 17 definiert LEGs als "Zusammenschluss von Endverbrauchern".',
      },
      {
        term: 'VEVEE',
        definition: 'Verordnung über die Eigenversorgung mit elektrischer Energie. Konkretisiert EnG-Regelungen für LEGs. Lässt kritische Fragen offen, Netzbetreiber interpretieren oft restriktiv.',
      },
      {
        term: 'CE-Kennzeichnung',
        definition: 'Conformité Européenne (Europäische Konformität). Produktsicherheits-Zertifizierung für in Verkehr gebrachte Geräte. Beim Umbau oder Wiederverwendung von Server-Hardware können CE-relevante Änderungen entstehen, die neue Konformitätsbewertung erfordern.',
      },
      {
        term: 'PrSG (Produktsicherheitsgesetz)',
        definition: 'Schweizer Gesetz, das Anforderungen an Produkte regelt, die in Verkehr gebracht werden. Relevant für wiederverwendete Server-Hardware, die als "neues Produkt" (umgebaut) gilt. Definiert Haftung, Sicherheitsanforderungen, und Rückrufpflichten.',
      },
      {
        term: 'Gewährleistung bei Hardware-Reuse',
        definition: 'Haftung für Mängel bei Wiederverwendung von Serverkomponenten. Gebrauchte Hardware hat keine Herstellergarantie mehr. LEG muss klären: Wer haftet bei Ausfall? Gibt es Gewährleistung? Wie wird dokumentiert, dass Hardware "as-is" verkauft wird?',
      },
    ],
  },
]

export function GlossaryAccordion() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; border: string; text: string; hover: string }> = {
      'thermal-orange': {
        bg: 'bg-thermal-orange/10',
        border: 'border-thermal-orange',
        text: 'text-thermal-orange',
        hover: 'hover:bg-thermal-orange/20',
      },
      'compute-blue': {
        bg: 'bg-compute-blue/10',
        border: 'border-compute-blue',
        text: 'text-compute-blue',
        hover: 'hover:bg-compute-blue/20',
      },
      'grid-green': {
        bg: 'bg-grid-green/10',
        border: 'border-grid-green',
        text: 'text-grid-green',
        hover: 'hover:bg-grid-green/20',
      },
      'industrial-gold': {
        bg: 'bg-industrial-gold/10',
        border: 'border-industrial-gold',
        text: 'text-industrial-gold',
        hover: 'hover:bg-industrial-gold/20',
      },
    }
    return colorMap[color] || colorMap['thermal-orange']
  }

  return (
    <div className="space-y-4">
      {glossaryCategories.map((category) => {
        const colors = getColorClasses(category.color)
        const isOpen = openCategory === category.id

        return (
          <div
            key={category.id}
            className={cn(
              'border-2 rounded-xl overflow-hidden transition-all',
              colors.border,
              isOpen ? colors.bg : 'bg-white'
            )}
          >
            <button
              onClick={() => setOpenCategory(isOpen ? null : category.id)}
              className={cn(
                'w-full flex items-center justify-between p-5 text-left transition-colors',
                colors.hover
              )}
            >
              <div className="flex items-center gap-3">
                <Icon emoji={category.icon} size="lg" color={`text-${category.color}`} />
                <span className="font-display font-semibold text-brand-black">
                  {category.title}
                </span>
              </div>
              <span
                className={cn(
                  'flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center transition-transform',
                  isOpen && 'rotate-180'
                )}
              >
                <ChevronDownIcon className="w-4 h-4 text-gray-600" aria-hidden="true" />
              </span>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 space-y-4">
                {category.terms.map((item, index) => (
                  <div
                    key={index}
                    className="pt-4 border-t border-gray-200 first:border-t-0 first:pt-0"
                  >
                    <h4 className="font-mono font-semibold text-brand-black mb-2">
                      {item.term}
                    </h4>
                    <p className="font-mono text-sm text-historic-sepia leading-relaxed">
                      {item.definition}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
