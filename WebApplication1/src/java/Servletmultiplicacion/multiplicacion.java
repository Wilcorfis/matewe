package Servletmultiplicacion;

import Clases.Pegado;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "multiplicacion", urlPatterns = {"/multiplicacion"})
public class multiplicacion extends HttpServlet {

    static public int numero1;
    static public int numero2;
    static public int rango;
    static public int resultado;
    static public String pegar;
    static public boolean paso2;
    static public int puntos3 = 0;
    static public int veces3 = 0;

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
        String numero = request.getParameter("numero");
        rango = Integer.parseInt(numero);
        numero1 = (int) (Math.random() * rango) + 1;
        numero2 = (int) (Math.random() * rango) + 1;
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");

            out.println("<title>Multiplicaciones</title>");

            out.println("</head>");
            out.println("<body >");
            out.println("<h1>Multiplica!</h1>");
            out.println("<form name=\"formulario2\" action='multiplicacion' method='POST'>");
            out.println("<label for='numero1'>Responde:</label>");
            out.println("<input  type='text' value=" + multiplicacion.numero1 + " style='width:40px;height:15px' readonly='readonly'>");
            out.println("<label for='multiplicar'>*</label>");
            out.println("<input  type='text' value=" + multiplicacion.numero2 + " style='width:40px;height:15px' readonly='readonly'>");
            out.println("<label for='igual'>=</label>");
            out.println("<input  id='prueba' type='text' name='respuesta'  ><br/><br/>");
//            out.println("<input id='ir' type='submit' value='Comprobar respuesta'><br/><br/>");
            out.println("</form>");
            out.println("<input type='submit' value='Cambiar Rango' onclick = \"location='multiplicacion.jsp'\"/><br/><br/>");
            out.println("<input type='button' value='Generar numeros' onclick='javascript:window.location.reload();'/><br/><br/>");
            out.println("<iframe id='frm1' src='tiempo.jsp' ");
            out.println("marginwidth='0' marginheight='0' name='ventana_iframe' scrolling='no' border='0'");
            out.println("frameborder='0' width='300' height='200'>");
            out.println("</iframe>");

            out.println("</body>");
            out.println("</html>");
        }
    }

    public static boolean isNumeric(String cadena) {
        try {
            Integer.parseInt(cadena);
            paso2 = true;
        } catch (NumberFormatException excepcion) {
            paso2 = false;
        }
        return paso2;
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
        resultado = numero1 * numero2;
        String respuesta = request.getParameter("respuesta");
        isNumeric(respuesta);
        if ("".equals(respuesta)) {
            request.getRequestDispatcher("multiplicacion.jsp").forward(request, response);
        }
        int resp = 0;
        if (paso2 == true) {
            resp = Integer.parseInt(respuesta);
        } else if (paso2 == false) {
            request.getRequestDispatcher("multiplicacion.jsp").forward(request, response);
        }

        pegar = Pegado.pegar();
        veces3 = veces3 + 1;

        if (resp == resultado) {
            puntos3 = puntos3 + 50;
            try (PrintWriter out = response.getWriter()) {
                out.println("<!DOCTYPE html>");
                out.println("<html>");
                out.println("<head>");
//                out.println("<h1><%suma.crono%></h1>");
                out.println("<script>");
                out.println("var wind;");
                out.println("function abrir() {  ");
                out.println("wind=open('estabueno','','top=300,left=300,width=300,height=100');");
                out.println("setTimeout('wind.close()',3000);");
                out.println("}");
                out.println("</script>");
                out.println("<title>Multiplicacion</title>");
                out.println("<a href='http://localhost:8090/IntegracioMatewe/multiplicacion.jsp'>Resolver otra multiplicacion</a>");
                out.println("<p>tardaste: " + pegar + "</p>");
                out.println("<h1>Tienes  " + puntos3 + "  Puntos</h1>");
                out.println("<h1>Has Jugado  " + veces3 + "  Veces</h1>");
                out.println("</head>");
                out.println("<body onload='abrir()'>");
                out.println("</body>");
                out.println("</html>");

            }

        } else {
            try (PrintWriter out = response.getWriter()) {
                out.println("<!DOCTYPE html>");
                out.println("<html>");
                out.println("<head>");
                out.println("<script>");
                out.println("var wind;");
                out.println("function abrir() {  ");
                out.println("wind=open('estamalo','','top=300,left=300,width=300,height=100');");
                out.println("setTimeout('wind.close()',3000);");
                out.println("}");
                out.println("</script>");
                out.println("<title>Multiplicaciones</title>");
                out.println("<a href='http://localhost:8090/IntegracioMatewe/multiplicacion.jsp'>Intentar de nuevo</a>");
                out.println("<p>tardaste: " + pegar + "</p>");
                out.println("<h1>Tienes  " + puntos3 + "  Puntos</h1>");
                out.println("<h1>Has Jugado  " + veces3 + "  Veces</h1>");
                out.println("</head>");
                out.println("<body onload='abrir()'>");
                out.println("</body>");
                out.println("</html>");
            }

        }
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
