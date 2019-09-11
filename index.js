const readline = require('readline');

var getData = require('./FilesAPI/filesAPI.js');

var lector = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log('MENÚ');
    console.log('Opciones:\n1. Actualizar datos\n2. Promedio últimos 5 archivos\n3. Mínimo y máximo últimos 5 archivos\n4. Salir');
    lector.question('Escriba su opción: ', opcion => {
        switch (opcion) {
            case '1':
                console.log('Opción 1');
                getData();
                break;
            case '2':
                console.log('Opción 2');
                break;
            case '3':
                console.log('Opción 3');
                break;
            case '4':
                console.log('Salir');
                lector.close();
                process.exit(0);
                break;
            default:
                console.log('Ingresa una opción correcta');
                menu();
                break;
        }
    })
}

menu();