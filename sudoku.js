// Definim array de arrays per dificultats i també la seva solució
var arrayFacil= [
['', '', '', '', '', '', '', '3', ''],
['8', '', '', '', '2', '', '6', '', ''],
['7', '3', '5', '', '', '4', '', '', ''],
['', '', '7', '2', '', '', '', '', '4'],
['3', '', '', '7', '5', '9', '8', '', ''],
['', '5', '9', '8', '', '', '7', '6', ''],
['', '9', '', '4', '', '5', '3', '8', ''],
['', '', '', '', '', '', '9', '', '5'],
['5', '', '8', '', '3', '', '1', '', '6']];

var solFacil= [
['9', '6', '2', '5', '1', '8', '4', '3', '7'],
['8', '1', '4', '3', '2', '7', '6', '5', '9'],
['7', '3', '5', '6', '9', '4', '2', '1', '8'],
['1', '8', '7', '2', '6', '3', '5', '9', '4'],
['3', '4', '6', '7', '5', '9', '8', '2', '1'],
['2', '5', '9', '8', '4', '1', '7', '6', '3'],
['6', '9', '1', '4', '7', '5', '3', '8', '2'],
['4', '2', '3', '1', '8', '6', '9', '7', '5'],
['5', '7', '8', '9', '3', '2', '1', '4', '6']];

var prueba= [
['9', '', '2', '5', '1', '8', '4', '3', '7'],
['8', '', '4', '3', '2', '7', '6', '5', '9'],
['7', '', '5', '6', '9', '4', '2', '1', '8'],
['1', '8', '7', '2', '6', '3', '5', '9', '4'],
['3', '4', '6', '7', '5', '9', '8', '2', '1'],
['2', '5', '9', '8', '4', '1', '7', '6', '3'],
['6', '9', '1', '4', '7', '5', '3', '8', '2'],
['4', '2', '3', '1', '8', '6', '9', '7', '5'],
['5', '7', '8', '9', '3', '2', '1', '4', '6']];

var arrayIntermig= [
['', '3', '', '7', '', '', '', '', ''],
['7', '9', '', '3', '4', '2', '', '', ''],
['5', '4', '', '', '', '', '', '', '7'],
['', '6', '7', '', '', '8', '4', '', '3'],
['', '', '', '', '', '3', '5', '7', ''],
['3', '5', '', '', '', '4', '', '6', ''],
['', '', '', '', '', '5', '', '', '8'],
['8', '', '', '', '', '', '2', '3', '6'],
['', '', '', '', '', '6', '7', '', '5']];

var solIntermig= [
['2', '3', '6', '7', '5', '1', '9', '8', '4'],
['7', '9', '8', '3', '4', '2', '6', '5', '1'],
['5', '4', '1', '6', '8', '9', '3', '2', '7'],
['9', '6', '7', '5', '2', '8', '4', '1', '3'],
['1', '8', '4', '9', '6', '3', '5', '7', '2'],
['3', '5', '2', '1', '7', '4', '8', '6', '9'],
['6', '7', '9', '2', '3', '5', '1', '4', '8'],
['8', '1', '5', '4', '9', '7', '2', '3', '6'],
['4', '2', '3', '8', '1', '6', '7', '9', '5']];

var arrayDificil= [
['', '', '', '', '2', '8', '', '7', ''],
['4', '', '1', '', '', '', '', '', ''],
['', '', '', '', '', '5', '', '', ''],
['', '', '', '1', '', '', '4', '', '6'],
['', '2', '', '', '7', '', '', '', ''],
['', '', '', '', '', '', '3', '', ''],
['6', '', '', '3', '4', '', '', '', ''],
['', '8', '', '2', '', '', '', '5', ''],
['', '', '', '', '', '', '', '', '']];

var solDificil= [
['9', '6', '3', '4', '2', '8', '1', '7', '5'],
['4', '5', '1', '7', '3', '9', '8', '6', '2'],
['8', '7', '2', '6', '1', '5', '9', '3', '4'],
['5', '9', '7', '1', '8', '3', '4', '2', '6'],
['3', '2', '6', '9', '7', '4', '5', '1', '8'],
['1', '4', '8', '5', '6', '2', '3', '9', '7'],
['6', '1', '5', '3', '4', '7', '2', '8', '9'],
['7', '8', '4', '2', '9', '1', '6', '5', '3'],
['2', '3', '9', '8', '5', '6', '7', '4', '1']];

// Esperem a que la pàgina generi tots els elements abans de començar a jugar
window.onload = () => {
    document.getElementById('començarJoc').addEventListener('click', () => {
        generarSudoku();
    });

}

