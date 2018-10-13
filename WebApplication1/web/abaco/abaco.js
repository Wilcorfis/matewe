function analiza(a) {
    f = a.substr(1, 1);
    c = a.substr(3);
    valor = 0;
    pat = document.getElementById('f' + f + 'c' + c).src;
    if (f == "1") {
        f2 = 2;
        if (pat.substr(pat.length - 6) == "ba.jpg") {
            document.getElementById('f' + f + 'c' + c).src = "bt.jpg";
            document.getElementById('f' + f2 + 'c' + c).src = "br.jpg";
        }
    }
    if (f == "2") {
        f2 = 1;
        if (pat.substr(pat.length - 6) == "ba.jpg") {
            document.getElementById('f' + f + 'c' + c).src = "bt.jpg";
            document.getElementById('f' + f2 + 'c' + c).src = "br.jpg";
        }
    }
    if (f > 2) {
        if (pat.substr(pat.length - 6) == "ba.jpg") {
            x = 3;
            // busco casilla sin bola
            while (x < 8) {
                //alert(document.getElementById('f'+x+'c'+c).src.substr(length-7));
                if (document.getElementById('f' + x + 'c' + c).src.substr(document.getElementById(a).src.length - 6) == "bt.jpg") {
                    document.getElementById('f' + x + 'c' + c).src = "br.jpg";
                }
                x++;
            }
            document.getElementById('f' + f + 'c' + c).src = "bt.jpg";
        }
    }
    calcular()
}
function borrar() {
    c = 13;
    while (c > 0) {
        f = 1;
        while (f < 8) {
            if (f == 2 || f == 3) {
                document.getElementById('f' + f + 'c' + c).src = "bt.jpg";
            } else {
                document.getElementById('f' + f + 'c' + c).src = "br.jpg";
            }
            f++;
        }
        c = c - 1;
    }
    valor = 0;
    document.getElementById('num').value = valor;
}
function mover(a) {
    //alert(document.getElementById(a).src.substr(document.getElementById(a).src.length-6));
    if (document.getElementById(a).src.substr(document.getElementById(a).src.length - 6) == "br.jpg") {
        document.getElementById(a).src = "ba.jpg";
    }
}
function mout(a) {
    if (document.getElementById(a).src.substr(document.getElementById(a).src.length - 6) == "ba.jpg") {
        document.getElementById(a).src = "br.jpg";
    }
}
function calcular() {
    c = 1;
    while (c < 14) {
        f = 1;
        while (f < 8) {
            pat = document.getElementById('f' + f + 'c' + c).src;
            if (f == "1" && pat.substr(pat.length - 6) == "bt.jpg") {
                valor += 5 * Math.pow(10, c - 1);
            }
            if (f > 3 && pat.substr(pat.length - 6) == "bt.jpg") {
                valor += (f - 3) * Math.pow(10, c - 1);
            }
            f++;
        }
        c++;
    }
    document.getElementById('num').value = formatonum(valor, 0);
}
function representar() {
    numera = document.getElementById('num').value;
    x = 0;
    numero = "";
    while (x < numera.length) {
        if (numera.substr(x, 1) != ".") {
            numero += numera.substr(x, 1);
        }
        x++
    }
    x = numero.length;

    c = 0;
    while (x > 0) {
        c++
        if (numero.substr(x - 1, 1) > 4) {
            document.getElementById('f' + 1 + 'c' + c).src = "bt.jpg";
            document.getElementById('f' + 2 + 'c' + c).src = "br.jpg";
            r = numero.substr(x - 1, 1) - 5;
            b = 3 + parseInt(r, 10);
            document.getElementById('f' + 3 + 'c' + c).src = "br.jpg";
            document.getElementById('f' + b + 'c' + c).src = "bt.jpg";
        } else {
            r = numero.substr(x - 1, 1);
            b = 3 + parseInt(r, 10);
            document.getElementById('f' + 3 + 'c' + c).src = "br.jpg";
            document.getElementById('f' + b + 'c' + c).src = "bt.jpg";

        }
        x--;
    }
    document.getElementById('num').value = formatonum(numero, 0);
}



l = '<nav style="display: flex;justify-content: center;align-items: center;">';
l += '<div id="contenedor">';
l += '<h1 ><a>Hora de jugar al Abaco</a></h1>';
l += '<input size="15" maxlegth="13" id="num" type="text" value="0" readonly style="font-size:30px;"> ';

