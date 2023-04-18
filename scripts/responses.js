function getBotResponse(input) {
    //WALL-E scissors
    if (input == "Talk to WALL-E" || input == "Habla con WALL-E" || input == "Habla con WALLE" || input == "Habla con walle" || input == "habla con wall-e" || input == "habla con WALL-E" || input == 4) {
        return 'Hola soy WALL-E';
    } else if (input == "HOLA" || input == "hola" || input == "Hola" || input == "ola" || input == "Hola wall-e" || input == "hola WALL-E") {
        return "¿Cómo estás?";
    } else if (input == "Muy bien, y tú" || input == "bien de bien y tu?" || input == "bien" || input == "bien y vos" || input == "Bien y vos" || input == "bien de bien y vos" || input == "BIEN") {
        return "Bueno con mucho trabajo. ¿Estás trabajando?";
    }else if (input == "si" || input == "SI" || input == "Ya estoy trabajando" || input == "Si estoy buscando trabajo") {
        return "Mira qué bien. Estoy a punto de tomar un té, ¿te gusta el te?";
    }else if (input == "si" || input == "Si" || input == "Si me gusta" || input == "si me gusta" || input == "Si me gusta el te" || input == "Si me gusta mucho" || input == "Si tomo bastante") {
        return "Bueno, si te gusta algún día podemos tomar un té, tiempo tengo que irme. que tienes otras llamadas que evitar. Un placer conocerte.";
    }else if (input == "Mal" || input == "Muy mal" || input == "No muy bien" || input == "Masomenos" || input == "ahi vamos" || input == "bien ponele") {
        return "Todos tenemos días malos, pero recuerdas detrás de las nubes el cielo siempre es azul, ¿te gusta el te?";
    }else if (input == "No" || input == "no" || input == "no es mi favorito" || input == "no lo detesto" || input == "No es para nada rico") {
        return "Pues si queres podemos ir a tomar una copa que si a los dos nos gusta. Sería bueno si tuviéramos una reunión. Tal vez ahora mismo tengo otras llamas que enfrentar. Fue un placer conocerte.";
    }else if (input == "chau" || input == "Nos vemos" || input == "Hasta luego" || input == "hasta luego" || input == "Chau" || input == "Adios") {
        return input;
    }else if (input == "Yo no trabajo" || input == "No trabajo por ahora" || input == "No estoy buscando trabajo" || input == "Yo no busco trabajo ni trabajo") {
        return input;
    }

    // Simple responses
    if (input == "Información personal" || input == "información personal" || input == "información Personal" || input == 1) {
        return 'Hola, soy Nicolas Abreu, espero que te estés divirtiendo hablando con mi amigo WALL-E. </br>Estudio ingeniería de sistemas en la Universidad Uruguaya ORT, si quieres podemos programar una reunión para conocernos mejor y para conocer más sobre mí.';
    } else if (input == "Areas de interes" || input == "Áreas de interés" || input == "areas de interes" || input == "áreas of Interest" || input == 2) {
        return 'Mi área de interés es la parte de dasarrollo, ya sea móvil o web, no me importa. No tengo ningún problema para trabajar con el backend, ya que también puedo hacerlo en el frontend. Me gusta desarrollar con python y javascript, pero también me gusta aprender nuevos lenguajes.';
    }else if (input == "Que estoy buscando" || input == "que estoy buscando" || input == "que Estoy buscando" || input == "que estoy buscando" || input == "que estoy Buscando" || input == "QUE estoy buscando" || input == "Que Estoy Buscando" || input == 3) {
        return 'Estoy buscando un trabajo a tiempo parcial ya que estudié en ORT de lunes a jueves por la noche. Mi principal objetivo es poder ganar experiencia y hacer carrera en la empresa. Quiero afrontar nuevos retos.';
    }else if (input == "Menu" || input == "menu" || input == 0) {
        return 'Elija una de las siguientes opciones: </br> 1- Información personal.</br>  2- Áreas de interés.</br>  3- Que estoy buscando.</br> 4- Habla con WALL-E.</br> 0- Menú';
    }else {
        return '¡Intenta preguntar algo más!</br></br></br> Elija una de las siguientes opciones: </br> 1- Información personal.</br>  2- Áreas de interés.</br>  3- Que estoy buscando.</br> 4- Habla con WALL-E.</br> 0- Menú';
    }
}