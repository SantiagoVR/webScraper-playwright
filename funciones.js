const URL_PERFIL = 'https://goodreads.com/author/show/1244.Mark_Twain'
const divNacimiento = 'div.dataItem';
const divWeb = 'div.dataItem a';
const textSeguidores = 'h2.brownBackground';
const textFrase = 'div.quoteText';
 
export async function loginPagina(pagina, nombre_pagina, username, password) {
    console.log("Inicia Login")
    // Navega a la URL de la página de inicio de sesión.
    await pagina.goto(nombre_pagina);
    // Espera 10 segundos. Para asegurar que todos los elementos de la página se hayan cargado completamente antes de intentar interactuar con ellos.
    await pagina.waitForTimeout(5000); 
    // Llena el campo de texto del nombre de usuario con el valor proporcionado en 'username'.
    await pagina.fill('#username', username);
    // Llena el campo de texto de la contraseña con el valor proporcionado en 'password'.
    await pagina.fill('#password', password);
    // Hace clic en el botón de inicio de sesión.
    await pagina.getByRole('button').click();

    console.log("Finalizo Login")
}

// Esta función se encarga de obtener información sobre el usuario.
export async function obtenerPerfil(pagina) {
    console.log("Inicia Datos Usuario")

    await pagina.waitForTimeout(5000);
 
    // Navega a la URL del perfil del usuario.
    await pagina.goto(URL_PERFIL);
    
    // Espera 15 segundos. Para asegurar que todos los elementos de la página se hayan cargado completamente antes de intentar interactuar con ellos.
    await pagina.waitForTimeout(10000);

    // Obtiene el texto del elemento identificado por el 'divNacimiento'.
    let nacimiento = await pagina.textContent(divNacimiento); 

    let web = await pagina.textContent(divWeb);
    
    let seguidores = await pagina.textContent(textSeguidores)

    let frase = await pagina.textContent(textFrase)
    
    // Aquí iría lógica para obtener la fecha de registro del usuario si estuviera disponible en la página.

    console.log("Finaliza Datos Usuario");
    // Devuelve un objeto que contiene el nivel del usuario y su fecha de registro.
    return { nacimiento, web, seguidores, frase };
}