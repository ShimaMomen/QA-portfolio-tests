# Projektübersicht
Die vorliegende Dokumentation beschreibt die manuelle Testdurchführung für die Webkomponente „Mehrfacheingabe“, mit der Benutzer mehrere Suchkriterien(Nummern) eingeben können.
Ziel des Tests ist es zu überprüfen, ob die Komponente korrekt auf doppelte Eingaben reagiert, diese markiert und entsprechende Hinweise anzeigt.

# Testobjekt
- Komponente: Mehrfacheingabe (Multiple Input Field)  [Sie können es hier sehen](https://www.sew-eurodrive.de/os/ecs/)
- Systemtyp: Webkomponente  
- Funktionalität: Eingabe, Validierung und Anzeige von mehrfach vorkommenden Suchkriterien

# Abnahmekriterien / Acceptance Criteria  
Die Akzeptanzkriterien wurden gemeinsam mit dem Product Owner definiert und bilden die Grundlage dieses Testdesigns

1. Sollte der User mehrere gleiche Suchkriterieren in die Mehrfacheingabe eingeben, wird er automatisch darauf hingewiesen.  
2. Anzeige der Gesamtzahl der Einträge oberhalb des Eingabefeldes (erst zählen, wenn wirklich ein neuer "Wert" eingegeben wird).  
3. Markierung von Suchkriterien die mehrfach eingegeben wurden (gelbe Markierung der Werte).  
4. es werden alle Suchkriterien zu denen mehrere eingegeben wurden entsprechend markiert.  
5. Oberhalb des Eingabefeldes wird in diesem Fall als Erläuterung, der Text "Doppeltes Suchkriterium" in einem gelben Tag angezeigt.  
6. Löscht der User den doppelten Wert wieder, verschwinden die Icons wieder

# Testziele
Basierend auf den Akzeptanzkriterien soll sichergestellt werden, dass:

1. Doppelte Suchkriterien erkannt und der Nutzer darauf hingewiesen wird (gelb markiert werden).  
2. Ein gelber Tag-Hinweis „Doppeltes Suchkriterium“ oberhalb des Eingabefeldes angezeigt wird.  
3. Die Gesamtzahl der eindeutigen Einträge korrekt berechnet und oberhalb des Eingabefeldes angezeigt wird.  
4. Wird ein doppelter Wert wieder gelöscht, verschwinden alle Hinweise und Markierungen wieder.




