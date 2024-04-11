import {firefox} from "playwright";
import fs from "fs/promises";
import {loginPagina, obtenerPerfil} from "./funciones.js";

async function main() {
    // 'process.argv' es un arreglo que contiene los argumentos pasados al script Node.js cuando se ejecuta.
    // Obtiene el link de la pagina web desde la línea de comandos.
    const nombre_pagina = process.argv[2];

    // Obtiene el nombre de usuario desde la línea de comandos.
    const username = process.argv[3];

    // Obtiene la contraseña desde la línea de comandos.
    const password = process.argv[4];

    try {
        // const navegador = await chromium.launch({ headless: false }); 
        // Lanza el navegador. se podria true para no abrir el navegador
        const navegador = await firefox.launch({ headless: false });
        // Crea un nuevo contexto de navegador.
        const contexto = await navegador.newContext(); 
        // Abre una nueva página.
        const pagina = await contexto.newPage(); 
        
        await loginPagina(pagina, nombre_pagina, username, password);

        // Usa la función para obtener la información del usuario.
        const info = await obtenerPerfil(pagina);

        // Define un objeto 'datos' que agrupa información relevante del usuario en tres categorías principales.
        const datos = {
            // 'User_Details' contiene información  sobre el nivel del usuario y la fecha de registro.
            User_Details: info
        };

        //se almacena objeto 'datos' en un archivo JSON 
        console.log("Almacenamiento de información en el archivo JSON");
        await fs.writeFile('info.json', JSON.stringify(datos, null, 2));

        await pagina.waitForTimeout(5000);

        await contexto.close();
        await navegador.close();

        console.log("Finaliza el Programa");
    } catch (error) {
        console.error('Ocurrió un error:', error);
        await navegador.close();
    }

}

main();