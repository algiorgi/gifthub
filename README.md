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

# CI/CD

La aplicación esta hosteada en [Vercel](https://vercel.com/)

## Proceso

El proceso se ejecuta mediante githubs actions

1. Cada commit a una rama que no sea **main** dispara el proceso de CI.
    > Ver archivo **.github/workflows/ci.yml**

1. Cuando se arma un **Pull Request** se despliega una versión *preview* de la applicación.
    > Ver archivo **.github/workflows/preview.yml**

1. Cuando se mergea a main (desde un PR), se despliega una versión productiva de la applicación.
    > Ver archivo **.github/workflows/cd.yml**
