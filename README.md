# Gifthub

Proyecto para aprender ReactJS y Remix

Gifthub es un sitio que te permite crear eventos tipo "Secret Santa" encargandose de emparejar a los participantes y enviar los mails con las parejas armadas.

# Pre-requisitos

+ Node >= 18.0.0

# Instalación

```
$ npm install
```

# Correr local

```
$ npm run dev
```
La app localmente corre en **http://127.0.0.1:3000**

# Pruebas

## End To End

Las pruebas End To End están escritas con [Playwright](https://playwright.dev/)

Para ejecutar las pruebas:

1. Construir la applicación

    ```
    $ npm run build
    ```

2. Correr los test

    ```
    $ npm run playwright
    ```

3. (Opcional) Para ver los reportes

    ```
    $ npm run playwright:report
    ```
