---
title: >-
  (Svarte først i private kommentarer før jeg skjønte at de var private, gjengir
  svarene her for…
description: 'Takk for kommentarene Thomas Sigdestad! Jeg skal svare etter beste evne:'
date: '2017-11-05T16:30:51.267Z'
categories: []
keywords: []
slug: >-
  /@kmelve/svarte-f%C3%B8rst-i-private-kommentarer-f%C3%B8r-jeg-skj%C3%B8nte-at-de-var-private-gjengir-svarene-her-for-c4c7f0a2bd8c
---

(Svarte først i private kommentarer før jeg skjønte at de var private, gjengir svarene her for allmuen)

Takk for kommentarene [Thomas Sigdestad](https://medium.com/u/54bae60bbb2f)! Jeg skal svare etter beste evne:

1.  Jeg skjønner ikke helt hva du mener med at vi har ignorert desktop/laptop-brukere? Av forskjellige årsaker var mesteparten av designet faktisk laget i en HTML-prototype før vi gikk i gang med å det med React-server-side-rendering i Next.js og spørringer mot Sanity. I verste fall kan vi bli beskyldt for å ikke ta nok hensyn til mobil-brukere (vi har litt optimaliseringer som gjenstår).
2.  Vi er et konsulent-byrå, så valget var styrt av veldig mange som mente ting og noen som måtte ta en beslutning; heldigvis har vi innholdsfolk som forstår teknologi, og teknologer som forstår innhold, så de fleste er ganske fornøyde.
3.  En slags kombinasjon. Vi kjører en ganske flat informasjonsarkitektur (som vi tilstreber i de fleste web-prosjekter) hvor noe er håndtert av rutingen til Next.js, og noe kommer fra en \`slug\`-type i Sanity. Men der har du en liten nøtt når det kommer til headless sammenlignet det du får i mer tradisjonelle CMS.
4.  Underveis ved at man kunne se resultatet i frontend-riggen. Nå setter jeg opp en visning av nettsiden som kan lese innhold som står i utkast-modus. Sanity kommer snart med støtte for å legge inn preview-flater i Studio. Det blir bra.
5.  Jepp, og ikke nok med det: Flere kan publisere endringer i samme dokument, samtidig.
6.  Ser hva du mener–det er litt tricky å skrive om det greiene uten å bli for teknisk eller obskur, men vil likevel påstå at du kommer lengre fortere med GROQ enn med GraphQL. Supert med Guillotine! 👏 Tror det er lurt å la utviklere slippe å måtte fikse de tingene selv (med mindre de har veldig lyst).