# Design guidelines
Ontwerpen voor het web is niet hetzelfde als ontwerpen voor print media. Hierbij een aantal guidelines voor het ontwerpen voor het web. Bij goed gebruik van deze guidelines zal de site ook hoger scoren op Google.

## Fonts

### Kies maximaal 4 fonts
Elk gewicht is een font, dus een Helvetica regular, regular-italic, light en bold zijn 4 fonts. Te veel fonts maken een website heel erg zwaar (en dus traag en minder scorend op Google).

## Mobile first

### Werk qua content mobile-first.
Wat er grafisch in een mobiel ontwerp niet staat, hoort ook niet op de desktop. Dus niet 1 nieuwsblokje op mobiel en 6 op desktop. Maak geen aannames over wat een gebruiker op een bepaald device wil. Een gebruiker kan op een desktop beginnen met een artikel lezen en in de trein of op de bank verder willen gaan. Erg verwarrend als content niet gevonden kan worden op een ander device.

### Design van mobiel tot 2560px breed
Wat gebeurt er nadat de maximale breedte van het ontwerp is bereikt (bijv. 1980px breed)? Grijze banden er naast? Lopen achtergronden door? In de meeste gevallen kun je "stoppen" te ontwerpen bij 1980px gezien dat gemiddeld de grootste resolutie is in 2018, maar geef wel aan hoe de site er uit ziet op een 2560px breed scherm zodat de developer niet hoeft te raden.

### Volgorde van elementen
Ontwerp voor desktop in de volgorde van de mobiele versie. Als zoek boven een menu staat in mobiel dan kan deze in principe niet rechts van het menu staan op desktop. Technisch kan dat wel, maar voor onder andere een keyboard gebruiker is het erg verwarrend als een element rechts van een ander element eerst focus krijgt. Daarbij, als in dit geval "zoek" op mobiel belangrijker is (boven menu staat), dan zal dat ongetwijfeld op desktop ook zo (moeten) zijn.

## Grid

### Ontwerp in een 8 pixel grid
Probeer zo veel mogelijk in een 8px grid te ontwerpen om scherpe websites op alle apparaten te garanderen. Zelfs op apparaten met 1.5 resolutie zal alles er scherp uit zien. Dit is niet het geval in een 5 of 10 pixel grid. We proberen alles in het 8px grid te houden. Dus elementen, afstanden e.d. zijn allemaal 8px, 16px, 24px, 32px, 40px, 48px of een ander getal wat door 8 gedeeld kan worden. Mocht je er echt niet uitkomen met 8px, dan is 4px altijd beter dan 5px, 6px of 10px.

## Responsive gutters / spacing
Wij werken met [Illusion](https://illusion.timble.net/). Hierin hanteren wij een "groeiende" gutter tussen verschillende elementen. Deze groeit van 16px naar 32px. Ook de afstand tussen verticale elementen volgt deze groeiende gutter. De afstand binnen bepaalde elementen (tekst tot rand van element) vaak ook, maar niet altijd. Uiteraard blijft ook deze afstand binnen het 8px grid.

## Kleur

### Contrast
Zorg er voor dat bij de belangrijke elementen (formulieren, waarschuwingen, labels, buttons e.d.) het [contrast hoog genoeg](https://webaim.org/resources/contrastchecker/) is. Zowel de achtergrond kleur van het element t.o.v. de achtergrondkleur van het parent element, als de tekstkleur op de achtergrondkleur van het element zelf.

## Formulieren

### Labels
Ieder formulier element heeft een label nodig. Zet dit label niet in het veld zelf omdat het dan verdwijnt bij het invullen van het veld. Zet het label er altijd [boven of voor](https://www.uxmatters.com/mt/archives/2006/07/label-placement-in-forms.php).

### Vragen?
Stuur even een berichtje naar designguidelines@perfectwebteam.nl
