# \*dle answers

Fetch and decrypt answers for quizzes at:

-   [LoLdle](https://loldle.net/)
-   [Pokédle](https://pokedle.net/)
-   [Smashdle](https://smashdle.net/)
-   [Dotadle](https://dotadle.net/)

Both EU and US regions are supported.

## Installation

-   Install [NodeJS](https://nodejs.org/).
-   Download or clone the project.
-   Go to the `loldle-answers` folder and run:

    ```
    npm install
    ```

## Usage

Run with:

```
npm start [site-name]
```

Exemples:  
_The tool uses loldle.net by default._

```
npm start
```

```
npm start loldle
```

```
npm start pokedle
```

```
npm start smashdle
```

```
npm start dotadle
```

## Sidenote(s)

Hiding encryption keys in JavaScript files is not a good idea.

Using the same couple of encryption keys for 4 different sites was a mistake.

[CryptoJS](https://github.com/brix/crypto-js) sucks, I have no idea why LoLdle creator used it.

## Copyright

See the [license](./LICENSE).
