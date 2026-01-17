# Sihlicon Core: Heat-Optimized Computing Infrastructure Research

**Date:** 2026-01-17
**Project:** sihlhack.ch
**Purpose:** Feasibility analysis for building computing infrastructure optimized for heat output using European/Swiss materials and manufacturing

---

## Executive Summary

This report investigates the feasibility of building computing systems in Switzerland that prioritize **heat output over electrical efficiency**, using materials and manufacturing processes available in Europe without dependency on Asian supply chains.

**Key Finding:** This is technically feasible through multiple pathways, with the most practical being:

1. **Repurposed server infrastructure** for heating (proven, operational in Switzerland)
2. **European-fab custom ASICs** at mature nodes (22nm-350nm)
3. **Discrete transistor computers** for educational/artistic demonstration

Switzerland already has regulatory frameworks requiring data center heat capture, and existing projects (RY3T, Infomaniak) demonstrate commercial viability.

---

## Table of Contents

1. [The Inverted Efficiency Paradigm](#1-the-inverted-efficiency-paradigm)
2. [Heat-Optimized Computing Architectures](#2-heat-optimized-computing-architectures)
3. [Materials China Controls](#3-materials-china-controls)
4. [European/Swiss Supply Chain](#4-europeanswiss-supply-chain)
5. [European Semiconductor Fabrication](#5-european-semiconductor-fabrication)
6. [Non-Optimal Manufacturing Approaches](#6-non-optimal-manufacturing-approaches)
7. [Swiss Industrial Context](#7-swiss-industrial-context)
8. [District Heating Integration](#8-district-heating-integration)
9. [Economic Analysis](#9-economic-analysis)
10. [Implementation Paths](#10-implementation-paths)
11. [The Sihlicon Core Concept](#11-the-sihlicon-core-concept)
12. [Sources and References](#12-sources-and-references)

---

## 1. The Inverted Efficiency Paradigm

### Traditional Computing Optimization

Modern computing optimizes for:
- Maximum computation per watt (performance/watt)
- Minimum heat generation
- Lowest thermal design power (TDP)

### Heat-Optimized Computing (Inverted)

The sihlicon core concept inverts this:
- Heat is the **primary product**, not waste
- Computation is a **useful byproduct**
- Efficiency metrics become: useful heat per CHF invested

### Thermodynamic Foundation

**Landauer's Principle** establishes the theoretical minimum heat generation:
- Minimum dissipation per bit erasure: E = kT ln 2
- At room temperature: ~0.017 eV or 2.7 × 10⁻²¹ joules
- Modern computers use approximately **1 billion times more energy** per operation than this limit
- This "inefficiency" is the opportunity for heat harvesting

**Key Insight:** "8kW of power into any silicon electronics equals approximately 8kW of waste heat. Unlike a motor or lights, a CPU is all waste-heat."

---

## 2. Heat-Optimized Computing Architectures

### 2.1 Older Semiconductor Process Nodes

Legacy nodes (28nm, 45nm, 65nm, 90nm) remain actively manufactured and are inherently less efficient:

| Process Node | Year Introduced | Typical Leakage | Status |
|--------------|-----------------|-----------------|--------|
| 90nm | 2004 | High | Active production |
| 65nm | 2006 | High | Active production |
| 45nm | 2008 | Moderate | Active production |
| 28nm | 2011 | Moderate | "Instant classic," high demand |
| 22nm | 2012 | Lower | Active production |

**Why Legacy Nodes Persist:**
- 70% of all chips used globally are 28nm or older
- Automotive: 3'000+ chips per vehicle, mostly 45nm
- Industrial/IoT: Cost-effective for non-performance-critical applications
- Design costs: CHF 40M for 28nm vs CHF 590M for 3nm

**Wafer Pricing (2025):**
- SMIC 28nm: ~USD 1'500/wafer (300mm)
- Taiwan foundries 28nm: ~USD 3'000/wafer
- Advanced 3nm: ~USD 45'000/wafer

### 2.2 Resistive Computing and Neuromorphic Chips

**Heat-Assisted Neuromorphic Computing:**
Research in Nature Materials describes NbOx devices that harness heat currents to compute:
- Heat facilitates electrical resistance switching in Mott insulators
- RRAM-based systems show temperature differences up to 17.16K across chips
- 73% of industry experts identify heat dissipation as a major barrier (which inverts to an opportunity)

**Vanadium Dioxide (VO₂) Computing:**
- Metal-insulator transition at ~67°C
- Directly couples electrical and thermal computation
- Picosecond switching with femtojoule energies
- Processes signals in both electrical and thermal forms

### 2.3 GPU Heat Generation Comparison

| Era | Flagship | TDP | Performance/Watt |
|-----|----------|-----|------------------|
| 2006 | GeForce 8800 GTX | ~150W | Baseline |
| 2010 | GeForce GTX 480 | ~300W | ~2× baseline |
| 2020 | GeForce RTX 3090 | 350W | ~50× baseline |
| 2024 | GeForce RTX 4090 | 450W | ~100× baseline |

**Key Finding:** Modern GPUs are vastly more efficient per computation, but absolute heat output has increased. A 2017 low-end GPU (GT 1030, 30W) matches 2006 flagship performance.

### 2.4 Historical Computing Heat Output

**ENIAC (1946):**
- 18'000 vacuum tubes
- 150kW total power consumption:
  - 80kW for heating tubes
  - 45kW for DC power supplies
  - 20kW for ventilation blowers
- Power-to-heat conversion: nearly 100%

**Cray Supercomputers:**
- Cray-1 (1976): 115kW, required liquid cooling
- Heat density drove innovative cooling solutions

---

## 3. Materials China Controls

### 3.1 Gallium

**Market Dominance:**
- China: **98% of primary low-purity gallium production**
- China: **86% of worldwide production capacity** (870'000 kg/year)
- China: **83% of global reserves** (190'000 of 230'000 tonnes)

**Semiconductor Applications:**
- GaAs (gallium arsenide): 74% of gallium consumption in ICs
- GaN (gallium nitride): 5G base stations, power amplifiers
- 52% of China's gallium goes to LEDs, 17% to integrated circuits

**Thermal Properties (Heat-Relevant):**
- GaAs has **lower thermal conductivity than silicon** (~3× worse)
- Higher risk of local overheating
- Less efficient heat dissipation
- **More heat retained per computation**

### 3.2 Germanium

**Market Dominance:**
- China: **93-94% of global germanium production**
- China exports decreased 55% after August 2023 export controls

**Semiconductor Properties:**
- **Lower thermal conductivity** than silicon
- **Higher carrier mobility**: electron mobility 2× silicon, hole mobility 4× silicon
- **Lower bandgap** (0.66 eV vs 1.12 eV silicon)
- Transistors can use **1/4 the energy** of silicon to switch states

**Heat Characteristics:**
Germanium's poor thermal stability and lower thermal conductivity make it **less efficient at heat dissipation**, potentially suitable for heat-optimized designs.

### 3.3 Rare Earth Elements

**Processing Dominance:**
- China: **69% of mining**, but **90% of processing/refining**
- China: **100% of heavy rare earth refining** (dysprosium, terbium)
- China: **94% of permanent magnet production**

**Computing Applications:**
- **Neodymium**: NdFeB magnets in hard drives, speakers
- **Dysprosium**: Thermal stability for magnets (high-temp operation)
- **Terbium**: Magnet performance under heat
- **Yttrium**: Phosphors, ceramics, superconductors

### 3.4 Other China-Controlled Materials

| Material | China Control | Computing Application |
|----------|---------------|----------------------|
| Indium | 62% | ITO for displays, touchscreens |
| Antimony | 56% | n-type silicon dopant, 2D materials |
| Bismuth | Significant | Thermoelectric materials |
| Tungsten | Major producer | 2D materials research |

---

## 4. European/Swiss Supply Chain

### 4.1 Silicon

**Norway is the key European source:**
- 360'000 tonnes production in 2022 (largest in Europe)

**Key Suppliers:**
| Company | Location | Capacity | Notes |
|---------|----------|----------|-------|
| Elkem ASA | Norway | 1.4M tonnes/year | Proprietary process, 75% less energy |
| Wacker Chemie | Germany/Norway | 800'000 tonnes/year | Holla site covers 1/3 of German fab needs |
| REC Solar | Norway | 8'000+ MT/year | Solar-grade silicon |

**Verdict:** ✅ Silicon supply secure through European sources

### 4.2 Copper

**Poland is the key European source:**
- KGHM Polska Miedz: Three underground mines
- 34'000 employees worldwide
- New deposits could supply EU for 60 years
- World's 13th largest producer (2% global)

**Verdict:** ✅ Copper for PCBs and interconnects available

### 4.3 Aluminum

**Norway dominates with 40% of European production:**
- Norsk Hydro: Europe's largest primary aluminium plant (Sunndal)
- Karmøy: World's lowest-carbon aluminum (3.5 kg CO₂/kg vs 18-20 kg coal-based)
- Vigeland: 99.99% purity aluminum

**Verdict:** ✅ Aluminum abundantly available, lowest carbon footprint globally

### 4.4 Germanium

**Belgium's Umicore is the critical European supplier:**
- One of largest producers/recyclers outside China
- Refines to 99.99999999999% purity (13 nines)
- Over 50% from recycled sources
- Two projects selected under EU Critical Raw Materials Act

**Verdict:** ⚠️ Available but constrained supply

### 4.5 Rare Earth Elements

**In Development (not yet producing):**

| Project | Location | Size | Timeline |
|---------|----------|------|----------|
| LKAB | Kiruna, Sweden | 1M+ tonnes oxides | Production 2029-2030 |
| Fen Complex | Norway | Larger than LKAB | Development stage |
| Greenland | Greenland | 38.5M tonnes | Stalled (uranium ban) |

**Verdict:** ⚠️ Currently import-dependent, European production coming 2029-2030

### 4.6 Summary: European Material Independence

| Material | European Source | Independence Level |
|----------|-----------------|-------------------|
| Silicon | Norway (Elkem, Wacker) | ✅ Full |
| Copper | Poland (KGHM) | ✅ Full |
| Aluminum | Norway (Hydro) | ✅ Full |
| Germanium | Belgium (Umicore) | ⚠️ Partial |
| Rare Earths | Sweden/Norway (2029+) | ❌ Currently dependent |
| PCB Materials | Germany, Switzerland | ✅ Full |

---

## 5. European Semiconductor Fabrication

### 5.1 Operating European Fabs

| Fab | Location | Process Nodes | Wafer Size | Status |
|-----|----------|---------------|------------|--------|
| **GlobalFoundries Fab 1** | Dresden, Germany | 40nm, 28nm, 22nm FDSOI | 300mm | Expanding to 1M wafers/year by 2028 |
| **X-FAB** | Dresden, Itzehoe (DE), Corbeil-Essonnes (FR) | 1.0μm to 110nm | 150/200mm | 100K wafers/month |
| **IHP Leibniz Institute** | Frankfurt (Oder), Germany | 130nm SiGe BiCMOS | 200mm | Research fab, 12-week turnaround |
| **STMicroelectronics** | Crolles (FR), Catania (IT) | Various, SiC focus | 200/300mm | Operating |
| **Infineon** | Dresden, Germany | Power semiconductors | 300mm | Operating |
| **ESMC (TSMC JV)** | Dresden, Germany | 28nm, 16nm | 300mm | Construction, production 2027 |

### 5.2 Access Pathways for Custom Chips

**EUROPRACTICE Program:**
- Academic and commercial access to GlobalFoundries, IHP, X-FAB
- Multi-Project Wafer (MPW) runs reduce costs
- Nodes from 350nm to 12nm available

**Fraunhofer IIS Foundry Services:**
- Complete ASIC supply chain from design to production
- Volumes starting at 25-50 samples

**IHP Leibniz Institute:**
- Prototyping and low-volume production
- 200mm wafers, 130nm SiGe technology
- ~12 weeks from design tape-in to shipped dice

**X-FAB:**
- Pure-play analog/mixed-signal foundry
- Full European fab locations
- Processes from 1.0μm to 110nm

### 5.3 EU Chips Act Impact

- EUR 80+ billion mobilized in investments
- EUR 31.5 billion in approved state aid
- Four projects granted IPF/OEF status
- Nine EU Member States formed "Semiconductor Coalition" (March 2025)

**Critical Limitation:** Europe lacks cutting-edge nodes below 7nm. However, for heat-generating computing, advanced nodes are counterproductive.

---

## 6. Non-Optimal Manufacturing Approaches

### 6.1 Vacuum Tube Computing

**Current Manufacturing:**
- Brimar Thermionic Products (UK): Reviving British valve manufacturing
- Eastern European factories continue production
- Hobbyist 8-bit vacuum tube computers documented

**Heat Characteristics:**
- Extremely heat-inefficient (by design)
- ENIAC: 150kW for ~5'000 operations/second
- Modern equivalent computation: milliwatts

**Practical Assessment:** Theoretically possible, functions primarily as expensive heater with decorative computation.

### 6.2 Discrete Transistor Computing

**Documented Projects:**

| Project | Transistors | Power | Speed | Notes |
|---------|-------------|-------|-------|-------|
| TraNOR | 2'495 | 4.5W at 4MHz | 7MHz max | DIY, documented |
| Monster6502 | 4'237 | 100W+ at 1MHz | 50kHz actual | Visual demonstration |
| Q2 (PDP8-like) | ~500 | <2.5W | Various | USB powered |
| Manchester (1955) | 200 | 150W | Historical | First transistor computer |

**NMOS vs CMOS Power Characteristics:**
- NMOS: Consumes power when idle (pull-up resistors)
- CMOS: Near-zero idle power
- For heat generation: **NMOS preferred**

**Pull-up Resistor Calculations:**
- Power = V²/R per gate
- 5V supply, 1kΩ pull-up = 25mW per active gate
- 1'000 gates × 25mW = 25W continuous

**European Component Sources:**
- Transistors: Vishay, Nexperia, Infineon (European facilities)
- Resistors/Capacitors: Vishay (Germany, Czech Republic)
- PCBs: Eurocircuits (Germany), Cicor (Switzerland)

### 6.3 Older Lithography Equipment

- Over 95% of all ASML lithography systems ever manufactured still in use
- Older i-line steppers (365nm wavelength) suitable for 350nm+ nodes
- Russia completed 350nm lithography tool in 2024 (30 years behind, but functional)
- Used equipment available from decommissioned/upgraded fabs

### 6.4 FPGA-Based Approaches

European-accessible FPGAs at older nodes:
- Lattice Semiconductor: Some older families
- Microchip (formerly Microsemi): Radiation-hardened, older nodes
- Higher power consumption at larger nodes = more heat

---

## 7. Swiss Industrial Context

### 7.1 Current Swiss Semiconductor Ecosystem

**CSEM (Swiss Center for Electronics and Microtechnology):**
- Founded 1984 by Swiss Federal Council
- 600+ employees, 200+ patents
- Headquarters: Neuchâtel
- Europe's leading independent supplier of ultra-low-power ASIC design
- Designs ASICs, fabricates through European foundries

**SwissChips Initiative:**
- Joint effort: CSEM, EPFL, ETH Zurich
- Funded by SERI
- Goal: Maintain Swiss position in semiconductor technologies

**Swiss Microelectronics Companies:**
- CSEM (Neuchâtel)
- Dectris (Baden)
- ON Semiconductor (Marin)
- Microdul (Zurich)
- Phonak (Stäfa, Murten)
- Siemens Building Technologies (Zug)

### 7.2 Swiss Precision Manufacturing Advantages

- **Micromechanics expertise:** Watchmaking tolerances of ±0.0001 inches (2.54 microns)
- **CERN infrastructure:** Extensive precision engineering capabilities
- **PCB manufacturing:** Cicor (Boudry) specializes in advanced PCBs with embedded die
- **Cleanroom capabilities:** Multiple semiconductor-adjacent facilities

### 7.3 Limitation

Switzerland does not have semiconductor fabrication plants. Swiss companies design chips but manufacture through:
- European foundries (GlobalFoundries, X-FAB)
- Asian partners (for advanced nodes)

---

## 8. District Heating Integration

### 8.1 Swiss Regulatory Framework

**Zurich Cantonal Law (§13a EnerG, Art. 6 para. 3, §30a BBV I):**
> Data centers with over 2 GWh of waste heat are **required to supply excess heat to third parties at cost price**.

Municipal energy plans explicitly identify data center waste heat as a renewable energy source.

### 8.2 Active Swiss Projects

**Infomaniak (Geneva) - January 2025:**
- 100% of electricity converted to heat for district heating
- CHF 12M investment (CHF 6M for heat adaptation)
- Current: 1.1 MW feeding heating network
- Planned 2028: 3.3 MW
- "We provide our carbon-free waste heat free of charge"

**RY3T (Switzerland):**
- First Bitcoin mining heating system in Swiss single-family home
- Uses mining waste heat as primary heat source
- Proof of concept for residential scale

**Green.ch:**
- 11'500+ households benefit from waste heat
- Locations: Dielsdorf, Lupfig, Schlieren
- Partners: Energie 360°, IBB Energie

**Interxion Zurich 3 (Airport City):**
- Waste heat to Opfikon and Rümlang
- Planned 2024 operational start

### 8.3 European Context

| Location | Company | Impact |
|----------|---------|--------|
| Espoo, Finland | Microsoft/Fortum | 40% of district heating for 250'000 people |
| Odense, Denmark | Meta | 100'000 MWh/year, thousands of homes |
| Finland | MARA Bitcoin Mining | 3.5 MW heat at 55-78°C, 80'000 residents |
| Paris, France | Various | Olympic Aquatics Center, 1'800 tonnes CO₂/year saved |

### 8.4 Technical Requirements

**Temperature Grades:**
- High-performance computing: 60-80°C output (ideal for district heating)
- Standard servers: 40-60°C (requires heat pumps)
- Bitcoin mining with liquid cooling: 55-78°C (direct network integration)

**EU Regulatory (Starting October 2025):**
- Data centers above 1 MW must assess waste heat utilization
- Annual reporting to EU database required

---

## 9. Economic Analysis

### 9.1 Heat Value Proposition

**Market Size:**
- District heating market: USD 198B growing to USD 340B by 2033

**Swiss Energy Costs:**
- Electricity: CHF 0.20-0.30/kWh
- Heating oil equivalent: CHF 0.10-0.15/kWh thermal

**Heat Recovery Efficiency:**
- Demonstrated: 90%+ (Canaan Bitcoin project)
- Each MW recycled heat: 455 fewer tonnes CO₂/year

### 9.2 Cost Comparison: Heat Generation Methods

| Method | Capital Cost | Operating Cost | Computation Value |
|--------|--------------|----------------|-------------------|
| Electric resistance heater | CHF 500 | CHF 0.25/kWh heat | None |
| Heat pump | CHF 15'000 | CHF 0.08/kWh heat | None |
| Server infrastructure | CHF 50'000+ | CHF 0.25/kWh heat | Yes (cloud, AI, mining) |
| Discrete transistor computer | CHF 10-50K | CHF 0.25/kWh heat | Minimal (educational) |
| Custom ASIC system | CHF 500K-2M | CHF 0.25/kWh heat | Yes (specialized) |

### 9.3 Revenue Streams

1. **Computation fees:** Cloud computing, AI inference, Bitcoin mining
2. **Heat sales:** Required by Swiss law for large facilities
3. **Carbon credits:** Displaced fossil fuels
4. **Educational/tourism:** For discrete transistor installations

### 9.4 Break-Even Analysis

Computing-as-heating makes economic sense when:
```
Value(computation) + Value(heat) > Cost(electricity) + Cost(infrastructure amortization)
```

For Bitcoin mining in Switzerland (January 2025):
- Mining revenue varies with BTC price and difficulty
- Heat value: CHF 0.05-0.10/kWh (district heating rates)
- Combined value can exceed pure heating costs

---

## 10. Implementation Paths

### Path A: European Custom ASIC (High Complexity)

**Description:** Design custom silicon optimized for power consumption (heat) through European foundries.

**Process:**
1. Design through CSEM (Neuchâtel) or Fraunhofer IIS
2. Fabricate at GlobalFoundries Dresden (22nm FDSOI) or X-FAB (110nm+)
3. Optimize for power draw, not efficiency
4. Deploy for OCR/AI document digitization

**Specifications:**
- Timeline: 12-24 months
- Cost: CHF 500K - 2M
- Heat output: Scalable (10W to 10kW+)
- Computation: Competitive with commercial edge processors

**Advantages:**
- Fully European supply chain
- Custom optimization for heat/compute balance
- Intellectual property ownership

**Disadvantages:**
- High upfront cost
- Long development time
- Requires specialized expertise

### Path B: Discrete Transistor Heat-Computer (Medium Complexity)

**Description:** Build a computer from individual transistors, generating heat through deliberate inefficiency.

**Process:**
1. Design PCB with discrete transistor logic (2'000-5'000 transistors)
2. Use NMOS logic with pull-up resistors for continuous power draw
3. Manufacture PCB at Eurocircuits (Germany) or Cicor (Switzerland)
4. Source components from European Vishay facilities

**Specifications:**
- Timeline: 3-6 months
- Cost: CHF 10K - 50K
- Heat output: 5-50W (depending on design)
- Computation: 1970s calculator equivalent

**Advantages:**
- Educational and artistic value
- Fully transparent operation
- Narrative value for sihlhack
- Complete European sourcing

**Disadvantages:**
- Minimal useful computation
- Low heat output per CHF invested
- Requires custom design work

### Path C: Repurposed Server Infrastructure (Low Complexity)

**Description:** Deploy standard computing hardware configured for heating, following Finnish/Swiss models.

**Process:**
1. Source European-assembled servers or mining hardware
2. Configure liquid cooling for heat capture
3. Connect to building heating or district network
4. Run useful computation (AI, mining, cloud services)

**Specifications:**
- Timeline: 1-3 months
- Cost: CHF 10K - 100K+ (depending on scale)
- Heat output: 1-100+ kW
- Computation: Full modern capability

**Advantages:**
- Proven technology (RY3T, MARA, Infomaniak)
- Immediate deployment
- Full computation capability
- Existing regulatory framework

**Disadvantages:**
- Less "Swiss-made" narrative
- Dependent on global hardware supply chains
- Standard technology, less differentiated

### Path D: Hybrid Approach (Recommended)

**Description:** Combine practical heating infrastructure with educational demonstration systems.

**Components:**
1. **Primary heating:** Repurposed servers for document digitization (Path C)
2. **Demonstration unit:** Discrete transistor computer for visitor engagement (Path B)
3. **Future development:** European ASIC for specialized processing (Path A)

**Advantages:**
- Immediate practical heating
- Educational/narrative value
- Path to fully European technology
- Scalable investment

---

## 11. The Sihlicon Core Concept

### 11.1 Vision

The "Sihlicon Core" creates a closed-loop system for the Sihl Valley:

```
┌─────────────────────────────────────────────────────────────┐
│                      SIHLICON CORE                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌───────────────┐         ┌───────────────┐              │
│   │   Historical  │         │   Computing   │              │
│   │   Archives    │────────▶│Infrastructure │              │
│   │   (Input)     │         │   (Process)   │              │
│   └───────────────┘         └───────┬───────┘              │
│                                     │                       │
│                    ┌────────────────┼────────────────┐     │
│                    │                │                │     │
│                    ▼                ▼                ▼     │
│            ┌──────────────┐  ┌──────────┐  ┌────────────┐ │
│            │   Digitized  │  │   Heat   │  │  Building  │ │
│            │   Records    │  │  Output  │  │  Heating   │ │
│            │   (Output 1) │  │          │  │ (Output 2) │ │
│            └──────────────┘  └──────────┘  └────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 11.2 Computation Tasks for Sihl Valley Digitization

**Primary Processing:**
- OCR (Optical Character Recognition) for historical documents
- AI-powered handwriting recognition (Kurrent, Sütterlin scripts)
- Document classification and metadata extraction
- Image enhancement and restoration

**Secondary Processing:**
- Full-text search indexing
- Named entity recognition (people, places, dates)
- Cross-reference linking between documents
- Translation (historical German to modern German/English)

**Computational Requirements:**
- OCR: ~1-10 TFLOPS per document page
- AI inference: Scales with model size
- Suitable for GPU or specialized ASIC processing

### 11.3 Heat Integration

**Building Heating:**
- Swiss climate: ~100-150 heating days/year
- Typical building: 10-50 kW peak heating demand
- Server infrastructure: Can provide 10-100% of heating needs

**Seasonal Balancing:**
- Winter: Full heat utilization
- Summer: Reduced computation or alternative heat sinks
- Possibility: Absorption cooling (heat-driven air conditioning)

### 11.4 Narrative Value

The Sihlicon Core embodies the sihlhack philosophy:
- **Historical continuity:** Sihl Valley's industrial heritage meets digital future
- **Participant-driven:** Community decides what gets digitized
- **Transparent:** Public computation and heat metrics
- **Sustainable:** Waste heat becomes resource
- **Swiss innovation:** European materials and manufacturing

### 11.5 Name Origin

"Sihlicon" combines:
- **Sihl:** The river and valley of the hackathon's focus
- **Silicon:** The semiconductor material
- **Silicon Valley:** Referencing tech innovation, but inverted (participant-driven, heat-positive)

---

## 12. Sources and References

### Semiconductor Manufacturing

- [Legacy Process Nodes Going Strong - Semiconductor Engineering](https://semiengineering.com/legacy-process-nodes-going-strong/)
- [TSMC, China Foundries Ramp Up New Fabs - Mark LaPedus](https://marklapedus.substack.com/p/tsmc-china-foundries-ramp-up-new)
- [The Cost of Chip Foundry - Granite Firm](https://www.granitefirm.com/blog/us/2023/04/29/cost-of-chip-foundry/)
- [GlobalFoundries Dresden Expansion](https://investors.gf.com/news-releases/news-release-details/globalfoundries-plans-billion-euro-investment-expand-chip)
- [EU Chips Act Progress](https://digital-strategy.ec.europa.eu/en/news/milestone-strengthening-europes-semiconductor-manufacturing-capacity-under-chips-act-reached)
- [X-FAB Foundry](https://www.xfab.com/)
- [IHP Leibniz Institute](https://www.ihp-microelectronics.com/)

### Thermal Computing Research

- [Heat-assisted neuromorphic computing - Nature Materials](https://www.nature.com/articles/s41563-024-01928-7)
- [VO₂ Memristors for Neuromorphic Computing - RSC](https://pubs.rsc.org/en/content/articlehtml/2025/tc/d4tc03347g)
- [Picosecond VO₂ Memristors - ACS Nano](https://pubs.acs.org/doi/10.1021/acsnano.4c03840)
- [Landauer's Principle - Wikipedia](https://en.wikipedia.org/wiki/Landauer's_principle)

### Material Properties and Supply

- [Silicon, Germanium, GaAs Properties - EESemi](https://eesemi.com/sigegaas.htm)
- [Germanium Can Take Transistors Where Silicon Can't - IEEE Spectrum](https://spectrum.ieee.org/germanium-can-take-transistors-where-silicon-cant)
- [Gallium Global Production Share - Statista](https://www.statista.com/statistics/1445285/gallium-share-of-production-worldwide-by-country/)
- [USGS Gallium Report](https://pubs.usgs.gov/periodicals/mcs2023/mcs2023-gallium.pdf)
- [China's Export Controls on Critical Minerals - FTI](https://www.fticonsulting.com/insights/articles/chinas-export-controls-critical-minerals-gallium-germanium-graphite)
- [IEA Critical Minerals Analysis](https://www.iea.org/commentaries/with-new-export-controls-on-critical-minerals-supply-concentration-risks-become-reality)

### European Materials

- [Wacker Norway Expansion](https://www.wacker.com/cms/en-us/press-and-media/press/press-releases/2022/detail-171648.html)
- [KGHM Poland - Wikipedia](https://en.wikipedia.org/wiki/KGHM_Polska_Mied%C5%BA)
- [Norsk Hydro](https://www.hydro.com/en/global/about-hydro/hydro-worldwide/europe/norway/)
- [Umicore Germanium](https://www.umicore.com/en/media/newsroom/eu-selection-of-umicore-germanium-projects/)
- [LKAB Rare Earths](https://lkab.com/en/press/europes-largest-deposit-of-rare-earth-metals-is-located-in-the-kiruna-area/)

### District Heating Projects

- [Infomaniak Data Center - GlobeNewswire](https://www.globenewswire.com/news-release/2025/01/28/3016567/0/en/Innovation-Infomaniak-inaugurates-a-data-center-that-recycles-100-of-its-energy-and-will-heat-6-000-households-a-year-for-at-least-20-years.html)
- [Data Center Heat Reuse - Vela Solaris](https://www.velasolaris.com/en/data-center-heat-reuse/)
- [MARA Bitcoin Mining District Heating](https://www.mara.com/posts/beyond-the-blockchain-how-bitcoin-mining-powers-clean-low-cost-district-heating)
- [Green.ch Heating Network](https://www.green.ch/en/about-green/how-we-act/heating-network)

### Discrete Transistor Computing

- [TraNOR Discrete Transistor Computer - Hackster](https://www.hackster.io/news/tranor-s-diy-transistor-computer-has-a-cpu-design-containing-2-495-discrete-transistors-483fde19662d)
- [Vacuum Tubes Today - Hackaday](https://hackaday.com/2020/08/06/just-who-makes-tubes-these-days/)
- [Russia 350nm Lithography - TrendForce](https://www.trendforce.com/news/2024/05/28/news-russia-reportedly-completed-the-manufacturing-of-a-lithography-machine-for-350nm-chip-production/)

### Swiss Context

- [CSEM](https://www.csem.ch/en/)
- [SwissChips ETH Zurich](https://swisschips.ethz.ch/about.html)
- [Swiss Precision Manufacturing - Hibshman](https://hibshman.com/swiss-precision-manufacturing/)

### Analog Computing

- [Analog Computing Renaissance - Kyndryl](https://www.kyndryl.com/us/en/perspectives/articles/2024/03/analog-computing-renaissance)
- [THE ANALOG THING](https://the-analog-thing.org/)

### GPU Efficiency

- [GPU Efficiency Historical Analysis - TechSpot](https://www.techspot.com/article/2008-gpu-efficiency-historical-analysis/)
- [Server TDP Growth - ServeTheHome](https://www.servethehome.com/why-servers-are-using-so-much-power-tdp-growth-over-time-supermicro-vertiv-intel-amd-nvidia/)

---

## Appendix A: European Component Suppliers

### Discrete Semiconductors

| Supplier | European Facilities | Products |
|----------|---------------------|----------|
| Vishay | Germany, Czech Republic | Transistors, resistors, capacitors |
| Nexperia | Germany, UK | Discrete transistors, MOSFETs |
| Infineon | Germany, Austria | Power semiconductors |
| STMicroelectronics | France, Italy | Mixed portfolio |

### PCB Manufacturing

| Supplier | Location | Capabilities |
|----------|----------|--------------|
| Eurocircuits | Germany | Prototype to medium volume |
| Cicor | Switzerland | Advanced flex, embedded die |
| Schweizer Electronic | Germany | Automotive, industrial |
| AT&S | Austria | High-density interconnect |

### Passive Components

| Supplier | European Facilities | Products |
|----------|---------------------|----------|
| Vishay | Germany, Czech Republic | Full passive range |
| TDK | Germany | Capacitors, inductors |
| Murata | Finland | Ceramic capacitors |
| KEMET (Yageo) | Czech Republic | Tantalum, film capacitors |

---

## Appendix B: Glossary

| Term | Definition |
|------|------------|
| **ASIC** | Application-Specific Integrated Circuit |
| **BiCMOS** | Bipolar CMOS, combining bipolar and CMOS transistors |
| **CMOS** | Complementary Metal-Oxide-Semiconductor |
| **FDSOI** | Fully Depleted Silicon on Insulator |
| **FPGA** | Field-Programmable Gate Array |
| **GaAs** | Gallium Arsenide |
| **GaN** | Gallium Nitride |
| **MPW** | Multi-Project Wafer |
| **NMOS** | N-channel Metal-Oxide-Semiconductor |
| **OCR** | Optical Character Recognition |
| **RRAM** | Resistive Random-Access Memory |
| **SiGe** | Silicon-Germanium |
| **TDP** | Thermal Design Power |
| **VO₂** | Vanadium Dioxide |

---

*Document generated: 2026-01-17*
*Project: sihlhack.ch - Sihlicon Core Research*
*Status: Initial Research Complete*