// Aquesta funció detectar la dificultat que l'usuari vol jugar
function generarSudoku() {
    // Creem el butó per comprovar
    let jugar = document.getElementById('form');
    if(!document.getElementById( "comprovarResultat" )){
        var button = document.createElement('button');
        button.type = "button";
        button.innerText = 'Comprobar resultado';
        button.classList = "boton generarJoc";
        button.id='comprovarResultat';
        jugar.appendChild(button);
    }

    if (document.getElementById("facil").checked){
        generarTaula(arrayFacil, solFacil);
    }
    if (document.getElementById("intermig").checked){
        generarTaula(arrayIntermig, solIntermig);
    }
    if (document.getElementById("dificil").checked){
        generarTaula(arrayDificil, solDificil);
    }

}

// funció que retorna el valor de cada posicio de l'array de la taula
function introduirDadesTaula(value) {
    if (Array.isArray(value)) {
        return ''
    } else {
        return value
    }
}

// Funció que crea la taula, files, columnes i les seves dades
// També crida a les funcions per comprovar
function generarTaula(taulaDif, arraySolucio){
    
    // Si la taula existeix la elimina
    let divTaula = document.getElementById('areaSudoku');
    if(divTaula.firstChild!= null){
        while(divTaula.firstChild){
            divTaula.removeChild(divTaula.lastChild);
        }
    }

    let taula = document.createElement('table');
    taula.id = 'taula';
    divTaula.innerHTML = '';     // Netejar taula

    let tBody = document.createElement('tbody');
    taula.appendChild(tBody);
    
    for (let x = 0; x < 9; x++) {
        var tr = document.createElement('tr');
        // console.log('tr');
        taula.appendChild(tr);

        for (let y = 0; y < 9; y++) {
            // console.log('td');
            let td = document.createElement('td');
            let input = document.createElement("input");

            //Atributs dels input de la taula
            input.type = "text";
            input.maxLength = "1";
            
            // Identificador dels td per desprès afegir efecte de seleccionar
            td.id = 'x'+x +'y'+y; // Primer x0y0, últim x8y8

            // Introduïr valors dels arrays dels sudokus a la taula
    
            var fila = taulaDif[x];
            input.value = introduirDadesTaula(fila[y]);
            if (input.value != ''){
                input.disabled = true;
                input.style.backgroundColor = 'lightgray';
                input.style.color = '#1d1717';
            }

            td.appendChild(input);
            tr.appendChild(td);

            //Seleccionar fila i columna dinamicament al clicar
            input.addEventListener('click', function(){

                document.querySelectorAll("td").forEach(function(p) {
                    p.style.backgroundColor = 'white';
                  });
                for (let i = 0; i < 9; i++) {
                    document.getElementById('x'+x+'y'+y).style.backgroundColor = 'orange';
                    document.getElementById('x'+x+'y'+i).style.backgroundColor = 'gold';
                    document.getElementById('x'+i+'y'+y).style.backgroundColor = 'gold';
                }
            });
            
            // Canvia la forma del punter al pasar per sobre dels inputs
            input.addEventListener('mouseover', function(){
                input.style.cursor = 'pointer';
            });

        }
    divTaula.appendChild(taula);
    }
    document.getElementById('comprovarResultat').addEventListener('click', () => {
        llegirTaula(arraySolucio);
    });

}

// Aquesta funció guarda un array d'arrays a la variable arrayUsuari
function llegirTaula(arraySolucio){
    var taula = document.getElementById('taula');
    var inputs = taula.getElementsByTagName('input');

    var arrayUsuari = [];
    var arrayIterador = [];
    for (var i = 0; i < inputs.length; i++) {
        
        arrayIterador.push(inputs[i].value);
        if (arrayIterador.length == 9){
            arrayUsuari.push(arrayIterador);
            arrayIterador = [];
        }
    }
    // crida a la funció per comprovar el sudoku amb la variable creada
    comprovarResultat(arrayUsuari, arraySolucio);
}

// Aquesta funció compara la resposta de l'usuari (array) amb la solució real del sudoku
function comprovarResultat(arraySudoku, arraySolucio){
    if (JSON.stringify(arraySudoku) != JSON.stringify(arraySolucio)){
        // document.getElementById("mal").classList.remove("ocult");
        alert('El sudoku no és correcte, prova-ho de nou');
    }else{
        // document.getElementById("bien").classList.remove("ocult");
        alert('FELICITATS, has vençut el sudoku');
    }

    //Marquem les caselles correctes i inconrrectes
    for (let columna = 0; columna < 9; columna++) {
        for (let fila = 0; fila < 9; fila++) {
            if (arraySudoku[columna][fila] != arraySolucio[columna][fila]){
                document.getElementById('x'+columna+'y'+fila).style.backgroundColor= '#f16565';
            }else{
                document.getElementById('x'+columna+'y'+fila).style.backgroundColor= 'lightgreen';
            }
        }
    }
}

