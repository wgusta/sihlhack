# PrSG-Leitfaden: Hardware-Wiederverwendung und CE-Konformität

## Wann löst eine Modifikation eine neue CE-Bewertung aus?

**Entscheidungsbaum:**
1. Wird die bestimmungsgemässe Verwendung geändert? Server als Heizungskomponente = JA
2. Wird die Hardware physisch verändert? Kühlsystem ersetzt = JA
3. Werden neue Risiken geschaffen? Batterie-Integration, Immersion Cooling = JA

**Fazit:** Jede Sihlicon-Hub-Konfiguration erfordert eine neue Konformitätsbewertung.

## CE-Prozess für modifizierte Sihlicon Hubs

**Schritt 1: Risikobeurteilung** (mechanisch, elektrisch, thermisch, Brand, EMV)
**Schritt 2: Anwendbare Normen** EN 62368-1, EN 62619, EN 61000-6-1/6-3
**Schritt 3: Konformitätsbewertung** (Selbstdeklaration Modul A)
**Schritt 4: Technische Dokumentation** (Zeichnungen, Stücklisten, Prüfberichte, Anleitung DE/FR/IT)
**Schritt 5: CE-Kennzeichnung anbringen**

## Batterie-Integration
- Feuerfeste Umschliessung (EI30), Rauchmelder, automatische Abschaltung
- BMS: Zellspannung, Temperatur, Strom, Schutz gegen Überladung/Tiefentladung/Kurzschluss
- Berührungsschutz IP2X, Not-Aus-Schalter, allpolige Trennung

## Kühlsystem pro Thermal Path
**Path A Öl-Immersion:** Dielektrisches Fluid (Flammpunkt >200°C), Auffangwanne 110%, Löschanlage
**Path B Wasser-Loop:** Druckprüfung 6 bar, Leckage-Sensoren, RCD 30mA, galvanische Trennung
**Path C Wärmepumpe:** F-Gas-Verordnung, konzessionierte Kältetechnikerin, Lärmschutzverordnung

## Gewährleistung und Haftung
- Neue Komponenten: 2 Jahre (OR Art. 210)
- Wiederverwendete Server: ausgeschlossen wenn klar als «gebraucht» deklariert
- Gesamtsystem: Integrator (LEG) haftet als Herstellerin (PrSG Art. 4 ff.)

*Lizenz: Apache 2.0 | sihlhack.ch*
