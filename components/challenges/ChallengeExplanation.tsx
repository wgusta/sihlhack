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
      why: 'Ohne intelligente Steuerung wäre das System nur ein passives Heizsystem. Grid-OS Logik macht es intelligent: Es entscheidet WANN gerechnet wird. Im Sommer maximiert es Compute bei Solar-Überschuss, im Winter priorisiert es Wärme und nutzt günstige Netzfenster. Dieser Rhythmus ist kein Problem, sondern der Taktgeber eures Schedulers.',
      whatYouBuild: 'Du programmierst einen Scheduler mit Solar-Budget-Algorithmen, Deferred Compute Logik, und Load Shedding Policies. Dazu kommt inter-LEG Compute Credit Scheduling: Hubs inserieren verfügbare Rechenkapazität in kWh, andere Hubs können diese für Jobs beanspruchen. Das System entwickelt gegen den Sihl-Sim (Digital Twin), testet auf dem Safety Avatar, und deployt auf der supervised Reference Hardware.',
    },
    technical: {
      howItWorks: 'Der Scheduler liest Solar-Budget von Inverter-APIs, berechnet verfügbare Energie, und plant Compute-Jobs entsprechend. Deferred Compute verschiebt Jobs auf Zeiten mit viel Solar. Load Shedding Policies definieren Verhalten bei Solar-Ausfall oder Netz-Instabilität. Überschüssige Kapazität wird als Compute Credits (kWh, 15-Min-Fenster) an andere Hubs im LEG Marketplace angeboten. Integration mit Sihl-Sim API für Simulation.',
      architecture: 'Input Layer (Solar APIs/Swissgrid Signals) → Policy Engine (Node-RED/Python) → Scheduler (k3s/Ollama for intelligent scheduling) → Output Layer (Compute Control/Battery Management) → API Gateway (NATS/OpenTelemetry)',
      integration: 'Integriert mit Sihl-Sim (Digital Twin API), Solar-Invertern (Fronius/SMA), Swissgrid-Signalen (Frequenz/Spannung), Compute-System (Grid-OS → Server Control), Battery Management, und Reference Hardware.',
    },
  },
  'operational-safety-logic': {
    nonTechnical: {
      what: 'Multi-Node Safety Koordination bedeutet: Du programmierst Software-Sicherheitsverriegelungen, die mehrere Nodes koordiniert sichern. Es ist wie ein verteilter Sicherheitswächter – die Software synchronisiert Safety-Checks über mehrere Nodes und erkennt Ausfälle im Netzwerk.',
      why: 'Sicherheit ist nicht verhandelbar und hat immer Scheduling-Priorität 1. Egal wie das Energiebudget aussieht: Heartbeats laufen, Konsens-Checks laufen, Not-Aus reagiert in unter 100ms. Euer Safety-Scheduler definiert die Grenzen, die Grid-OS respektieren muss.',
      whatYouBuild: 'Du programmierst Multi-Node-Sicherheitsverriegelungen: Netzwerkweite Anomalie-Erkennung, Emergency Stop Logik mit Failover, verteilte Sensor-Validierung, und Inter-Node Safety Interlocks. Alles API-basiert.',
    },
    technical: {
      howItWorks: 'Multi-Node-Anomalie-Erkennungs-Algorithmen synchronisieren Safety-Checks über mehrere Nodes und erkennen verteilte Fehler. Emergency-Stop-Logik koordiniert Abschaltungen über Nodes mit Failover-Mechanismen. Netzwerkweite Sensor-Validierung erkennt ausgefallene Nodes. Vor jeder Aktorik wird eine fail-closed Safety-Clearance geprüft.',
      architecture: 'Multi-Node Sensor Input → Distributed Anomaly Detection → Inter-Node Safety Interlocks (Zephyr RTOS/Python + Network Sync) → Coordinated Emergency Stop → API Integration (Multiple Nodes)',
      integration: 'Integriert mit Sensor Integration Package (alle Nodes), Grid-OS Logik (Scheduler-Koordination), und Reference Hardware über standardisierte APIs. Safety-Funktionen sind verteilt und netzwerkfähig.',
    },
  },
  'sensor-integration': {
    nonTechnical: {
      what: 'Sensor Integration bedeutet: Du baust Daten-Pipelines, die alle Sensoren (Temperatur, Durchfluss, Leistung, Batterie) verbinden und die Daten in Echtzeit überwachen. Zusätzlich baust du ein Dashboard mit echten Live-Daten (keine Fake-Visualisierungen). Es ist wie das Nervensystem des Systems – es sammelt alle Informationen und zeigt sie transparent an.',
      why: 'Ohne Sensor-Daten kann kein Scheduler intelligent entscheiden. Aber Sensor-Verarbeitung braucht selbst Energie. Eure Pipeline muss unter variablem Energiebudget funktionieren: Safety-Sensoren laufen immer auf voller Rate, Analytics-Sensoren werden gedrosselt wenn Solar fehlt. Ihr löst die zirkuläre Abhängigkeit: Sensoren füttern Grid-OS, Grid-OS bestimmt euer Energiebudget.',
      whatYouBuild: 'Du baust Sensor-Daten-Pipelines, die alle Sensoren (Temp, Flow, Power, Battery SOC) verbinden, ein Real-Time Monitoring Dashboard (nur echte Daten, kein Fake), ein Data Validation Framework, API-Integration mit Grid-OS, und CSV/JSON Export für alle Metriken.',
    },
    technical: {
      howItWorks: 'Sensor-Daten werden über I2C/SPI gesammelt, über MQTT/Mosquitto übertragen, in InfluxDB gespeichert und in Echtzeit visualisiert (WebSockets). Während der Migration werden `sihlhack/*` (kanonisch) und `sihlhub/*` (legacy) verarbeitet. Das Data-Validation-Framework stellt sicher, dass alle Sensordaten korrekt sind.',
      architecture: 'Sensor-Layer (I2C/SPI) → Data Pipeline (MQTT: `sihlhack/*` + `sihlhub/*`) → InfluxDB → Data Validation → Real-Time Dashboard (WebSockets + React/Vue) → CSV/JSON Export → API Integration (Grid-OS)',
      integration: 'Integriert mit Reference-Hardware-Sensoren, Grid-OS-Logik (Scheduling), Multi-Node-Safety-Koordination (Anomalie-Erkennung) und Dashboard als Truth-Layer mit echten Daten.',
    },
  },
  'leg-starter': {
    nonTechnical: {
      what: 'LEG Legal & Hardware Compliance ist ein Baukasten für die rechtliche LEG-Gründung plus Hardware-Wiederverwendungs-Compliance. Es enthält alle Dokumente für legales Energie-Sharing und klärende Leitfäden zur sicheren Wiederverwendung von Server-Hardware (CE-Kennzeichnung, Gewährleistung, Haftung).',
      why: 'Die rechtliche Gründung einer LEG ist komplex und Hardware-Reuse wirft Compliance-Fragen auf (CE-Markierung bei Umbauten, Gewährleistung bei gebrauchter Hardware, Haftung bei Fehlfunktion). Dieser Pack macht beides einfacher und rechtssicher.',
      whatYouBuild: 'Du erstellst ein komplettes Template-Set: Statuten für die LEG, Verträge zwischen Teilnehmenden, FAQ zu rechtlichen Fragen, regulatorische Checkliste, plus Hardware-Reuse Compliance (CE-Kennzeichnung, Gewährleistung, Haftung), Versicherungs-Checkliste, und PrSG-Leitfaden (Produktsicherheit).',
    },
    technical: {
      howItWorks: 'Templates basieren auf Schweizer Recht und gängigen Praxisanforderungen. Statuten definieren die rechtliche Struktur (AG oder Genossenschaft). Verträge regeln Energie-Sharing zwischen Teilnehmenden. Checkliste deckt regulatorische Anforderungen ab (Netzbetreiber, Steuern, Haftung). Hardware Compliance deckt CE-Kennzeichnung (relevante Richtlinien bei Umbauten), Gewährleistung (gebrauchte Komponenten), PrSG (Produktsicherheitsgesetz), und Versicherungsanforderungen.',
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