l += '<table border="0">';
l += '<tr>';
l += '<td ><img id="f1c13" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f1c12" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f1c11" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f1c10" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f1c9" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f1c8" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f1c7" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f1c6" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f1c5" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f1c4" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f1c3" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f1c2" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f1c1" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '</tr>';
l += '<tr >';
l += '<td  class="barrab"><img id="f2c13" src="bt.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td  class="barrab"><img id="f2c12" src="bt.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td  class="barrab"><img id="f2c11" src="bt.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td  class="barrab"><img id="f2c10" src="bt.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td  class="barrab"><img id="f2c9" src="bt.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td  class="barrab"><img id="f2c8" src="bt.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)" ></td>';
l += '<td  class="barrab"><img id="f2c7" src="bt.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td  class="barrab"><img id="f2c6" src="bt.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td  class="barrab"><img id="f2c5" src="bt.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td  class="barrab"><img id="f2c4" src="bt.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td  class="barrab"><img id="f2c3" src="bt.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td  class="barrab"><img id="f2c2" src="bt.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td  class="barrab"><img id="f2c1" src="bt.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '</tr>';
l += '<tr>';
l += '<td  ><img id="f3c13" src="bt.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f3c12" src="bt.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f3c11" src="bt.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f3c10" src="bt.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f3c9" src="bt.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f3c8" src="bt.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f3c7" src="bt.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f3c6" src="bt.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f3c5" src="bt.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f3c4" src="bt.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f3c3" src="bt.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f3c2" src="bt.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f3c1" src="bt.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '</tr>';
l += '<tr>';
l += '<td  ><img id="f4c13" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f4c12" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f4c11" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f4c10" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f4c9" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f4c8" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f4c7" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f4c6" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f4c5" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f4c4" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f4c3" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f4c2" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f4c1" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '</tr>';
l += '<tr>';
l += '<td ><img id="f5c13" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f5c12" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f5c11" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f5c10" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f5c9" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f5c8" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f5c7" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f5c6" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f5c5" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f5c4" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f5c3" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f5c2" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f5c1" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '</tr>';
l += '<tr>';
l += '<td ><img id="f6c13" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f6c12" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f6c11" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f6c10" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f6c9" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f6c8" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f6c7" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f6c6" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f6c5" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f6c4" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f6c3" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f6c2" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f6c1" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '</tr>';
l += '<tr>';
l += '<td ><img id="f7c13" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f7c12" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f7c11" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f7c10" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f7c9" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f7c8" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f7c7" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f7c6" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f7c5" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f7c4" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f7c3" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f7c2" src="br.jpg" onmouseover="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '<td ><img id="f7c1" src="br.jpg" OnMouseOver="mover(this.id)" onmouseout="mout(this.id)" onclick="analiza(this.id)"></td>';
l += '</tr>';
l += '</table border="0">';
l += '<input type="button" value="Borrar" onclick="borrar()">';
l += '</div>';
l += '<div>';
l += 'BOLAS</br>';
l += '______';
l += '<table>';
l += '<tr>';
l += '<td><img src="5.jpg"></td>';
l += '</tr>';
l += '<tr>';
l += '<td><img src="bt1.jpg"></td>';
l += '</tr>';
l += '<tr>';
l += '<td><img src="bt1.jpg"></td>';
l += '</tr>';
l += '<tr>';
l += '<td><img src="1.jpg"></td>';
l += '</tr>';
l += '<tr>';
l += '<td><img src="2.jpg"></td>';
l += '</tr>';
l += '<tr>';
l += '<td><img src="3.jpg"></td>';
l += '</tr>';
l += '<tr>';
l += '<td><img src="4.jpg"></td>';
l += '</tr>';
l += '</table>';
l += '</div>';
l += '</nav>';
l += '<center>';
l += '<script>';
l += 'function comprobar() {';
l += 'var glo=replaceAll(document.getElementById("num").value, ".", "" );';
l += 'if (glo === document.getElementById("hola").value) {';
l += 'document.getElementById("acp").click();';
l += '  }else{';
l += 'alert("Por favor representa correctamente los numeros en el abaco");';
l += '}';
l += '}';
l += 'function genale() {';
l += 'var aleatorio = Math.round(Math.random() * 1000000000000);';
l += 'document.getElementById("hola").value = aleatorio;}';
l += 'function replaceAll( text, busca, reemplaza ){';
l += 'while (text.toString().indexOf(busca) != -1)';
l += ' text = text.toString().replace(busca,reemplaza);';
l += 'return text;}';
l += '</script>';
l += '<form action="../Opabaco " method="GET" >';
l += '<input id="hola" type="text" readonly style="font-size:30px;"><br><br>';
l += '<input id="acp" type="submit"style="visibility: hidden">';
l += '</form>';
l += '</center>';
l += '<body onload="genale()">';
l += '<center>';
l += '<input type="submit" value="Verificar" onclick="comprobar()"><br><br>';
l += '</center>';
l += '<center>';
l += '<a href="http://localhost:8090/IntegracioMatewe/">volver al menu</a>';
l += '</center>';
l += '</body>';


//document.getElementById('abaco').innerHTML=l;

