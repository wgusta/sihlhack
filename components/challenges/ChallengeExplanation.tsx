'use client'

import { Accordion } from '@/components/ui/Accordion'

interface ChallengeExplanationProps {
  packageId: string
  color: string
  nonTechnical?: {
    what?: string
    why?: string
    whatYouBuild?: string
  }
  technical?: {
    howItWorks?: string
    architecture?: string
    integration?: string
  }
  risks?: {
    title: string
    hazards: Array<{ risk: string; mitigation: string }>
  }
}

const challengeExplanations: Record<string, {
  nonTechnical: {
    what: string
    why: string
    whatYouBuild: string
  }
  technical: {
    howItWorks: string
    architecture?: string
    integration?: string
  }
  risks?: {
    title: string
    hazards: Array<{ risk: string; mitigation: string }>
  }
}> = {
  'grid-os-logic': {
    nonTechnical: {
      what: 'Grid-OS Logik ist das "Gehirn" des Systems. Es entscheidet intelligent, wann Computer-Aufgaben laufen, wann die Batterie geladen wird, und wann Wärme produziert wird. Du programmierst den Scheduler, der Solar-Budget berechnet und Compute-Jobs entsprechend plant.',
      why: 'Ohne intelligente Steuerung wäre das System nur ein passives Heizsystem. Grid-OS Logik macht es intelligent: Es nutzt Sonnenenergie optimal, verschiebt Computer-Aufgaben auf Zeiten mit viel Solar (Deferred Compute), und kann bei Netzproblemen automatisch reagieren (Load Shedding).',
      whatYouBuild: 'Du programmierst einen Scheduler mit Solar-Budget-Algorithmen, Deferred Compute Logik, und Load Shedding Policies. Das System entwickelt gegen den Sihl-Sim (Digital Twin), testet auf dem Safety Avatar, und deployt auf der supervised Reference Hardware.',
    },
    technical: {
      howItWorks: 'Der Scheduler liest Solar-Budget von Inverter-APIs, berechnet verfügbare Energie, und plant Compute-Jobs entsprechend. Deferred Compute verschiebt Jobs auf Zeiten mit viel Solar. Load Shedding Policies definieren Verhalten bei Solar-Ausfall oder Netz-Instabilität. Integration mit Sihl-Sim API für Simulation.',
      architecture: 'Input Layer (Solar APIs/Swissgrid Signals) → Policy Engine (Node-RED/Python) → Scheduler (k3s/Ollama for intelligent scheduling) → Output Layer (Compute Control/Battery Management) → API Gateway (NATS/OpenTelemetry)',
      integration: 'Integriert mit Sihl-Sim (Digital Twin API), Solar-Invertern (Fronius/SMA), Swissgrid-Signalen (Frequenz/Spannung), Compute-System (Grid-OS → Server Control), Battery Management, und Reference Hardware.',
    },
  },
  'operational-safety-logic': {
    nonTechnical: {
      what: 'Operational Safety Logik bedeutet: Du programmierst Software-Sicherheitsverriegelungen, die das System sicher betreiben. Es ist wie ein digitaler Sicherheitswächter – die Software überwacht kontinuierlich und schaltet bei Problemen automatisch ab.',
      why: 'Sicherheit ist nicht verhandelbar. Ein System, das Energie, Compute und Wärme kombiniert, braucht robuste Software-Sicherheitsmassnahmen. Operational Safety Logik ist die Grundlage für sicheres Deployment auf Reference Hardware.',
      whatYouBuild: 'Du programmierst Software-Sicherheitsverriegelungen: Anomalie-Erkennungs-Algorithmen, Emergency Stop Logik, Sensor-Validierung, und Safety Interlocks. Alles integriert mit der Reference Hardware über APIs.',
    },
    technical: {
      howItWorks: 'Anomalie-Erkennungs-Algorithmen überwachen Sensor-Daten kontinuierlich und erkennen ungewöhnliche Muster. Emergency Stop Logik triggert sofortige Abschaltung bei kritischen Zuständen. Sensor-Validierung stellt sicher, dass alle Sensoren korrekt funktionieren. Safety Interlocks verhindern unsichere Betriebszustände.',
      architecture: 'Sensor Input → Anomaly Detection (ML/Statistical) → Safety Interlock Logic (Zephyr RTOS/Python) → Emergency Stop → API Integration (Reference Hardware)',
      integration: 'Integriert mit Sensor Integration Package, Grid-OS Logik, und Reference Hardware über standardisierte APIs. Alle Safety-Funktionen sind software-basiert und API-kompatibel.',
    },
  },
  'sensor-integration': {
    nonTechnical: {
      what: 'Sensor Integration bedeutet: Du baust Daten-Pipelines, die alle Sensoren (Temperatur, Durchfluss, Leistung, Batterie) verbinden und die Daten in Echtzeit überwachen. Es ist wie das Nervensystem des Systems – es sammelt alle Informationen und macht sie verfügbar.',
      why: 'Ohne Sensor-Daten kann das System nicht intelligent reagieren. Sensor Integration ist die Grundlage für Grid-OS Logik und Operational Safety Logik – beide brauchen zuverlässige, validierte Sensordaten.',
      whatYouBuild: 'Du baust Sensor-Daten-Pipelines, die alle Sensoren (Temp, Flow, Power, Battery SOC) verbinden, ein Real-Time Monitoring Dashboard, ein Data Validation Framework, und API-Integration mit Grid-OS. Alles integriert mit der Reference Hardware.',
    },
    technical: {
      howItWorks: 'Sensor-Daten werden über I2C/SPI gesammelt, über MQTT/Mosquitto übertragen, in einer Time-Series DB (VictoriaMetrics) gespeichert, und in Echtzeit visualisiert. Data Validation Framework stellt sicher, dass alle Sensordaten korrekt und konsistent sind. API-Integration ermöglicht Grid-OS Zugriff auf Sensordaten.',
      architecture: 'Sensor-Layer (I2C/SPI) → Data Pipeline (MQTT/Mosquitto) → Time-Series DB (VictoriaMetrics) → Data Validation → Real-Time Monitoring (WebSockets) → API Integration (Grid-OS)',
      integration: 'Integriert mit Reference Hardware Sensoren, Grid-OS Logik (für Scheduling), Operational Safety Logik (für Anomalie-Erkennung), und Dashboard (Truth Layer).',
    },
  },
  'dashboard': {
    nonTechnical: {
      what: 'Das Dashboard ist das "Fenster" ins System. Es zeigt in Echtzeit, was gerade passiert: Wie viel Sonnenenergie kommt rein, wie viel Computer-Leistung läuft, wie viel Wärme produziert wird. Wichtig: Nur echte Daten, keine Fake-Visualisierungen.',
      why: 'Transparenz ist entscheidend. Wenn du nicht sehen kannst, was das System wirklich macht, kannst du es nicht vertrauen oder optimieren. Ein Dashboard mit echten Daten ermöglicht es jedem, das System zu verstehen und zu überwachen.',
      whatYouBuild: 'Du baust ein Live-Panel, das alle wichtigen Daten in Echtzeit anzeigt: Solar, Compute, Wärme, und eine Ampel-Anzeige für den System-Status. Alle Daten können als CSV oder JSON exportiert werden, damit andere Systeme darauf zugreifen können.',
    },
    technical: {
      howItWorks: 'Daten werden von Sensoren und APIs gesammelt (OpenTelemetry Collector), in einer Time-Series DB gespeichert (Prometheus), und in Echtzeit visualisiert (React/Vue Frontend mit WebSockets). Export-Funktion generiert CSV/JSON aus gespeicherten Metriken.',
      architecture: 'Data Collection (OpenTelemetry) → Storage (Prometheus/VictoriaMetrics) → Real-time Updates (WebSockets) → Visualization (React/Vue + D3.js) → Export (CSV/JSON API)',
    },
  },
  'leg-starter': {
    nonTechnical: {
      what: 'Ein LEG Starter Pack ist wie ein Baukasten für die rechtliche Gründung einer Lokalen Elektrizitätsgemeinschaft. Es enthält alle notwendigen Dokumente und Checklisten, damit Nachbarn legal zusammen Energie teilen können.',
      why: 'Die rechtliche Gründung einer LEG ist komplex und viele scheitern an den rechtlichen Hürden. Ein Starter Pack macht es einfacher, die richtigen Schritte zu gehen und alle regulatorischen Anforderungen zu erfüllen.',
      whatYouBuild: 'Du erstellst ein komplettes Template-Set: Statuten für die LEG, Verträge zwischen Teilnehmenden, FAQ zu rechtlichen Fragen, und eine Checkliste aller regulatorischen Anforderungen. Alles auf Deutsch, verständlich, und rechtlich korrekt.',
    },
    technical: {
      howItWorks: 'Templates basieren auf StromVG Art. 18 und EnG Art. 17. Statuten definieren die rechtliche Struktur (AG oder Genossenschaft). Verträge regeln Energie-Sharing zwischen Teilnehmenden. Checkliste deckt alle regulatorischen Anforderungen ab (Netzbetreiber, Steuern, Haftung).',
    },
  },
}

