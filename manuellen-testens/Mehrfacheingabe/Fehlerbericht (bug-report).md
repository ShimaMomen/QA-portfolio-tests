# 🧾 Fehlerbericht – Mehrfacheingabe (ISTQB-konform)

## **1. Defect-ID**
DEF-MEHRFACHEINGABE-001


## **2. Titel**
Doppelte Suchkriterien werden nicht vollständig gelb markiert, obwohl ein Duplikat eingegeben wird.


## **3. Beschreibung**
Beim Test der Komponente **Mehrfacheingabe** wurde festgestellt, dass bei der Eingabe eines bereits vorhandenen Suchkriteriums die Komponente das Duplikat nicht korrekt erkennt.
Der Hinweis-Tag „Doppeltes Suchkriterium“ erscheint ebenfalls nicht.  

Der Fehler widerspricht dem Acceptance Criterion:
„Sollte der User mehrere gleiche Suchkriterien eingeben, werden alle identischen Einträge gelb markiert und der Tag ‚Doppeltes Suchkriterium‘ wird angezeigt.“


## **4. Testumgebung**
- Build-Version: `15.04.2025`
- Browser: `Chrome 121.0`
- Betriebssystem: `Windows 10`


## **5. Schritte zur Reproduktion**
1. Komponente „Mehrfacheingabe“ öffnen  
2. Den Wert **„012511196“** eingeben und mit Enter bestätigen  
3. Den gleichen Wert **„012511196“** erneut eingeben  
4. Beobachten: Beide Werte werden gelb markiert, Hinweis-Tag erscheint  
5. Einen der beiden Einträge **löschen**



## **6. Erwartetes Ergebnis**  
- Beide Werte „012511196“ sind gelb markiert  
- Tag „Doppeltes Suchkriterium“ wird oberhalb des Eingabefelds angezeigt 
- Nach dem Löschen eines der doppelten Werte verschwindet die gelbe Markierung vollständig
- Der Hinweis-Tag **„Doppeltes Suchkriterium“** verschwindet  
- Zählung zeigt **1** eindeutigen Wert  



## **7. Tatsächliches Ergebnis**
- Die gelbe Markierung erscheint nicht
- Kein Hinweis-Tag „Doppeltes Suchkriterium“ erscheint
- Die Zählung wird fälschlicherweise auf 2 erhöht, statt bei 1 zu bleiben
  


## **8. Schweregrad (Severity)**
**Medium**


## **9. Priorität**
**High**


## **10. Betroffene Anforderungen**
- **ACR-MEHRFACHEINGABE-002:** Markierung von doppelten Suchkriterien  
- **ACR-MEHRFACHEINGABE-003:** Entfernen der Hinweise beim Entfernen eines Duplikats



## **11. Zugehörige Testfälle**
- **TC02 – Eingabe eines doppelten Suchkriteriums**  
- **TC05 – Löschen eines doppelten Wertes**



## **12. Anhänge**
- Screenshots  



## **13. Status**  
**open**

## **14. Erstellt von / Datum**

QA Analyst: Shima Momen  
Datum: 15.04.2025
