
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

function comprobarDir(ficha){
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
    var x = jugador[0];
    var y = jugador[1];
    var proxDir = jugador[3];
    
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
    
    if (fantasma1[0] == jugador[0] && fantasma1[1] == jugador[1]){
        alert("choque");
        clearInterval(m);
    }
    if(fantasma2[0] == jugador[0] && fantasma1[1] == jugador[1]){
        alert("choque");
        clearInterval(m);
    }
    if(fantasma3[0] == jugador[0] && fantasma3[1] == jugador[1]){
        alert("choque");
        clearInterval(m);
    }
}

function posFantasma(fantasma){
    var pos = false;
    var direcc;
    
     while(pos != true){
        var x = Math.floor((Math.random() * 31));
        var y = Math.floor((Math.random() * 31));
        if(tablero[x][y] == 1){
            pos = true;
            fantasma[0] = x;
            fantasma[1] = y;
            direcc = dirRandom(fantasma);
            fantasma[2] = direcc;
            document.write("(x: "+x+" y: "+y+" "+direcc+")");
            tablero[x][y] = 2;
        }else{
            pos = false;
        }
    }   
}

function posJugador(jugador){
    var pos = false;
    var direcc;
    
    while(pos != true){
        var x = Math.floor((Math.random() * 31));
        var y = Math.floor((Math.random() * 31));
        if (tablero[x][y] != 0 && tablero[x][y] != 2){
            pos = true;
            jugador[0] = x;
            jugador[1] = y;
            direcc = dirRandom(jugador);
            jugador[2] = direcc;
            document.write("(x: "+x+" y: "+y+" "+direcc+")");
            tablero[x][y] = 3;
        }else{
            pos = false;
        }
    }
}

function dirRandom(fantasma){
    var correct = false;
    var direcc = 0;
    //Guardamos los parametros de X e Y Random que hemos selecionado en posFantasma;
    var x = fantasma[0];
    var y = fantasma[1];
    //Comprovamos que la dureccion a la que se direige es correcta.
    //alert("Elige dir.")
    while (correct != true){
        direcc = Math.floor((Math.random() * 5) + 1);
        //alert(direcc);
        if (direcc == 1 && tablero[x-1][y] == 1 || direcc == 1 && tablero[x-1][y] == 2){
            //return direcc;
            correct = true;
        }else if(direcc == 2 && tablero[x][y+1] == 1 || direcc == 2 && tablero[x][y+1] == 2){
            //return direcc;
            correct = true;
        }else if (direcc == 3 && tablero[x+1][y] == 1 || direcc == 3 && tablero[x+1][y] == 2){
            //return direcc;
            correct = true;
        }else if(direcc == 4 && tablero[x][y-1] == 1 || direcc == 4 && tablero[x][y-1] == 2){
            //return direcc;
            correct = true;
        }
    }
    return direcc;
}

function moverFicha(ficha){
    
    var correc = false;
    var dir = ficha[2];
    
    while(correc != true){
        var x = ficha[0];
        var y = ficha[1];
        
        //alert("devuelve:" + dir);
        if(dir == 1 && tablero[x-1][y] != 0){
            //alert("dir 1");
            ficha[0] = x-1;
            ficha[1] = y;
            ficha[2] = 1;
            tablero[ficha[0]][ficha[1]] = 2;
            tablero[x][y] = 1;
            correc = true;
        }else if(dir == 2 && tablero[x][y+1] != 0){
            //alert("dir 2");
            ficha[0] = x;
            ficha[1] = y+1;
            ficha[2] = 2;
            tablero[ficha[0]][ficha[1]] = 2;
            tablero[x][y] = 1;
            correc = true;
        }else if(dir == 3 && tablero[x+1][y] != 0){
            //alert("dir 3");
            ficha[0] = x+1;
            ficha[1] = y;
            ficha[2] = 3;
            tablero[ficha[0]][ficha[1]] = 2;
            tablero[x][y] = 1;
            correc = true;
        }else if(dir == 4 && tablero[x][y-1] != 0){
            //alert("dir 4");
            ficha[0] = x;
            ficha[1] = y-1;
            ficha[2] = 4
            tablero[ficha[0]][ficha[1]] = 2;
            tablero[x][y] = 1;
            correc = true;
        }
        else{
            //alert("ningun if.");
            dir = dirRandom(ficha);
        }
    }
}

function moverJugador(ficha){
    
    var correc = false;
    var dir = ficha[2];
    
    while(correc != true){
        var x = ficha[0];
        var y = ficha[1];
        
        //alert("devuelve:" + dir);
        if(dir == 1 && tablero[x-1][y] != 0){
            //alert("dir 1");
            ficha[0] = x-1;
            ficha[1] = y;
            ficha[2] = 1;
            tablero[ficha[0]][ficha[1]] = 3;
            tablero[x][y] = 1;
            correc = true;
        }else if(dir == 2 && tablero[x][y+1] != 0){
            //alert("dir 2");
            ficha[0] = x;
            ficha[1] = y+1;
            ficha[2] = 2;
            tablero[ficha[0]][ficha[1]] = 3;
            tablero[x][y] = 1;
            correc = true;
        }else if(dir == 3 && tablero[x+1][y] != 0){
            //alert("dir 3");
            ficha[0] = x+1;
            ficha[1] = y;
            ficha[2] = 3;
            tablero[ficha[0]][ficha[1]] = 3;
            tablero[x][y] = 1;
            correc = true;
        }else if(dir == 4 && tablero[x][y-1] != 0){
            //alert("dir 4");
            ficha[0] = x;
            ficha[1] = y-1;
            ficha[2] = 4
            tablero[ficha[0]][ficha[1]] = 3;
            tablero[x][y] = 1;
            correc = true;
        }
        else{
            //alert("ningun if.");
            correc =true;
        }
    }
}

function pulsarTecla(e) {                                
//console.log(e.code);
   if(e.code == "ArrowUp"){
       jugador[3] = 1;
    }else if(e.code == "ArrowRight"){
       jugador[3] = 2;
    }else if(e.code == "ArrowDown"){
       jugador[3] = 3;
    }else if(e.code == "ArrowLeft"){
       jugador[3] = 4;
   }
   //alert(jugador[3]);
//console.log(e.code);      //a la consola podeu veure l'objecte que té dos atributs on s'hi indica la tecla pitjada.                                       
}   

function creaTabla(){
    //document.body.innerHTML = '';    
    var tabla ="";
    for(var i = 0; i < 30; i++){
        for(var k = 0; k < 30; k++){
            if (tablero[i][k] == 1){
                tabla += "&nbsp";
            }
            else if (tablero[i][k] == 2){
                tabla += "<span style='color:blue'>F</span>";
            }
            else if (tablero[i][k] == 3){
                tabla += "<span style='color:red'>J</span>";
            }
            else{
                tabla += "O";
            }
        }
        tabla += "<br>";
    }
    document.getElementById("tabla").innerHTML = tabla;
    
}

function jugar(){
    comprobarDir(fantasma1);
    moverFicha(fantasma1);
    comprobarDir(fantasma2);
    moverFicha(fantasma2);
    comprobarDir(fantasma3);
    moverFicha(fantasma3);
    proxDir(jugador)
    moverJugador(jugador);     
    choque(fantasma1,fantasma2,fantasma3,jugador);
    creaTabla();
}

posFantasma(fantasma1);

posFantasma(fantasma2);

posFantasma(fantasma3);

posJugador(jugador);


var m = setInterval(jugar, 350);