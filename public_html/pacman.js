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
var jugador = new Array("x","y","direcc","sigDirecc");
//Declaramos les tres fantasmas con su posicion y direccion.
var fantasma1 = new Array("x","y","direcc");
var fantasma2 = new Array("x","y","direcc");
var fantasma3 = new Array("x","y","direcc");

function posFantasma(fantasma){
    var pos = false;
    var direcc;
    
     while(pos != true){
        var x = Math.floor((Math.random() * 30));
        var y = Math.floor((Math.random() * 30));
        if(tablero[x][y] == 1){
            pos = true;
            fantasma[0] = x;
            fantasma[1] = y;
            direcc = dirRandom(fantasma);
            fantasma[2] = direcc;
            //document.write("("+x+" "+y+" "+direcc+")");
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
        var x = Math.floor((Math.random() * 30));
        var y = Math.floor((Math.random() * 30));
        if (tablero[x][y] != 0 && tablero[x][y] != 2){
            pos = true;
            jugador[0] = x;
            jugador[1] = y;
            direcc = dirRandom(jugador);
            jugador[2] = direcc;
            tablero[x][y] = 3;
        }else{
            pos = false;
        }
    }
}

function dirRandom(fantasma){
    var correct = false;
    var direcc;
    //Guardamos los parametros de X e Y Random que hemos selecionado en posFantasma;
    var x = fantasma[0];
    var y = fantasma[1];
    while (correct != true){
        direcc = Math.floor((Math.random() * 4)+1);
        if (direcc == 1 && tablero[x-1][y] == 1){
            correct = true;
        }else if(direcc == 2 && tablero[x][y+1] == 1){
            correct = true;
        }else if (direcc == 3 && tablero[x-1][y] == 1){
            correct = true;
        }else if(direcc == 4 && tablero[x][y-1] == 1){
            correct == true;
        }
    }
    return direcc;
}

function creaTabla(){
    for(var i = 0; i < 30; i++){
        for(var k = 0; k < 30; k++){
            if (tablero[i][k] == 1){
                document.write("&nbsp");
            }
            else if (tablero[i][k] == 2){
                document.write("<span style='color:blue'>F</span>");
            }
            else if (tablero[i][k] == 3){
                document.write("<span style='color:red'>J</span>");
            }
            else{
                document.write("O");
            }
        }
        document.write("<br>");
    }
}

posFantasma(fantasma1);

posFantasma(fantasma2);

posFantasma(fantasma3);

posJugador(jugador);

creaTabla();
