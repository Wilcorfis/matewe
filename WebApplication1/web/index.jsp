<%-- 
    Document   : index
    Created on : 17/09/2018, 04:52:16 PM
    Author     : USUARIO
--%>

<%@page import="Servletmultiplicacion.multiplicacion"%>
<%@page import="Servletresta.resta"%>
<%@page import="Servletdivision.division"%>
<%@page import="Servletsuma.suma"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="static Servletsuma.suma.*"%>
<%@page import="static Servletresta.resta.*"%>
<%@page import="static Servletmultiplicacion.multiplicacion.*"%>
<%@page import="static Servletdivision.division.*"%>
<%@page import="static Respuestas.Opabaco.*"%>
<%@page import="static Respuestas.Oprel.*"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <title>JSP Page</title>
    </head>
    <style>
        input{
            text-decoration: none;
            padding: 10px;
            font-weight: 600;
            font-size: 20px;
            color: #ffffff;
            background-color: #1883ba;
            border-radius: 6px;
            border: 2px solid #0016b0;
        }
        input:hover{
            color: #1883ba;
            background-color: #ffffff;
        }
    </style>
    <%
        int total = suma.puntos1 + division.puntos4 + resta.puntos2 + multiplicacion.puntos3
                + Respuestas.Oprel.puntos6 + Respuestas.Opabaco.puntos5;
    %>

    <body>
    <center>
        <h1>Bienvenido!(Selecciona un juego para empezar</h1>
        <table border="1">
            <tr>
                <th>Juegos</th>
                <th>Puntos</th> 
                <th>Veces jugados</th>
            </tr>
            <tr>
                <td><input type='submit' value='Hacer Sumas' onclick = "location = 'suma.jsp'"/><br/><br/></td>
                <td><%out.println(suma.puntos1);%></td>
                <td><%out.println(suma.veces1);%></td>
            </tr>
            <tr>
                <td><input type='submit' value='Hacer Divisiones' onclick = "location = 'division.jsp'"/><br/><br/></td>
                <td><%out.println(division.puntos4);%></td>
                <td><%out.println(division.veces4);%></td>
            </tr>
            <tr>
                <td><input type='submit' value='Hacer Restas' onclick = "location = 'resta.jsp'"/><br/><br/></td>
                <td><%out.println(resta.puntos2);%></td>
                <td><%out.println(resta.veces2);%></td>
            </tr>
            <tr>
                <td> <input type='submit' value='Hacer Multiplicaciones' onclick = "location = 'multiplicacion.jsp'"/><br/><br/></td>
                <td><%out.println(multiplicacion.puntos3);%></td>
                <td><%out.println(multiplicacion.veces3);%></td>
            </tr>
            <tr>
                <td><input type='submit' value='Mayor menor o igual?' onclick = "location = 'relacion/game.html'"/><br/><br/></td>
                <td><%out.println(Respuestas.Oprel.puntos6);%></td>
                <td><%out.println(Respuestas.Oprel.veces6);%></td>
            </tr>
            <tr>
                <td><input type='submit' value='Abaco' onclick = "location = 'abaco/abaco.jsp'"/><br/><br/></td>
                <td><%out.println(Respuestas.Opabaco.puntos5);%></td>
                <td><%out.println(Respuestas.Opabaco.veces5);%></td>
            </tr>
            <%    /*     <tr>
                         <td><input type='submit' value='Juego de pollo' onclick = "location = 'juegodepollo/juego.html'"/><br/><br/></td>
                         <td>en construccion</td>
                         <td>en construccion</td>
                     </tr>*/   %>
            <tr>
                <td>Total de puntos<br/><br/></td>
                <td><%out.println(total);%></td>
            </tr>
        </table>
    </center>

</body>
</html>
