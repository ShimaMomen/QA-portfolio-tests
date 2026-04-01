# Testprozess nach ISTQB – Geburtsdatum Eingabefeld

## Projektbeschreibung

In dieser Aufgabe wird der Testprozess gemäß ISTQB für eine funktionale Anforderung beschrieben.
Ziel ist die Einführung eines neuen Eingabefeldes für das Geburtsdatum eines Patienten in einem medizinischen System.

---
## Aufgabe:
Beschreiben Sie alle Aktivitäten des Testprozess – Analyse - Entwurf – Realisierung und Ausführung und den Ergebnissen zu den jeweiligen Phasen mit ausführlicher Beschreibung für folgende Anforderung: 
Ein Arzt benötigt dringend eine neues Eingabefeld mit dem Geburtsdatum des Patienten. Das Feld soll in einem Format von dd.mm.jjjj dargestellt werden und nur die Eingabe von Zahlen erlauben. Bei einem Geburtsdatum unter 1900 und über 2025 soll eine Fehlermeldung erscheinen.
Zur Eingabe der Daten möchte der Kunde, dass die Eingabe des Geburtsdatums über einen separaten Button erfolgt. Sobald der Button „Geburtsdatum eingeben“ gedrückt wird, öffnet sich ein neues kleines Fenster, dieses Fenster soll das Eingabefeld enthalten und nach korrekter Eingabe und mit einem „OK“ – Button wieder geschlossen werden können. Dieser Button „Geburtsdatum eingeben“ soll nur erscheinen, wenn noch kein Geburtsdatum eingetragen wurde, sonst soll der Button „Geburtsdatum ändern“ angezeigt werden. Um das Geburtsdatum zu ändern soll ebenfalls ein Fenster geöffnet werden, das es erlaubt das Geburtsdatum nochmals zu ändern, was wiederum auf Korrektheit geprüft wird und mit „OK“ geschlossen werden kann.  Das Geburtsdatum selbst wird in dem schon bereits vorhandenen Formular auf dem Bildschirm unter der Krankassenmitgliedsnummer angezeigt. Das Feld ist nur editierbar, wenn der entsprechende Button der sich neben dem Geburtsdatum befindet, gedrückt wird.


## Anforderungen

Ein Arzt benötigt dringend eine neues Eingabefeld mit dem Geburtsdatum des Patienten mit folgenden Eigenschaften:

* Format: **dd.mm.jjjj**
* Nur die Eingabe von Zahlen erlauben
* Wertebereich: **1900 – 2025**
* Fehlermeldung bei ungültigen Eingaben (1900<    2025>)
* Eingabe erfolgt über Button („Geburtsdatum eingeben“)
* Eingabe in separatem Fenster mit „OK“-Button
* Anzeige im Hauptformular unter der Krankenkassennummer
* Bearbeitung nur über entsprechenden Button möglich  („Geburtsdatum ändern“)

---

## 1. Testanalyse

### Ziel

Identifikation von testbaren Testbasis und Testbedingungen.

### Testbedingungen

* Korrekte Formatierung des Datums (dd.mm.jjjj)
* Validierung der Eingabe (nur Zahlen)
* Grenzwerte (1900 und 2025)
* Verhalten bei ungültigen Eingaben
* Anzeige des richtigen Buttons:

  * „Geburtsdatum eingeben“ (wenn leer)
  * „Geburtsdatum ändern“ (wenn vorhanden)
* Öffnen und Schließen des Eingabefensters
* Anzeige des Geburtsdatums im Formular
* Bearbeitbarkeit nur über Button („Geburtsdatum ändern“)

### Testrisiken

Hoch: falsche Patientendaten
Mittel: UI-Fehler (z.B. Button reagiert nicht)
Niedrig: Eingabebeschränkung

---

## 2. Testentwurf

Eine vollständige Menge an Testfällen mit erwarteten Ergebnissen.

### Testdesign-Techniken (es geht um wie?)

* Äquivalenzklassen
* Grenzwertanalyse


### Beispiel-Testfälle

| Testfall | Beschreibung                               | Erwartetes Ergebnis          |
| -------- | ------------------------------------------ | ---------------------------- |
| TC01     | Eingabe eines gültigen Datums (15.06.2000) | Datum wird akzeptiert        |
| TC02     | Eingabe < 1900 (01.01.1899)                | Fehlermeldung erscheint      |
| TC03     | Eingabe > 2025 (01.01.2026)                | Fehlermeldung erscheint      |
| TC04     | Eingabe mit Falsches Format                  | Eingabe wird abgelehnt       |
| TC05     | Button „Geburtsdatum eingeben“ sichtbar    | Nur bei leerem Feld sichtbar |
| TC06     | Fenster öffnet sich nach Button-Klick      | Fenster wird angezeigt       |
| TC07     | Fenster schließt nach „OK“                 | Fenster wird geschlossen     |


---

## ⚙️ 3. Testrealisierung

### Testwerkzeuge

Manuell: Checklisten (Excel/Confluence)

### Automatisierung

Selenium /Cypress für wiederholbare UI-Tests

### Testmanagement

TestRail /Zephyr: Organisation und Nachverfolgung

### Defect-Tracking

Jira: Fehlererfassung und -verwaltung

### Testumgebung

OS: Windows 11(Praxisstandard)
Browser: Chrome, Firefox, Edge
Testinstanz: isolierte Staging-Umgebung
DB: Testdatenbank (keine Echtdaten)
Netzwerk: Lokales Testnetz

### Testdaten

Gültige Daten: z. B. 01.01.1900, 31.12.2025
Grenzwerte: 31.12.1899, 01.01.2026
Ungültige Formate: Text, Sonderzeichen Leereingabe / nur Leerzeichen
Sonderfälle: Schaltjahre, z.B. 29.02.2024
Patienten: ohne & mit vorhandenem Datum

---

## ▶️ 4. Testausführung

### Ziel

Durchführung der Testfälle und Dokumentation der Ergebnisse.

### Aktivitäten

* Ausführung aller Testfälle
* Vergleich Ist-Ergebnis vs. Soll-Ergebnis
* Dokumentation von Abweichungen (Fehlern)
* Erstellung von Bug-Reports

### Beispiel-Ergebnisse

| Testfall | Ergebnis                     | Status      |
| -------- | ---------------------------- | ----------- |
| TC01     | Datum korrekt gespeichert    | ✅ Bestanden |
| TC02     | Fehlermeldung angezeigt      | ✅ Bestanden |
| TC04     | Buchstaben wurden akzeptiert | ❌ Fehler    |

### Ergebnis der Ausführung

* Liste bestandener und fehlgeschlagener Tests
* Dokumentierte Fehler zur Weitergabe an Entwickler

---

## 📊 Testabschluss

Testabschlussbericht: 
Zusammenfassung: Getesteter Umfang, Dauer, Ressourcen 
Testfallstatistik: Bestanden/ Fehlgeschlagen / Geblockt 
Fehlerübersicht: Schweregrad, Status, Verantwortlicher 
Abdeckungsgrad: Anforderungen vs. Testfälle 
Bewertung: Freigabeempfehlung (Go/ No-Go) 

Metriken & Nachbereitung: 
Defektdichte: Anzahl Fehler / Testfall 
Fehleroffen-Quote: Kritisch / Gesamt 
Lessons Learned: Was lief gut? Verbesserungen? 
Archivierung: Testfälle, Logs, Screenshots (Jira, Confluence) 
