# Risiko- und Haftungsmatrix

Bewertung: W (Wahrscheinlichkeit 1-5) x S (Schwere 1-5). Stufe: 1-5 niedrig, 6-12 mittel, 13-25 hoch.

## A. Elektrische Risiken
| # | Risiko | W | S | Stufe | Haftung | Minderung |
|---|--------|---|---|-------|---------|-----------|
| E1 | Stromschlag defekte Isolation | 2 | 5 | 10 | LEG (Betreiberpflicht) | NIV-Kontrolle, RCD 30mA |
| E2 | Überspannung Wechselrichter | 2 | 4 | 8 | Hersteller + LEG | Überspannungsschutz Typ 1+2 |
| E3 | Kurzschluss Sihlicon Hub | 2 | 3 | 6 | LEG als Integrator | Sicherungen korrekt dimensionieren |

## B. Brand- und Explosionsrisiken
| # | Risiko | W | S | Stufe | Haftung | Minderung |
|---|--------|---|---|-------|---------|-----------|
| B1 | Thermal Runaway Batterie | 1 | 5 | 5 | Hersteller + LEG | BMS Einzelzellen, EI30, Löschanlage |
| B2 | Brand Öl-Immersion | 1 | 4 | 4 | LEG als Integrator | Flammpunkt >200°C, Temperaturüberwachung |
| B3 | Brand Serverschrank | 2 | 4 | 8 | LEG | Redundante Temperaturüberwachung, auto-Abschaltung |

## C. Regulatorische Risiken
| # | Risiko | W | S | Stufe | Haftung | Minderung |
|---|--------|---|---|-------|---------|-----------|
| R1 | VNB verweigert LEG | 3 | 4 | 12 | Projektrisiko | Frühzeitige Abklärung, ElCom als Eskalation |
| R2 | VEVEE-Änderung | 2 | 3 | 6 | Regulatorisches Risiko | Flexibles Vertragswerk |

## D. Cyber- und Datenrisiken
| # | Risiko | W | S | Stufe | Haftung | Minderung |
|---|--------|---|---|-------|---------|-----------|
| C1 | Hacking Grid-OS | 2 | 4 | 8 | LEG (DSG) | Verschlüsselung, Firewalls, Penetration Testing |
| C2 | Datenleck Verbrauchsprofile | 2 | 3 | 6 | LEG (DSG) | Verschlüsselung, Zugriffskontrollen |

*Lizenz: Apache 2.0 | sihlhack.ch*
