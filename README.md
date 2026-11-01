# Obzor – webový vyhledávač

Obzor je vlastní originálně navržené rozhraní pro hledání na webu. Výsledky a obrázky získává přes Google, ale nepřebírá jeho značku ani vzhled.

## Stránky

- `index.html` – webové hledání a zkratka k prvnímu výsledku.
- `images.html` – hledání obrázků.
- `advanced.html` – pokročilé hledání se všemi čtyřmi podmínkami.
- `formular.html` – hravá „webová expedice“ s ukázkami mnoha HTML formulářových prvků.
- `form-demo.js` – drobná interakce posuvníku a potvrzení ukázkového formuláře; data se nikam neodesílají.
- `citace.md` – použité zdroje a prompty.

Vyhledávání používá standardní GET formuláře a předává dotazy Googlu. Projekt sám neprochází web ani neindexuje stránky.

## Spuštění

Otevřete `index.html` v prohlížeči, případně spusťte v kořenové složce projektu jednoduchý server:

```sh
python3 -m http.server 8000
```

Potom přejděte na `http://localhost:8000`. Ve všech stránkách jsou odkazy na W3C validátory pro verzi zdrojového kódu uloženou v hlavní větvi GitHubu.