export function ChallengeExplanation({ packageId, color, nonTechnical, technical, risks }: ChallengeExplanationProps) {
  const defaultExplanation = challengeExplanations[packageId]
  
  const what = nonTechnical?.what || defaultExplanation?.nonTechnical?.what
  const why = nonTechnical?.why || defaultExplanation?.nonTechnical?.why
  const whatYouBuild = nonTechnical?.whatYouBuild || defaultExplanation?.nonTechnical?.whatYouBuild
  const howItWorks = technical?.howItWorks || defaultExplanation?.technical?.howItWorks
  const architecture = technical?.architecture || defaultExplanation?.technical?.architecture
  const integration = technical?.integration || defaultExplanation?.technical?.integration
  const packageRisks = risks || defaultExplanation?.risks

  return (
    <div className="space-y-3">
      {what && (
        <Accordion
          id={`${packageId}-what`}
          title="Was ist das?"
          icon="❓"
          color={color}
        >
          <p className="font-mono text-sm text-historic-sepia leading-relaxed">
            {what}
          </p>
        </Accordion>
      )}

      {why && (
        <Accordion
          id={`${packageId}-why`}
          title="Warum ist das wichtig?"
          icon="💡"
          color={color}
        >
          <p className="font-mono text-sm text-historic-sepia leading-relaxed">
            {why}
          </p>
        </Accordion>
      )}

      {whatYouBuild && (
        <Accordion
          id={`${packageId}-what-you-build`}
          title="Was baust du?"
          icon="🔨"
          color={color}
        >
          <p className="font-mono text-sm text-historic-sepia leading-relaxed">
            {whatYouBuild}
          </p>
        </Accordion>
      )}

      {howItWorks && (
        <Accordion
          id={`${packageId}-how-it-works`}
          title="Wie funktioniert das? (Technisch)"
          icon="⚙️"
          color={color}
        >
          <div className="space-y-3">
            <div>
              <h5 className="font-mono font-semibold text-brand-black mb-2">Funktionsweise</h5>
              <p className="font-mono text-sm text-historic-sepia leading-relaxed">
                {howItWorks}
              </p>
            </div>
            {architecture && (
              <div>
                <h5 className="font-mono font-semibold text-brand-black mb-2">Architektur</h5>
                <p className="font-mono text-sm text-historic-sepia leading-relaxed">
                  {architecture}
                </p>
              </div>
            )}
            {integration && (
              <div>
                <h5 className="font-mono font-semibold text-brand-black mb-2">Integration</h5>
                <p className="font-mono text-sm text-historic-sepia leading-relaxed">
                  {integration}
                </p>
              </div>
            )}
          </div>
        </Accordion>
      )}

      {packageRisks && (
        <Accordion
          id={`${packageId}-risks`}
          title="⚠️ Sicherheitsrisiken"
          icon="⚠️"
          color={color}
        >
          <div className="space-y-4">
            <p className="text-xs font-mono text-historic-sepia mb-3">
              {packageRisks.title}
            </p>
            {packageRisks.hazards.map((hazard, i) => (
              <div key={i} className="bg-sihl-red/5 border border-sihl-red/20 rounded-lg p-3">
                <p className="text-xs font-mono text-brand-black font-semibold mb-2 flex items-start gap-2">
                  <span className="text-sihl-red mt-0.5">⚠</span>
                  <span>{hazard.risk}</span>
                </p>
                <div className="bg-grid-green/10 border border-grid-green/30 rounded p-2 mt-2">
                  <p className="text-[10px] font-mono text-brand-black font-semibold mb-1">Schutzmassnahmen:</p>
                  <p className="text-[10px] font-mono text-historic-sepia">{hazard.mitigation}</p>
                </div>
              </div>
            ))}
            <div className="mt-4 pt-3 border-t border-gray-200">
              <a href="/safety#challenge-risks" className="text-thermal-orange hover:underline font-mono text-xs">
                → Detaillierte Risikoanalyse auf der Safety-Seite
              </a>
            </div>
          </div>
        </Accordion>
      )}
    </div>
  )
}
