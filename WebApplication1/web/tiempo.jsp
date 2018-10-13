<%-- 
    Document   : tiempo
    Created on : 15/09/2018, 07:19:35 PM
    Author     : USUARIO
--%>

<%@page import="Clases.Pegado"%>

<%@page import="Servletsuma.suma"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html>
    <head>
        <link rel="stylesheet" href="CSS/cssinput.css">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="title" content="Cronometro en javascript">
        <meta name="description" content="Cronometro en javascript">
        <meta name="keywords" content="código,cronometro,javascript">
        <title>JSP Page</title>
        <script src='jquery-3.3.1.js'></script>
        <script src='valinput.js'></script>

        <script>
            var inicio = 0;
            var timeout = 0;

            function empezarDetener(elemento)
            {
                if (timeout == 0)
                {
                    // empezar el cronometro
                    //elemento.value = "Detener";
                    // Obtenemos el valor actual
                    inicio = vuelta = new Date().getTime();
                    // iniciamos el proceso
                    funcionando();
                } else {

                    // detemer el cronometro
                    //elemento.value = "Empezar";
                    clearTimeout(timeout);
                    timeout = 0;
                }
            }
            function funcionando()
            {
                // obteneos la fecha actual
                var actual = new Date().getTime();

                // obtenemos la diferencia entre la fecha actual y la de inicio
                var diff = new Date(actual - inicio);
                // mostramos la diferencia entre la fecha actual y la inicial
                result = LeadingZero(diff.getUTCHours()) + ":" + LeadingZero(diff.getUTCMinutes()) + ":" + LeadingZero(diff.getUTCSeconds());

                document.getElementById('crono').innerHTML = result;

                // Indicamos que se ejecute esta función nuevamente dentro de 1 segundo
                timeout = setTimeout("funcionando()", 1000);

            }

            /* Funcion que pone un 0 delante de un valor si es necesario */
            function LeadingZero(Time) {
                return (Time < 10) ? "0" + Time : +Time;
            }
        </script>

        <style>
            .crono_wrapper {text-align:center;width:200px;}
        </style>
    </head>
    <body onload="empezarDetener(this);">
        <script type="text/javascript">
            function clickButton() {
                document.getElementById('copiar').click();
                //document.forms["formulario"].submit();//guarda
                //acceder a ventana padre desde ventana iframe
                if (typeof window.parent !== "undefined") {
                    window.parent.document.forms["formulario2"].submit();
                }
            }

        </script>
        <div class="crono_wrapper">
            <h2 id='crono'>00:00:00</h2>
            <input id="master" type="button" value="Parar y Guardar" onclick='empezarDetener(this), onmouseover = clickButton(), style = "display: none;"'<br/>
        </div>
        <script>
            function copiarAlPortapapeles(id_elemento) {
                var aux = document.createElement("input");
                aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
                document.body.appendChild(aux);
                aux.select();
                document.execCommand("copy");
                document.body.removeChild(aux);
            }
        </script>
        <input id="copiar" type="hidden" value="copiar"  onclick="copiarAlPortapapeles('crono'), clickButton()"<br/>

        <%
            //Pegado.pegar();
%>

        <form action="time" name='formulario' method="GET">

        </form>



    </body>
</html>

