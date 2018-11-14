//Declaramos el tablero que se mostrara para poder jugar
var tablero = new Array(30);
        //X --> HACIA ABAJO  Y -> HACIA LA DERECHA
    tablero[00] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    tablero[01] = [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0];
    tablero[02] = [0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0];
    tablero[03] = [0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0];
    tablero[04] = [0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0];
    tablero[05] = [0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0];
    tablero[06] = [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0];
    tablero[07] = [0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0];
    tablero[08] = [0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0];
    tablero[09] = [0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0];
    tablero[10] = [0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0];
    tablero[11] = [0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0];
    tablero[12] = [0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0];
    tablero[13] = [0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0];
    tablero[14] = [0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0];
    tablero[15] = [0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0];
    tablero[16] = [0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0];
    tablero[17] = [0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0];
    tablero[18] = [0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0];
    tablero[19] = [0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0];
    tablero[20] = [0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0];
    tablero[21] = [0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0];
    tablero[22] = [0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0];
    tablero[23] = [0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0];
    tablero[24] = [0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0];
    tablero[25] = [0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0];
    tablero[26] = [0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0];
    tablero[27] = [0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0];
    tablero[28] = [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0];
    tablero[29] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

//Declaramos jugador con las diveresas possiciones (X,Y), direccion (1- arriba, 2- derecha, 3-abajo, 4-izquierda) y posible dirrecion introducida por pantalla.
var jugador = new Array("x","y","direcc","0");
//Declaramos les tres fantasmas con su posicion y direccion.
var fantasma1 = new Array("x","y","direcc");
var fantasma2 = new Array("x","y","direcc");
var fantasma3 = new Array("x","y","direcc");
var punt = 0;

function comprobarDir(ficha){
    //Funcio que permetra comprobar las direccion posibles que te un fantasma per tal de si es troba en una crulla pugui cambiar la direccio.
    var x = ficha[0];
    var y = ficha[1];
    var cont = 0;
    if(tablero[x-1][y] == 1){
        cont++;
    } 
    if(tablero[x][y+1] == 1){
        cont++;
    }
    if(tablero[x+1][y] == 1){
        cont++;
    }
    if(tablero[x][y-1] == 1){
        cont++;
    }
    if(cont >= 3){
        dir = dirRandom(ficha);
        ficha[2] = dir;
    }
    cont = 0;
}

function proxDir(jugador){
    //Funcio per tal de comprobar si la direccio que ha introduit el usuari es una direccio correcta.
    //Guradem la posició de X i Y del jugador i la propera direccio a la que vol anar.
    var x = jugador[0];
    var y = jugador[1];
    var proxDir = jugador[3];
    //Comprobem que la posicio en la direccio seleccionada sigui valida i no hagi una paret.
    //En el cas de que sigui valida guardem la direccio per tal de que s'executi el moviment i la propera direccio sigui 0.
    if(tablero[x-1][y] != 0 && proxDir == 1){
        jugador[2] = proxDir;
        jugador[3] = 0;
    } 
    if(tablero[x][y+1] != 0 && proxDir == 2){
        jugador[2] = proxDir;
        jugador[3] = 0;
    }
    if(tablero[x+1][y] != 0 && proxDir == 3){
        jugador[2] = proxDir;
        jugador[3] = 0;
    }
    if(tablero[x][y-1] != 0 && proxDir == 4){
        jugador[2] = proxDir;
        jugador[3] = 0;
    }
 
}

function choque(fantasma1,fantasma2,fantasma3,jugador){
    //Comprobem que la posicio del fantasma y la del jugador son igual en el cas de que siguin igual significara que han xocat.
    if (fantasma1[0] == jugador[0] && fantasma1[1] == jugador[1]){
        alert("Has perdut!!");
        clearInterval(m);
    }
    if(fantasma2[0] == jugador[0] && fantasma1[1] == jugador[1]){
        alert("Has perdut!!");
        clearInterval(m);
    }
    if(fantasma3[0] == jugador[0] && fantasma3[1] == jugador[1]){
        alert("Has perdut!!");
        clearInterval(m);
    }
}

function posFantasma(fantasma){
    //Funcio per tal de obtenir una posició inicial dels fantasmes.
    var pos = false;
    var direcc;
    
     while(pos != true){
         //Guardem la posicio obtinguda en variables X i Y
        var x = Math.floor((Math.random() * 31));
        var y = Math.floor((Math.random() * 31));
         //comprobem que la posició obtinguda es un espai lliure per poder circular.
        if(tablero[x][y] == 1){
            pos = true;
            fantasma[0] = x;
            fantasma[1] = y;
            direcc = dirRandom(fantasma);
            fantasma[2] = direcc;
            tablero[x][y] = 2;
        }else{
            //Si la posició obtinguda no es correcte tornem al inici del while.
            pos = false;
        }
    }   
}

