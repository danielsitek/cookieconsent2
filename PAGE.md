# Sušenková lištička

Skromná jednoduchá lišta, která uživatele informuje ale nepřekáží.

> Evropská unie přišla se zkurvenou směrnicí (tzv. sušenkovým zákonem), podle které musí uživatel webu dát souhlas s používáním cookies nebo obdobných mechanismů. Souhlas musí být také kurva odvolatelný.
> 
> zdroj: [phpfashion.com/jak-na-souhlas-s-cookie-ve-zkurvene-eu](https://phpfashion.com/jak-na-souhlas-s-cookie-ve-zkurvene-eu)

## Instalace

Stačí před uzavíraci tag `</body>` vožit kousek kódu, a lištička je na světe.

```
<script>
    window.cookieconsent_options = {
        dismiss: 'Souhlasím',
        message: 'Tento web používá k poskytování služeb, personalizaci reklam a analýze návštěvnosti soubory cookie. Používáním tohoto webu s tím souhlasíte.',
        learnMore: 'Více informací',
        link: 'https://www.google.com/intl/cs/policies/technologies/cookies/'
    }
</script>
<script type="text/javascript" src="//cdn.edgedesign.cz/cookielista/1.0.10/cookieconsent.min.js"></script>
```

Pro minimální konfiguraci stačí načíst jen script z cdn.

```
<script type="text/javascript" src="//cdn.edgedesign.cz/cookielista/1.0.10/cookieconsent.min.js"></script>
```

## Nastavení lišty

Lištu je možné nastavit pomocí konfigurační proměnné `window.cookieconsent_options`.

### Úpravy textace

```
<script>
    window.cookieconsent_options = {
        dismiss: 'Souhlasím',
        message: 'Tento web používá k poskytování služeb, personalizaci reklam a analýze návštěvnosti soubory cookie. Používáním tohoto webu s tím souhlasíte.',
        learnMore: 'Více informací',
        link: 'https://www.google.com/intl/cs/policies/technologies/cookies/'
    }
</script>
```

* `dismiss` - nastavení potvrzovacího tlačítka
* `message` - text zprávy
* `learnMore` - text odkazu pro více informací
* `link` - odkaz na text s cookie policy

### Callback event

Na odsouhlasení uživatelem je možné pověsit callback funkci a odeslat tak informaci třeba do Google Tag Manageru.

```
<script>
    function onDismissedCookieBar() {
        console.log('Gotcha');
    }

    window.cookieconsent_options = {
        onDismiss: onDismissedCookieBar
    }
</script>
```

### Úpravy chování

```
<script>
    window.cookieconsent_options = {
        hideThreshold: 60
    }
</script>
```

* `hideThreshold` - vzdálenost za kterou se po odscolování od top stránky lišta schová. Pokud je nastaveno `0` tak se schovávat přestane.
