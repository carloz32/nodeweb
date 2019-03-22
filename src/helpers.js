const hbs = require('hbs');


hbs.registerHelper('obtenerPromedio', (nota1, nota2, nota3) => {
    return (nota1 + nota2 + nota3) / 3;
})

hbs.registerHelper('listar', () => {

    try {
        console.log('si entra')
        listaEstudiantes = require('./listado.json');
    } catch (error) {
        listaEstudiantes = [];
    }
    let columnas='';
    listaEstudiantes.forEach(estudiante => {
        columnas=columnas+'<tr><td>'+estudiante.nombre+'</td>'+ 
        '<td>'+estudiante.matematicas+'</td>'+
        '<td>'+estudiante.ingles+'</td>'+
        '<td>'+estudiante.programacion+'</td>'+
        '</tr>';
      ;
    });
   
      
   
    tabla =
        '<table>' +
        '<tr>' +
        '<th>Nombre</th>'+
        '<th>matematicas</th>'+
        '<th>ingles</th>'+
        '<th>Progrmacion</th>'+
        '</tr>' +
        '<tr>' +
        columnas+
        '</tr>' +
        '</table>';
    return tabla;
})