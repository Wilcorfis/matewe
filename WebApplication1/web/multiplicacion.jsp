<%-- 
    Document   : multiplicacion
    Created on : 24/09/2018, 03:15:17 PM
    Author     : USUARIO
--%>
<%@page import="Servletmultiplicacion.multiplicacion"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="CSS/cssinput.css">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Hola</title>
    </head>
    <body>
        <h1>Multiplicaciones</h1>
        <h1>Rango</h1>
        <form action="multiplicacion" method="GET">
            <input  type="text" name="numero" value=<%out.print(multiplicacion.rango);%> autofocus>
            <input  type="submit" value="Seleccionar rango"><br>
            <a href='http://localhost:8090/IntegracioMatewe/index.jsp'>Menu principal</a>
        </form>
            <iframe allow="autoplay" width="600" height="400" src="https://www.youtube.com/embed/CpBVPMBXvt4?modestbranding=1&amp;fs=0&amp;rel=0&amp;hd=1&amp;disablekb=0&amp;showinfo=0&amp;iv_load_policy=0&amp;autoplay=0&amp;loop=0&amp;controls=0" frameborder="0" allowfullscreen></iframe>
    </body>
</html>

