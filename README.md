Nodejs  API  Sneyers Robrecht
===================
----------

##Table of contents


[TOC]

Info
-------------

Voor deze opdracht ben ik begonnen vanaf de code die we gemaakt hebben in de laatste optionele les. de verschillende problemen waar ik tegenaan ben gelopen zijn allemaal zichtbaar in de verschillende commits

> **disclaimer:**

> - sommige resources lijken heel hard op andere mensen omdat we hetzelfde business idee hadden. we moesten toen samenzitten en hebben zo gedeeltelijk samen de resources verzonnen die wij dachten nodig te hebben voor onze vragen op te lossen.
> - als gevolg gaat de documentatie er een beetje gelijkaardig uitzien (toen was het nog deels een groepswerk, dit is pas later in het traject veranderd naar terug een solo-werk)
> - ik heb validatie op 2 verschillende manieren gedaan. de 1ste is afkomstig van de code die **Luc Steffens** ons heeft aangereikt in opdracht 5. voor de 2de manier heb ik inspiratie gehaald bij **Wibren van Assche** ik heb de code echter zelf wel geschreven.

> **TODO:**
> 
> - Bij de validatie bevinden zich de error boodschappen met extra uitleg enkel nog maar in de console. Ik heb vanalles geprobeerd om deze te vermelden in postman zelf, maar dit is me echter nog niet gelukt
> - Ik heb verschillende manieren gebruikt om mijn put in orde te proberen te krijgen maar voor een of andere reden wilt deze niet werken en zegt hij dat er geen verandering mogelijk is. Zonder Mongoose te gebruiken zoals de rest heb ik geen idee hoe ik dit zou kunnen oplossen. Ik heb verschillende mogelijke oplossingen online bekeken, maar geen heb ik werkende gekregen.


PUT-Probleem
-------------
{ lastErrorObject: { updatedExisting: false, n: 0 },
  value: null,
  ok: 1 }

**hij PUT het wel maar geen update**

Gebruikte Links
-------------

>http://stackoverflow.com/questions/9773684/how-to-get-the-return-value-of-findandmodify-func-in-mongodb-with-mongoose

>http://pastebin.com/j0Mnf7jP
>
>https://docs.mongodb.com/manual/reference/command/findAndModify/
>
>http://www.restapitutorial.com/lessons/idempotency.html

>https://mongodb.github.io/node-mongodb-native/markdown-docs/insert.html

>http://stackoverflow.com/questions/6019859/jquery-returning-a-value-from-function

>http://stackoverflow.com/questions/18565351/how-to-update-a-mongodb-document-from-node-js
>
>http://stackoverflow.com/questions/35113209/findoneandupdate-returns-null-in-value-on-upsert

>http://stackoverflow.com/questions/26792787/findandmodify-usage-in-node-js-mongodb
