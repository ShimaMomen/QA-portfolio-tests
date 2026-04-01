# 🧪 Testprozess nach ISTQB – Geburtsdatum Eingabefeld

## 📌 Projektbeschreibung

In dieser Aufgabe wird der Testprozess gemäß ISTQB für eine funktionale Anforderung beschrieben.
Ziel ist die Einführung eines neuen Eingabefeldes für das Geburtsdatum eines Patienten in einem medizinischen System.

---
## Aufgabe:
Beschreiben Sie alle Aktivitäten des Testprozess – Analyse - Entwurf – Realisierung und Ausführung und den Ergebnissen zu den jeweiligen Phasen mit ausführlicher Beschreibung für folgende Anforderung: 
Ein Arzt benötigt dringend eine neues Eingabefeld mit dem Geburtsdatum des Patienten. Das Feld soll in einem Format von dd.mm.jjjj dargestellt werden und nur die Eingabe von Zahlen erlauben. Bei einem Geburtsdatum unter 1900 und über 2025 soll eine Fehlermeldung erscheinen.
Zur Eingabe der Daten möchte der Kunde, dass die Eingabe des Geburtsdatums über einen separaten Button erfolgt. Sobald der Button „Geburtsdatum eingeben“ gedrückt wird, öffnet sich ein neues kleines Fenster, dieses Fenster soll das Eingabefeld enthalten und nach korrekter Eingabe und mit einem „OK“ – Button wieder geschlossen werden können. Dieser Button „Geburtsdatum eingeben“ soll nur erscheinen, wenn noch kein Geburtsdatum eingetragen wurde, sonst soll der Button „Geburtsdatum ändern“ angezeigt werden. Um das Geburtsdatum zu ändern soll ebenfalls ein Fenster geöffnet werden, das es erlaubt das Geburtsdatum nochmals zu ändern, was wiederum auf Korrektheit geprüft wird und mit „OK“ geschlossen werden kann.  Das Geburtsdatum selbst wird in dem schon bereits vorhandenen Formular auf dem Bildschirm unter der Krankassenmitgliedsnummer angezeigt. Das Feld ist nur editierbar, wenn der entsprechende Button der sich neben dem Geburtsdatum befindet, gedrückt wird.


## 📋 Anforderung (Kurzfassung)

Ein Arzt benötigt dringend eine neues Eingabefeld mit dem Geburtsdatum des Patienten mit folgenden Eigenschaften:

* Format: **dd.mm.jjjj**
* Nur numerische Eingaben erlaubt
* Wertebereich: **1900 – 2025**
* Fehlermeldung bei ungültigen Eingaben
* Eingabe erfolgt über Button („Geburtsdatum eingeben“ / „Geburtsdatum ändern“)
* Eingabe in separatem Fenster mit „OK“-Button
* Anzeige im Hauptformular unter der Krankenkassennummer
* Bearbeitung nur über entsprechenden Button möglich  („Geburtsdatum ändern“)

---

## 🔍 1. Testanalyse

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
* Bearbeitbarkeit nur über Button

### Ergebnis der Analyse

Eine strukturierte Liste von Testbedingungen als Grundlage für die Testfälle.

---

## 🧩 2. Testentwurf

### Ziel

Erstellung konkreter Testfälle basierend auf den Testbedingungen.

### Testdesign-Techniken

* Äquivalenzklassen
* Grenzwertanalyse
* Zustandsbasierter Test

### Beispiel-Testfälle

| Testfall | Beschreibung                               | Erwartetes Ergebnis          |
| -------- | ------------------------------------------ | ---------------------------- |
| TC01     | Eingabe eines gültigen Datums (15.06.2000) | Datum wird akzeptiert        |
| TC02     | Eingabe < 1900 (01.01.1899)                | Fehlermeldung erscheint      |
| TC03     | Eingabe > 2025 (01.01.2026)                | Fehlermeldung erscheint      |
| TC04     | Eingabe mit Buchstaben                     | Eingabe wird abgelehnt       |
| TC05     | Button „Geburtsdatum eingeben“ sichtbar    | Nur bei leerem Feld sichtbar |
| TC06     | Fenster öffnet sich nach Button-Klick      | Fenster wird angezeigt       |
| TC07     | Fenster schließt nach „OK“                 | Fenster wird geschlossen     |

### Ergebnis des Entwurfs

Eine vollständige Menge an Testfällen mit erwarteten Ergebnissen.

---

## ⚙️ 3. Testrealisierung

### Ziel

Umsetzung der Testfälle in ausführbare Tests.

### Aktivitäten

* Erstellung von Testdaten:

  * Gültige Daten (z. B. 12.05.1995)
  * Ungültige Daten (z. B. 32.13.2020, Buchstaben)
* Vorbereitung der Testumgebung
* Dokumentation der Testfälle in Testmanagement-Tool oder Repository

### Ergebnis der Realisierung

Fertige, ausführbare Testfälle inklusive Testdaten und Dokumentation.

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

## 📊 Fazit

Durch die strukturierte Anwendung des ISTQB-Testprozesses konnte sichergestellt werden, dass alle funktionalen und nicht-funktionalen Anforderungen systematisch überprüft wurden.
Dies trägt zur Qualitätssicherung und zur frühzeitigen Fehlererkennung bei.

---

## 💡 Hinweis

Diese Aufgabe wurde im Rahmen einer Weiterbildung erstellt und dient zur Demonstration von Kenntnissen im Bereich Softwaretest nach ISTQB.