function posJugador(jugador){
    //Funcio per definir la posicio inicial del jugador.
    var pos = false;
    var direcc;
    
    while(pos != true){
        //Guardem les posisions de jugador en variables X i Y.
        var x = Math.floor((Math.random() * 31));
        var y = Math.floor((Math.random() * 31));
        //Comprobem que la posicio obtinguda es diferent de 0 o 2(paret o fantasma).
        if (tablero[x][y] != 0 && tablero[x][y] != 2){
            pos = true;
            jugador[0] = x;
            jugador[1] = y;
            direcc = dirRandom(jugador);
            jugador[2] = direcc;
            tablero[x][y] = 3;
        }else{
            //Si la pocio no es correcte tornem al inici del while
            pos = false;
        }
    }
}

function dirRandom(fantasma){
    var correct = false;
    var direcc = 0;
    //Guardem la posicio del fantasma actual en variables X i Y.
    var x = fantasma[0];
    var y = fantasma[1];
    //Comprobem que la direccio en la que es dirigeix es correcta.
    while (correct != true){
        //Random per tal de que surti un numero des de el 1 fins al 4.
        direcc = Math.floor((Math.random() * 5) + 1);
        //Si la direccio que a surtit es 1 i la posicio del mapa es 1 o 2 el fantasma podra anar en aquella direccio.
        if (direcc == 1 && tablero[x-1][y] == 1 || direcc == 1 && tablero[x-1][y] == 2){
            correct = true;
        }else if(direcc == 2 && tablero[x][y+1] == 1 || direcc == 2 && tablero[x][y+1] == 2){
        //Si la direccio que a surtit es 2 i la posicio del mapa es 1 o 2 el fantasma podra anar en aquella direccio.
            correct = true;
        }else if (direcc == 3 && tablero[x+1][y] == 1 || direcc == 3 && tablero[x+1][y] == 2){
         //Si la direccio que a surtit es 3 i la posicio del mapa es 1 o 2 el fantasma podra anar en aquella direccio.
            correct = true;
        }else if(direcc == 4 && tablero[x][y-1] == 1 || direcc == 4 && tablero[x][y-1] == 2){
         //Si la direccio que a surtit es 4 i la posicio del mapa es 1 o 2 el fantasma podra anar en aquella direccio.
            correct = true;
        }
    }
    //Retornem la direccio per tal de fer el moviment.
    return direcc;
}

function moverFicha(ficha){
    //Funcio que premetra als fantasmes tenir moviment en tot el mapa.
    var correc = false;
    var dir = ficha[2];
    
    while(correc != true){
        var x = ficha[0];
        var y = ficha[1];
        
        //Si la direccio del fantasma es 1 i la seva direccio en el mapa es diferent a 0 el fantasma es moura en aquella direccio.
        if(dir == 1 && tablero[x-1][y] != 0){
            ficha[0] = x-1;
            ficha[1] = y;
            ficha[2] = 1;
            tablero[ficha[0]][ficha[1]] = 2;
            tablero[x][y] = 1;
            correc = true;
        }else if(dir == 2 && tablero[x][y+1] != 0){
            //Si la direccio del fantasma es 2 i la seva direccio en el mapa es diferent a 0 el fantasma es moura en aquella direccio.
            ficha[0] = x;
            ficha[1] = y+1;
            ficha[2] = 2;
            tablero[ficha[0]][ficha[1]] = 2;
            tablero[x][y] = 1;
            correc = true;
        }else if(dir == 3 && tablero[x+1][y] != 0){
            //Si la direccio del fantasma es 3 i la seva direccio en el mapa es diferent a 0 el fantasma es moura en aquella direccio.
            ficha[0] = x+1;
            ficha[1] = y;
            ficha[2] = 3;
            tablero[ficha[0]][ficha[1]] = 2;
            tablero[x][y] = 1;
            correc = true;
        }else if(dir == 4 && tablero[x][y-1] != 0){
            //Si la direccio del fantasma es 4 i la seva direccio en el mapa es diferent a 0 el fantasma es moura en aquella direccio.
            ficha[0] = x;
            ficha[1] = y-1;
            ficha[2] = 4
            tablero[ficha[0]][ficha[1]] = 2;
            tablero[x][y] = 1;
            correc = true;
        }
        else{
            //En el cas de que la direccio no pugui ser posible es trucara a la funcio per escullir una direcció random i despres tornar a comprovar
            //si la direccio es valida o no.
            dir = dirRandom(ficha);
        }
    }
}

