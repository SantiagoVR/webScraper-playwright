# Información sobre el proyecto

El código es un pequeño ejemplo de lo que se puede realizar en web scraping, este código realiza la entrada en un login con los datos que el usuario le proporciona, posteriormente es redirigido a otra página para obtener información sobre un autor en específico fecha de nacimiento, página web, número de seguidores y una frase importante que el autor realizo, para posteriormente almacenarlo en un archivo JSON 

# Uso de programa Web Scraping

Instalar playwright
```
npm init playwright@latest
yarn create playwright
pnpm create playwright
```

## Ejecución del programa web scraping

Ejecutar el progrma con el siguiente comando desde la terminal ubicado desde la carpeta del programa

```
node index.js 'pagina web' 'usario' 'contraseña'
```

para llenar un input text se utiliza la función .fill('#dato', 'infomacion'); se utiliza # si el input tiene un ID y el siguiente dato es el texto que se quiere poner en el input

para realizar un click se utiliza la función .getByRole('button').click(); o getByText('dato').click(); donde el dato es el texto que aparece donde se requiere realizar el click

para obtener el texto de algún tag se utiliza la función .textContent('h2.clase'); en este caso se pone el tag y posteriormente un punto y el nombre de la clase

Para saber más sobre las diferentes acciones que puede realizar playwright revisar la documentación en 
https://playwright.dev/docs/intro