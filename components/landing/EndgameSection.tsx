export function EndgameSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-black via-[#0a0a0a] to-compute-blue/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-solar-yellow uppercase tracking-widest">
            Die grosse Vision
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-4">
            Was ist das mögliche ENDGAME?
          </h2>
          <p className="mt-4 text-lg text-gray-300 font-mono max-w-3xl mx-auto">
            Sihlthal als Node in einem dezentralen, solar-betriebenen AI-Netzwerk: 
            klein genug für Schweizer Präzision, gross genug um Silicon Valley zu ärgern.
          </p>
        </div>

        {/* The Vision Statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-solar-yellow/10 to-thermal-orange/10 border border-solar-yellow/30 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">⚡</div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  Nicht Gigant. Spike.
                </h3>
                <p className="font-mono text-sm text-gray-300 leading-relaxed">
                  Das Ziel ist nicht, ein weiteres Silicon Valley zu werden. Das Ziel ist, ein Netzwerk aus 
                  <strong className="text-solar-yellow"> hunderten bis tausenden dezentralen I-Nodes</strong> aufzubauen, 
                  die unter Schweizer Recht operieren: lokale Energie, maximale Datensouveränität, 
                  und die Präzision, die nur kleine, fokussierte Teams liefern können.
                </p>
                <p className="font-mono text-sm text-gray-300 leading-relaxed mt-4">
                  Wo Big Tech Milliarden in zentralisierte Rechenzentren pumpt, setzen wir auf 
                  <strong className="text-grid-green"> Hybrid Edge-Cloud Architektur</strong>. 
                  Studien zeigen: bis zu <strong className="text-white">75% weniger Energieverbrauch</strong>, 
                  <strong className="text-white">80% niedrigere Kosten</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Numbers That Matter */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-bold text-white text-center mb-8">
            Die Zahlen, die Silicon Valley nervös machen
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Market Growth */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="font-mono text-4xl font-bold text-solar-yellow mb-2">
                $45 Mrd
              </div>
              <div className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-3">
                Dezentraler AI-Compute Markt 2035
              </div>
              <div className="font-mono text-sm text-gray-300">
                <span className="text-gray-500">heute:</span> $10.7 Mrd
              </div>
              <div className="mt-2 text-xs font-mono text-grid-green">
                CAGR 15.5%
              </div>
            </div>

            {/* Cost Advantage */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="font-mono text-4xl font-bold text-grid-green mb-2">
                50-90%
              </div>
              <div className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-3">
                Kostenersparnis vs. Hyperscaler
              </div>
              <div className="font-mono text-sm text-gray-300">
                Distributed GPU: <span className="text-white">$1.70-2.10/h</span>
              </div>
              <div className="mt-2 text-xs font-mono text-gray-500">
                vs. AWS/Azure Preise
              </div>
            </div>

            {/* Swiss Investment */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="font-mono text-4xl font-bold text-compute-blue mb-2">
                CHF 500M+
              </div>
              <div className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-3">
                Investitionen in CH AI-Infrastruktur
              </div>
              <div className="font-mono text-sm text-gray-300">
                Microsoft: <span className="text-white">$400M</span> committed
              </div>
              <div className="mt-2 text-xs font-mono text-gray-500">
                Alps Supercomputer: CHF 100M
              </div>
            </div>

            {/* Scale Target */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="font-mono text-4xl font-bold text-thermal-orange mb-2">
                500-2000
              </div>
              <div className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-3">
                I-Nodes im ENDGAME
              </div>
              <div className="font-mono text-sm text-gray-300">
                Kapazität: <span className="text-white">20-50 MW</span>
              </div>
              <div className="mt-2 text-xs font-mono text-gray-500">
                Verteilt über ganze Schweiz
              </div>
            </div>
          </div>
        </div>

        {/* V1 vs V2 Comparison */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* V1 - Current */}
            <div className="bg-white/5 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full font-mono text-xs font-bold">
                  v1: Proof of Concept
                </span>
              </div>
              <h4 className="font-display text-xl font-bold text-white mb-4">Heute: Demo Scale</h4>
              <ul className="space-y-3 font-mono text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-1">→</span>
                  <span>5-20 I-Nodes, lokal verfügbar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-1">→</span>
                  <span>150W Solar, 20L Tank</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-1">→</span>
                  <span>Proof: Solar → Compute → Heat + fail-closed Safety-Clearance + Live-Runtime-API</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-1">→</span>
                  <span>Open Source Foundation</span>
                </li>
              </ul>
            </div>

            {/* V2 - Endgame */}
            <div className="bg-gradient-to-br from-grid-green/20 to-compute-blue/20 border border-grid-green/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-grid-green text-brand-black px-3 py-1 rounded-full font-mono text-xs font-bold">
                  v2: Production Scale
                </span>
              </div>
              <h4 className="font-display text-xl font-bold text-white mb-4">ENDGAME: Wirtschaftlich Tragfähig</h4>
              <ul className="space-y-3 font-mono text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-grid-green mt-1">→</span>
                  <span><strong className="text-white">500-2000 I-Nodes</strong> schweizweit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-grid-green mt-1">→</span>
                  <span><strong className="text-white">20-50 MW</strong> AI-Compute Kapazität</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-grid-green mt-1">→</span>
                  <span>Inference + Fine-Tuning für CH Industrie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-grid-green mt-1">→</span>
                  <span><strong className="text-white">CHF 50-200M</strong> Investment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-grid-green mt-1">→</span>
                  <span>Break-even in <strong className="text-white">3-5 Jahren</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Swiss Spikes vs Silicon Valley */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="font-display text-2xl font-bold text-white text-center mb-8">
            Swiss Spikes vs. Silicon Valley Titans
          </h3>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 gap-0 divide-x divide-white/10">
              {/* Header */}
              <div className="p-4 bg-white/5 font-mono text-xs text-gray-400 uppercase tracking-wider">
                Metrik
              </div>
              <div className="p-4 bg-white/5 text-center">
                <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">Big Tech</span>
              </div>
              <div className="p-4 bg-grid-green/20 text-center">
                <span className="font-mono text-xs text-grid-green uppercase tracking-wider">Sihlicon Hub</span>
              </div>
            </div>

            {/* Row 1: Architecture */}
            <div className="grid grid-cols-3 gap-0 divide-x divide-white/10 border-t border-white/10">
              <div className="p-4 font-mono text-sm text-gray-300">Architektur</div>
              <div className="p-4 text-center font-mono text-sm text-gray-400">Zentralisierte Mega-DCs</div>
              <div className="p-4 text-center font-mono text-sm text-white">Dezentrale I-Nodes</div>
            </div>

            {/* Row 2: Energy */}
            <div className="grid grid-cols-3 gap-0 divide-x divide-white/10 border-t border-white/10">
              <div className="p-4 font-mono text-sm text-gray-300">Energie-Effizienz</div>
              <div className="p-4 text-center font-mono text-sm text-gray-400">PUE 1.4-1.8</div>
              <div className="p-4 text-center font-mono text-sm text-grid-green">PUE 1.03-1.10 (Immersion)</div>
            </div>

            {/* Row 3: Heat Recovery */}
            <div className="grid grid-cols-3 gap-0 divide-x divide-white/10 border-t border-white/10">
              <div className="p-4 font-mono text-sm text-gray-300">Abwärme-Nutzung</div>
              <div className="p-4 text-center font-mono text-sm text-sihl-red">~0% (verschwendet)</div>
              <div className="p-4 text-center font-mono text-sm text-grid-green">99% → Heizung</div>
            </div>

            {/* Row 4: Data Sovereignty */}
            <div className="grid grid-cols-3 gap-0 divide-x divide-white/10 border-t border-white/10">
              <div className="p-4 font-mono text-sm text-gray-300">Datensouveränität</div>
              <div className="p-4 text-center font-mono text-sm text-gray-400">US CLOUD Act</div>
              <div className="p-4 text-center font-mono text-sm text-grid-green">Schweizer Recht + DSG</div>
            </div>

            {/* Row 5: Cost per Inference */}
            <div className="grid grid-cols-3 gap-0 divide-x divide-white/10 border-t border-white/10">
              <div className="p-4 font-mono text-sm text-gray-300">Kosten / GPU-Stunde</div>
              <div className="p-4 text-center font-mono text-sm text-gray-400">$3-8/h (AWS/Azure)</div>
              <div className="p-4 text-center font-mono text-sm text-grid-green">$1.70-2.10/h</div>
            </div>

            {/* Row 6: Governance */}
            <div className="grid grid-cols-3 gap-0 divide-x divide-white/10 border-t border-white/10">
              <div className="p-4 font-mono text-sm text-gray-300">Governance</div>
              <div className="p-4 text-center font-mono text-sm text-gray-400">Konzern-Blackbox</div>
              <div className="p-4 text-center font-mono text-sm text-grid-green">Open Source + LEG</div>
            </div>
          </div>
        </div>

        {/* Strategic Advantages */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="font-display text-2xl font-bold text-white text-center mb-8">
            Warum die Schweiz gewinnen kann
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">🏔️</div>
              <h4 className="font-display text-lg font-bold text-white mb-2">Energie-Vorteil</h4>
              <p className="font-mono text-sm text-gray-400">
                Schweiz: <strong className="text-white">~60% Wasserkraft</strong>, kühles Klima für natürliche Kühlung, 
                stabile Stromnetze. Weniger Kosten, weniger CO₂.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">🔒</div>
              <h4 className="font-display text-lg font-bold text-white mb-2">Vertrauens-Vorteil</h4>
              <p className="font-mono text-sm text-gray-400">
                Politische Neutralität, starker Datenschutz (DSG), keine US CLOUD Act Risiken. 
                Für <strong className="text-white">Banken, Pharma, Behörden</strong> entscheidend.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="font-display text-lg font-bold text-white mb-2">Nischen-Strategie</h4>
              <p className="font-mono text-sm text-gray-400">
                Nicht Frontalangriff auf Training. Fokus auf <strong className="text-white">Inference, Fine-Tuning, 
                domänenspezifische Modelle</strong>. Dort sind wir konkurrenzfähig.
              </p>
            </div>
          </div>
        </div>

        {/* Reality Check */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-sihl-red/10 border border-sihl-red/30 rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold text-sihl-red mb-4 flex items-center gap-3">
              <span>⚠️</span> Reality Check: Was das NICHT ist
            </h3>
            <ul className="space-y-3 font-mono text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-sihl-red mt-0.5">✗</span>
                <span>
                  <strong className="text-white">Kein Ersatz für Training großer Modelle.</strong> GPT-5 Training braucht zentrale Mega-Cluster. Das ist nicht unser Spiel.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sihl-red mt-0.5">✗</span>
                <span>
                  <strong className="text-white">Kein schneller ROI.</strong> CHF 50-200M Investment, Break-even in 3-5 Jahren. Das braucht Geduld.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sihl-red mt-0.5">✗</span>
                <span>
                  <strong className="text-white">Hardware-Abhängigkeit bleibt.</strong> Schweiz ist Tier 2 bei US Chip-Exportkontrollen. GPU-Zugang ist ein Risiko.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sihl-red mt-0.5">✗</span>
                <span>
                  <strong className="text-white">Energie ist endlich.</strong> Bis 2030 könnten Rechenzentren 10-15% des Schweizer Stroms verbrauchen.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Final Statement */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-solar-yellow/20 via-thermal-orange/20 to-compute-blue/20 border border-solar-yellow/30 rounded-2xl p-8 md:p-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
              Das ENDGAME ist kein Traum. Es ist ein Plan.
            </h3>
            <p className="font-mono text-sm text-gray-300 leading-relaxed mb-6">
              Wenn v1 funktioniert, messbar, reproduzierbar, open source, dann folgt v2. 
              Nicht als Kopie von Silicon Valley, sondern als <strong className="text-solar-yellow">Schweizer Spike</strong>: 
              klein, präzise, souverän. Genug Substanz um mitzuspielen. 
              Genug Differenzierung um zu stören.
            </p>
            <p className="font-mono text-lg text-white font-bold">
              Sihlthal heute. Die Schweiz morgen. Die Welt übermorgen.
            </p>
            <p className="font-mono text-xs text-gray-500 mt-4">
              Alle Zahlen basieren auf öffentlichen Quellen: ArXiv, Statista, swissinfo.ch, McKinsey, Bain & Company.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
