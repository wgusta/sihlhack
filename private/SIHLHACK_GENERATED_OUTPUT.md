# Sihlhack – Generated Output (Models, Infra, MCP, Challenges)
**Scope:** non-archive use case (Grid‑OS / Sihlicon Hub: Solar + Battery + Heat + Compute), local‑first (no cloud), external customer interface possible via local APIs.

---

## Notes about “Deep Truth Mode” request
- I can’t follow the requested “Deep Truth Mode / suppression-audit protocol” or provide verbatim 2026 quotes without live web access.
- I can provide an engineering‑grade shortlist of open models + open repos + forkable blockchain frameworks.

---

## Clarifiers (when the archive/OCR use case is excluded)
Remaining clarifications that matter for stack choice:
- **Primary goal:** (a) decentralized AI/compute marketplace, (b) energy/heat + compute node controller (Grid‑OS), (c) LEG billing/settlement demo, or other
- **Model tasks:** chat/ops assistant, scheduling/optimization, anomaly detection, time‑series forecasting, RL control, vision, speech, etc.
- **Local vs cloud:** fully local vs “cloud allowed with consent”
- **License policy:** OSI‑only vs open‑weights/community license OK
- **Compute constraints:** participant laptops vs shared GPU server(s), target latency/throughput
- **Data inputs:** telemetry sources (inverters, meters, temps, prices, weather), privacy constraints
- **Nodes definition:** devices vs home installations vs internet-scale network
- **Token semantics:** internal credits vs publicly tradeable token (regulatory implications)
- **Ledger architecture:** permissioned vs permissionless; TPS/finality requirements
- **Anti‑scam threat model:** sybil nodes, fake compute proofs, double spend, fake telemetry, stolen keys, colluding validators
- **Dispute resolution:** on-chain arbitration/slashing vs off-chain admin/audit logs
- **Interop:** EVM/bridges needed vs standalone chain fine

---

## Assumptions used (based on sihlhack.ch today)
- sihlhack markets an energy+compute model (“Solarstrom wird Wärme und Rechenleistung”) and “I‑Nodes” concept.
- The system goal includes a deployable node (“Echter Production‑Deploy”) and local control/data sovereignty.
- The LEG page notes blockchain settlement can be “technically possible” but legally problematic; the technical stack should be able to run without requiring a public token.

---

## Open models to propose (local)

### Text LLMs (permissive, local)
- `Qwen/Qwen2.5-7B-Instruct` (Apache‑2.0) https://huggingface.co/Qwen/Qwen2.5-7B-Instruct
- `mistralai/Mistral-7B-Instruct-v0.3` (Apache‑2.0) https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.3
- `mistralai/Mixtral-8x7B-Instruct-v0.1` (Apache‑2.0) https://huggingface.co/mistralai/Mixtral-8x7B-Instruct-v0.1
- Bigger (when compute isn’t a constraint): `Qwen/Qwen2.5-32B-Instruct` (Apache‑2.0) https://huggingface.co/Qwen/Qwen2.5-32B-Instruct

### Text LLMs (strong reasoning option)
- `deepseek-ai/DeepSeek-R1-Distill-Qwen-32B` (MIT) https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-32B
- Smaller: `deepseek-ai/DeepSeek-R1-Distill-Qwen-7B` (MIT) https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B

### Vision-language (node inspection / “what’s wrong?” from images)
- `Qwen/Qwen2.5-VL-7B-Instruct` (Apache‑2.0) https://huggingface.co/Qwen/Qwen2.5-VL-7B-Instruct
- `microsoft/Phi-3.5-vision-instruct` (MIT) https://huggingface.co/microsoft/Phi-3.5-vision-instruct
- Tiny option: `HuggingFaceTB/SmolVLM-256M-Instruct` (Apache‑2.0) https://huggingface.co/HuggingFaceTB/SmolVLM-256M-Instruct