function moverJugador(ficha){
    //Funcio que permetra al jugador tenir moviment sobre el mapa
    var correc = false;
    var dir = ficha[2];
    
    while(correc != true){
        var x = ficha[0];
        var y = ficha[1];
        
        //Si la direccio del jugador es 1 i la posicio en el mapa es diferent a 0 es pot moure.
        if(dir == 1 && tablero[x-1][y] != 0){
            
            ficha[0] = x-1;
            ficha[1] = y;
            ficha[2] = 1;
            tablero[ficha[0]][ficha[1]] = 3;
            tablero[x][y] = 1;
            correc = true;
        }else if(dir == 2 && tablero[x][y+1] != 0){
            //Si la direccio del jugador es 2 i la posicio en el mapa es diferent a 0 es pot moure.
            ficha[0] = x;
            ficha[1] = y+1;
            ficha[2] = 2;
            tablero[ficha[0]][ficha[1]] = 3;
            tablero[x][y] = 1;
            correc = true;
        }else if(dir == 3 && tablero[x+1][y] != 0){
            //Si la direccio del jugador es 3 i la posicio en el mapa es diferent a 0 es pot moure.
            ficha[0] = x+1;
            ficha[1] = y;
            ficha[2] = 3;
            tablero[ficha[0]][ficha[1]] = 3;
            tablero[x][y] = 1;
            correc = true;
        }else if(dir == 4 && tablero[x][y-1] != 0){
            //Si la direccio del jugador es 4 i la posicio en el mapa es diferent a 0 es pot moure.
            ficha[0] = x;
            ficha[1] = y-1;
            ficha[2] = 4
            tablero[ficha[0]][ficha[1]] = 3;
            tablero[x][y] = 1;
            correc = true;
        }
        else{
            //Per tal de que le jugador nomes es mogui cual el usiari digui una direccio en el cas de que la direccio que anava ja no sigui posible
            //es quedara sense moviment fins que el jugador no li doni una direccio valida.
            correc =true;
        }
    }
}

function pulsarTecla(e) {                                
//Mitjançan la la obtencio de les tecles pitjades en el body, aqui amb la variable e.code podrem saber quina tecla ha pitjat el jugador.
    //Depenen de la flecha pitjada podrem assigna-li una propera direccio al jugador
   if(e.code == "ArrowUp"){
       jugador[3] = 1;
    }else if(e.code == "ArrowRight"){
       jugador[3] = 2;
    }else if(e.code == "ArrowDown"){
       jugador[3] = 3;
    }else if(e.code == "ArrowLeft"){
       jugador[3] = 4;
   }                                    
}   

function creaTabla(){
    //Funcio que imprimira per pantalla tot el nostre mapa, fantasmes i jugador 
    var fantasma = 0;
    var tabla ="";
    for(var i = 0; i < 30; i++){
        for(var k = 0; k < 30; k++){
            //Si es un 1 es un espai lliure per circular
            if (tablero[i][k] == 1){
                tabla += "<img src='img/blanco.png' width=20; height=20;>";
            }
            //Si es un 2 es un fantasma que mitjançan un contador imprimim diferents.
            else if (tablero[i][k] == 2){
                if(fantasma == 0){
                    tabla += "<img src='img/fantasma1.png' width=20; height=20;>";
                }else if(fantasma == 1){
                    tabla += "<img src='img/fantasma2.png' width=20; height=20;>";
                }
                else{
                    tabla += "<img src='img/fantasma3.png' width=20; height=20;>";
                }
                fantasma++;
            }
            //Si es un 3 vol dir que es la posició del jugador
            else if (tablero[i][k] == 3){
                tabla += "<img src='img/pacman.png' width=20; height=20;>";
            }
            else{
                tabla += "<img src='img/pared.png' width=20; height=20;>";
            }
        }
        //En el nostre String guardem un dalt d elinia per tal de que tingui la forma correcte en nostre mapa.
        tabla += "<br>";
    }
    //Cridem al id ja mencionat en el HTML, alla s'imprimirà el nostre mapa
    document.getElementById("tabla").innerHTML = tabla;
    
}

function creaContador(){
    //Creem un contador per que sumi la puntuacio.
    var cont = 0;
    contador ="";
    //Per tal de que no es perdi la puntuacio cada cop que truquem a la funció guardem la puntuacio total en una variable.
    cont = punt + 200;
    punt = cont;
    //Guardem en un variable String el nostre marcador.
    contador += "<div class='marcador'>Jugador 1:<br> "+cont+"</div>";
    document.getElementById("contador").innerHTML = contador;
    //Definim que el jugador ha guanyat cuan sobrepasa la puntuacio de un minut de joc.
    if(punt >= 60000){
        clearInterval(m);
        alert("Has Guanyat!!");
    }
}

function jugar(){
    //Funcio pare que permetra que el joc pugui funcionar.
    comprobarDir(fantasma1);
    moverFicha(fantasma1);
    comprobarDir(fantasma2);
    moverFicha(fantasma2);
    comprobarDir(fantasma3);
    moverFicha(fantasma3);
    proxDir(jugador);
    moverJugador(jugador);
    choque(fantasma1,fantasma2,fantasma3,jugador);
    creaTabla();
    creaContador();
}
//Inicialització de les variables fantasma amb la seva posició y direccio.
posFantasma(fantasma1);

posFantasma(fantasma2);

posFantasma(fantasma3);

//Inicialització del jugador amb la posicio la direcció i una posible direcció a la que vol anar.
posJugador(jugador);

//creaContador();
//Funcio la cual permetra cridar a totes les funcions per tal de que el joc pugui funcionar cada 350 milisegons.
var m = setInterval(jugar, 350);
