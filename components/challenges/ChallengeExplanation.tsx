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
}> = {
  'demo-kit': {
    nonTechnical: {
      what: 'Ein End-to-End Demo-Kit ist wie ein Rezept, das beweist, dass das ganze System funktioniert. Stell dir vor: Du hast ein intelligentes Energiesystem, das Sonnenenergie speichert, Computer-Aufgaben erledigt und dabei Wärme produziert. Das Demo-Kit zeigt, dass all diese Teile zusammenarbeiten – von der Sonne bis zur warmen Heizung.',
      why: 'Ohne einen funktionierenden End-to-End Flow können wir nicht beweisen, dass das Konzept in der echten Welt funktioniert. Es ist wie ein Prototyp: Wenn du nicht zeigen kannst, dass alles zusammenarbeitet, bleibt es nur eine Idee. Das Demo-Kit macht das System nachbaubar und beweisbar.',
      whatYouBuild: 'Du baust ein System, das alle Energieflüsse misst und aufzeichnet: Wie viel Sonnenenergie kommt rein? Wie viel wird für Computer-Aufgaben verwendet? Wie viel Wärme entsteht? Alles wird in einem einfachen "Ein-Knopf-Demo" gezeigt, das jeder nachvollziehen kann.',
    },
    technical: {
      howItWorks: 'Das System integriert Sensoren für Solar-Leistung (P_solar), Compute-Leistung (P_compute), Durchflussraten und Temperaturdifferenzen (ΔT). Ein zentrales Logging-System (z.B. Prometheus + VictoriaMetrics) sammelt alle Daten in Echtzeit. Ein Demo-Script startet den kompletten Energie-Flow und generiert ein Protokoll mit erwarteten Werten.',
      architecture: 'Sensor-Layer (I2C/SPI) → Data Pipeline (MQTT/Mosquitto) → Time-Series DB (VictoriaMetrics) → Visualization (Grafana/Home Assistant) → Demo Script (Python/Node-RED)',
      integration: 'Integriert mit Solar-Inverter-APIs (Fronius/SMA), Compute-Scheduler (Grid-OS), und Thermal-System (Immersion/Water/Heat Pump). Alle Komponenten kommunizieren über standardisierte Protokolle.',
    },
  },
  'hardware-safety': {
    nonTechnical: {
      what: 'Hardware Safety bedeutet: Du stellst sicher, dass das System sicher in Gebäuden betrieben werden kann. Es ist wie ein Bauvorschriften-Check für Energie-Systeme – es muss absolut sicher sein, bevor es in echten Gebäuden eingesetzt wird.',
      why: 'Sicherheit ist nicht verhandelbar. Ein System, das Öl, Wasser, Strom und hohe Temperaturen kombiniert, braucht robuste Sicherheitsmassnahmen. Ohne Safety Case kann niemand das System legal und verantwortungsvoll betreiben. Es ist die Grundlage für real-world Deployment.',
      whatYouBuild: 'Du baust ein komplettes Sicherheits-System: Schutzschalter (RCD/GFCI), die bei Problemen sofort abschalten, Not-Aus-Schalter für Notfälle, Leckwannen für Öl/Wasser, Temperatur-Überwachung und eine vollständige Dokumentation aller Sicherheitsmassnahmen.',
    },
    technical: {
      howItWorks: 'RCD/GFCI (30mA Trip) überwacht Fehlerströme und schaltet bei Leckage sofort ab. Not-Aus-Schalter sind physisch erreichbar und trennen alle kritischen Systeme. Leckwannen fangen Öl/Wasser auf. Temperatur-Sensoren mit Max-Limits triggern automatische Abschaltung. Alle Komponenten sind redundant und fail-safe ausgelegt.',
      architecture: 'Safety Layer (RCD/GFCI/Not-Aus) → Monitoring (Temp/Flow/Power Sensors) → Interlock Logic (Zephyr RTOS/LibreSolar) → Documentation (BOM + Safety Case)',
      integration: 'Integriert mit allen Thermal-Pfaden (Immersion/Water/Heat Pump), Grid-OS für Load Shedding, und Compute-System für Notfall-Abschaltung.',
    },
  },
  'grid-os': {
    nonTechnical: {
      what: 'Grid-OS ist das "Gehirn" des Systems. Es entscheidet intelligent, wann Computer-Aufgaben laufen, wann die Batterie geladen wird, und wann Wärme produziert wird. Es ist wie ein intelligenter Thermostat, aber für Energie und Computing – es passt sich automatisch an die verfügbare Sonnenenergie an.',
      why: 'Ohne intelligente Steuerung wäre das System nur ein teures passives Heizsystem. Grid-OS macht es intelligent: Es nutzt Sonnenenergie optimal, verschiebt Computer-Aufgaben auf Zeiten mit viel Solar, und kann bei Netzproblemen automatisch reagieren. Das ist der Unterschied zwischen einem passiven System und einem aktiven Energie-Knoten.',
      whatYouBuild: 'Du baust einen Scheduler, der Solar-Budget berechnet, Computer-Aufgaben plant, und Fallback-Regeln definiert. Das System kann historische Solar-Daten "abspielen" (Replay-Modus), um zu testen, wie es in verschiedenen Situationen reagieren würde. Eine API erlaubt anderen Systemen, mit dem Grid-OS zu kommunizieren.',
    },
    technical: {
      howItWorks: 'Der Scheduler liest Solar-Budget von Inverter-APIs, berechnet verfügbare Energie, und plant Compute-Jobs entsprechend. Fallback-Policies definieren Verhalten bei Solar-Ausfall oder Netz-Instabilität. Replay-Modus simuliert historische Solar-Zeitreihen. API (REST/GraphQL) ermöglicht externe Integration.',
      architecture: 'Input Layer (Solar APIs/Swissgrid Signals) → Policy Engine (Node-RED/Python) → Scheduler (k3s/Ollama for intelligent scheduling) → Output Layer (Compute Control/Battery Management) → API Gateway (NATS/OpenTelemetry)',
      integration: 'Integriert mit Solar-Invertern (Fronius/SMA), Swissgrid-Signalen (Frequenz/Spannung), Compute-System (Grid-OS → Server Control), Battery Management (LibreSolar), und Dashboard (Truth Layer).',
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
      whatYouBuild: 'Du erstellst ein komplettes Template-Set: Statuten für die LEG, Verträge zwischen Teilnehmern, FAQ zu rechtlichen Fragen, und eine Checkliste aller regulatorischen Anforderungen. Alles auf Deutsch, verständlich, und rechtlich korrekt.',
    },
    technical: {
      howItWorks: 'Templates basieren auf StromVG Art. 18 und EnG Art. 17. Statuten definieren die rechtliche Struktur (AG oder Genossenschaft). Verträge regeln Energie-Sharing zwischen Teilnehmern. Checkliste deckt alle regulatorischen Anforderungen ab (Netzbetreiber, Steuern, Haftung).',
    },
  },
}

export function ChallengeExplanation({ packageId, color, nonTechnical, technical }: ChallengeExplanationProps) {
  const defaultExplanation = challengeExplanations[packageId]
  
  const what = nonTechnical?.what || defaultExplanation?.nonTechnical?.what
  const why = nonTechnical?.why || defaultExplanation?.nonTechnical?.why
  const whatYouBuild = nonTechnical?.whatYouBuild || defaultExplanation?.nonTechnical?.whatYouBuild
  const howItWorks = technical?.howItWorks || defaultExplanation?.technical?.howItWorks
  const architecture = technical?.architecture || defaultExplanation?.technical?.architecture
  const integration = technical?.integration || defaultExplanation?.technical?.integration

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
    </div>
  )
}
