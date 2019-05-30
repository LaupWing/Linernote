# Linernote
Linernote wilt alle informatie van verschillende website platformen van artiesten in 1 applicatie brengen. De weergave van deze informatie word gedaan in een nieuwsfeed formaat.

**Project leden:** Loc Nguyen, Zekkie

## Inhoud
* [Linernote Concept](#linernote-concept)
   * [Opsomming van de functionaliteiten](#opsomming-van-de-functionaliteiten)
* [Logboek](#logboek)
* [Api's](#api)
* [Code Guidelines](#code-guidelines)

## Linernote concept
Zoals in de introductie al is beschreven Linernote wilt alle informatie van verschilende website platformen van bepaalde artiesten in 1 applicatie samenbrengen. Deze informatie word weergeven in een nieuwsfeedformaat zoals facebook. De gebruiker dient eerst de artiesten te volgen om deze in zijn/haar niewsfeed te zien. Gebruikers kunnen reageren en likes geven onder elke nieuwsfeed van de artiest. Deze reactie's en likes zijn binnen het platfrom Linernote.

**Hoe werkt deze nieuwsfeed?**
* Nieuwe feeds worden geladen door de lazy load manier(wanneer de gebruiker op het einde van de pagina bevind dan word er nieuwe feeds geladen)
        * Deze feeds kunnen worden gesorteerd van `recent naar oud` en `willekeurig`

### Opsomming van de functionaliteiten
* Gebruikers kunnen artiesten volgen
* Van de gevolgde artiesten worden de alle informatie weergeven in een nieuwsfeed
        * Dit kan willekeurig of van recent naar oud
* Gebruiker kan een nieuwsfeed van de artiest liken en een reactie plaatsen

## Logboek
In het logboek kan je zien wat we en wanneer we iets gedaan hebben zowel de planning/roadmap. [Klik hier om het logboek te bekijken](https://docs.google.com/document/d/1ecozMUHAtfIAY_AT3nCICShaaCL3TvpFQxL60df6N6w/edit?usp=sharing)
## Api
**Vereiste API's**
*   Instagram(wellicht niet mogelijk)
*   Spotify
*   Ticketmaster
*   Youtube

**Geen vereiste**
*   Pitchfork
*   Soundcloud
*   Facebook
*   BBC music
*   Genuis
*   Twitter
<br>

![Api's](./images/README/apis.png)

<br>
Voor dit project moeten we meerdere api's gaan callen om het desbetreffende artiesten informatie te verkrijgen. Door op het op het linkje te klikken kan je onze onderzoek en meer informatie over de verschillende api's vinden.  

[klik hier voor het onderzoek](https://docs.google.com/document/d/1qSwu_EqZyPMEuGU0jxgUnqHFw8AXY1QPlf9dYNw61aA/edit?usp=sharing)


## Code guidelines
*   **HTML**
    *   Class benaming: 
        1.  First level element `class='navigation'`
        2.  Second level element `class='navigation-item'` etc
*   **Javascript**
    *   Vanille Javascript
    *   Geen Frameworks
    *   Functional programming (Dus geen object oriented syntaxes, zoals classes en basic objecten)