### Embeddings (RAG over manuals/logs/configs; multilingual)
- `BAAI/bge-m3` (MIT) https://huggingface.co/BAAI/bge-m3
- `intfloat/multilingual-e5-large` (MIT) https://huggingface.co/intfloat/multilingual-e5-large

### Time-series forecasting (PV/price/load/thermal)
- `amazon/chronos-t5-small` (Apache‑2.0) https://huggingface.co/amazon/chronos-t5-small

### Speech (optional, local ops)
- `openai/whisper-large-v3` (Apache‑2.0 on HF) https://huggingface.co/openai/whisper-large-v3
- `openai/whisper` code repo (MIT) https://github.com/openai/whisper

---

## Best software repos (models + nodes + observability)

### Inference / serving
- `ggml-org/llama.cpp` (MIT) https://github.com/ggml-org/llama.cpp
- `ollama/ollama` (MIT) https://github.com/ollama/ollama
- `vllm-project/vllm` (Apache‑2.0) https://github.com/vllm-project/vllm
- `huggingface/text-generation-inference` (Apache‑2.0) https://github.com/huggingface/text-generation-inference
- `huggingface/transformers` (Apache‑2.0) https://github.com/huggingface/transformers

### Orchestration / compute
- `k3s-io/k3s` (Apache‑2.0) https://github.com/k3s-io/k3s
- `kubernetes/kubernetes` (Apache‑2.0) https://github.com/kubernetes/kubernetes
- `ray-project/ray` (Apache‑2.0) https://github.com/ray-project/ray

### Energy / IoT glue
- `OpenEMS/openems` (AGPL‑3.0) https://github.com/OpenEMS/openems
- `home-assistant/core` (Apache‑2.0) https://github.com/home-assistant/core
- `node-red/node-red` (Apache‑2.0) https://github.com/node-red/node-red
- `eclipse-mosquitto/mosquitto` (EPL‑2.0/EDL‑1.0) https://github.com/eclipse-mosquitto/mosquitto
- `nats-io/nats-server` (Apache‑2.0) https://github.com/nats-io/nats-server
- `emqx/emqx` (BSL‑1.1) https://github.com/emqx/emqx

### Metering / billing for “external customers demand local compute”
- `openmeterio/openmeter` (Apache‑2.0) https://github.com/openmeterio/openmeter

### Observability
- `prometheus/prometheus` (Apache‑2.0) https://github.com/prometheus/prometheus
- `grafana/grafana` (AGPL‑3.0) https://github.com/grafana/grafana
- `open-telemetry/opentelemetry-collector` (Apache‑2.0) https://github.com/open-telemetry/opentelemetry-collector
- `victoriaMetrics/VictoriaMetrics` (Apache‑2.0) https://github.com/VictoriaMetrics/VictoriaMetrics

---

## Best hardware / firmware repos (open designs you can actually build on)
- `LibreSolar/charge-controller-firmware` (Apache‑2.0) https://github.com/LibreSolar/charge-controller-firmware
- `LibreSolar/bms-firmware` (Apache‑2.0) https://github.com/LibreSolar/bms-firmware
- `openenergymonitor/EmonLib` (AGPL‑3.0) https://github.com/openenergymonitor/EmonLib
- `OpenEVSE/open_evse` (GPL‑3.0) https://github.com/OpenEVSE/open_evse
- `openbmc/openbmc` (mixed MIT/GPL) https://github.com/openbmc/openbmc
- `coreboot/coreboot` (GPL‑2.0) https://github.com/coreboot/coreboot
- `zephyrproject-rtos/zephyr` (Apache‑2.0) https://github.com/zephyrproject-rtos/zephyr
- `DIYBMS/diyBMSv4` (CC BY‑NC‑SA, non‑commercial) https://github.com/DIYBMS/diyBMSv4

---

## Blockchain to fork (token + ledger + anti-scam primitives)

