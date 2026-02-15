# DSG-Compliance für LEGs mit Sihlicon Hub

## Datenkatalog
| Kategorie | Intervall | Schutzstufe |
|---|---|---|
| Verbrauchsdaten (kWh/Anschluss) | 15 Min | Besonders schützenswert |
| Produktionsdaten (Solar) | 15 Min | Normal |
| Batterie (SOC, Temperatur) | 1 Min | Normal |
| Compute (CPU, Workload) | 1 Min | Normal |
| Personendaten | Bei Änderung | DSG Art. 5 |

## Zugriffsmatrix
| Rolle | Verbrauch | Betrieb | Personal | Finanzen |
|---|---|---|---|---|
| Vorstand | Aggregiert | Voll | Voll | Voll |
| Mitglied | Nur eigene | Kennzahlen | Nur eigene | Eigene Rechnungen |
| VNB | Summenwerte | Nein | Nein | Nein |

## Aufbewahrung
- Verbrauchsdaten: 5 Jahre
- Abrechnungsdaten: 10 Jahre (OR Art. 958f)
- Personendaten: 1 Jahr nach Austritt

## Massnahmen (DSG Art. 8)
Verschlüsselung TLS 1.3 + AES-256, rollenbasierte Zugriffskontrolle, Logging, verschlüsselte Backups in der Schweiz.

## DSFA-Pflicht (DSG Art. 22)
Ja, weil 15-Min-Verbrauchsdaten Profiling ermöglichen.

*Lizenz: Apache 2.0 | sihlhack.ch*