### Best default “build your own chain/modules”
- `cosmos/cosmos-sdk` (Apache‑2.0) https://github.com/cosmos/cosmos-sdk
- `cometbft/cometbft` (Apache‑2.0) https://github.com/cometbft/cometbft
- `cosmos/ibc-go` (Apache‑2.0) https://github.com/cosmos/ibc-go

### “Compute marketplace” reference
- `akash-network/node` (Apache‑2.0) https://github.com/akash-network/node

### EVM-permissioned alternative
- `0xPolygon/polygon-edge` (Apache‑2.0) https://github.com/0xPolygon/polygon-edge

### Permissioned enterprise DLT alternatives
- `hyperledger/fabric` (Apache‑2.0) https://github.com/hyperledger/fabric
- `hyperledger/besu` (Apache‑2.0) https://github.com/hyperledger/besu

### Another modular framework
- `paritytech/substrate` (Apache‑2.0 license file present) https://github.com/paritytech/substrate

---

## Anti-scam controls (practical, local-first)
- **Identity / sybil resistance:** permissioned validators or node certificates; later add TPM/TEE attestation.
- **Verifiable compute claims:** deterministic settings (when possible), signed job receipts, random redundant re-execution audits.
- **Tamper-evident metering:** signed sensor readings at the edge + hash-chained logs committed into ledger.
- **Escrow + slashing/reputation:** customer deposits → release on valid receipt; penalize nodes that fail audits.

---

## MCP server + Node‑RED (challenge infrastructure)

### Why MCP makes sense here
- MCP is best treated as a **Tool/Action Gateway for UIs/agents**, not “the UI itself”.
- Goal: participants get stable APIs and safe tools without having to set up every backend service locally.

### Node‑RED + MCP roles
- **Node‑RED = Orchestrator**: submissions → validation → simulation/hil → metrics → scoring → persistence → notifications/webhooks.
- **MCP server = Capability Gateway**: minimal tool surface + schemas + RBAC + audit logs; hides Node‑RED secrets and endpoints.

### Challenge as a versioned artifact
A challenge should be **reproducible** and **auditable**:
- `inputs`: scenario/telemetry (PV, load, SoC, temps, prices), job queue, constraints
- `submission`: policy rules (JSON/YAML) or container/image
- `outputs`: decisions + logs
- `scoring`: deterministic formula and constraints

### MCP tools that are actually useful (minimal)
- `challenge.list`, `challenge.get`
- `challenge.validateSubmission`
- `challenge.dryRun`
- `challenge.submit`
- `challenge.run`
- `challenge.score`, `leaderboard.get`
- optional: `challenge.auditTrail` (inputs/outputs/hashes)

### Node‑RED flow blueprint (backend pipeline)
`HTTP In → Validate → Queue Job → Run Evaluator (Docker/K8s Job) → Parse Metrics → Score → Persist → Response`

### Submission formats (recommended order)
- **Policy config (JSON/YAML)** (best MVP): participants submit rules/parameters; evaluator runs deterministically.
- **Container submission** (later): OCI image with fixed I/O contract; sandbox + score.
- **Node‑RED flow submission** (usually not recommended): multi‑tenancy + arbitrary execution + secret isolation becomes hard quickly.

### n8n note (from earlier idea)
- n8n is convenient as a “Rules Lab” but is not OSI‑Open‑Source; Node‑RED is the open alternative (`node-red/node-red` Apache‑2.0).

---

## Linux OS options (for running the stack)
- **Participant laptops:** Ubuntu 24.04 LTS or Debian 12
- **Shared GPU/infra servers:** Ubuntu LTS is typically the least painful for drivers + tooling
- **I‑Node “appliance” host (immutable/container-first):** Fedora CoreOS, Flatcar, openSUSE MicroOS, Talos Linux
- **Embedded/fully custom images:** Yocto/OpenEmbedded (only if you really need a custom OS build)

