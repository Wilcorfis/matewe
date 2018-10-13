package Servletsuma;

import Clases.Pegado;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "suma", urlPatterns = {"/suma"})
public class suma extends HttpServlet {

    static public int numero1;
    static public int numero2;
    static public int rango;
    static public int resultado;
    static public String pegar;
    static public boolean paso;
    static public int puntos1 = 0;
    static public int veces1 = 0;

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

            out.println("<title>Sumas</title>");

            out.println("</head>");
            out.println("<body >");
            out.println("<h1>Suma!</h1>");
            out.println("<form name=\"formulario2\" action='suma' method='POST'>");
            out.println("<label for='numero1'>Responde:</label>");
            out.println("<input  type='text' value=" + suma.numero1 + " style='width:40px;height:15px' readonly='readonly'>");
            out.println("<label for='suma'>+</label>");
            out.println("<input  type='text' value=" + suma.numero2 + " style='width:40px;height:15px' readonly='readonly'>");
            out.println("<label for='igual'>=</label>");
            out.println("<input  id='prueba' type='text' name='respuesta'  ><br/><br/>");
//            out.println("<input id='ir' type='submit' value='Comprobar respuesta'><br/><br/>");
            out.println("</form>");
            out.println("<input type='submit' value='Cambiar Rango' onclick = \"location='suma.jsp'\"/><br/><br/>");
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
            paso = true;
        } catch (NumberFormatException excepcion) {
            paso = false;
        }
        return paso;
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
        resultado = numero1 + numero2;
        String respuesta = request.getParameter("respuesta");
        isNumeric(respuesta);
        if ("".equals(respuesta)) {
            request.getRequestDispatcher("suma.jsp").forward(request, response);
        }
        int resp = 0;
        if (paso == true) {
            resp = Integer.parseInt(respuesta);
        } else if (paso == false) {
            request.getRequestDispatcher("suma.jsp").forward(request, response);
        }
        pegar = Pegado.pegar();
        veces1 = veces1 + 1;

        if (resp == resultado) {
            puntos1 = puntos1 + 20;
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
                out.println("<title>Sumas</title>");
                out.println("<a href='http://localhost:8090/IntegracioMatewe/suma.jsp'>Resolver otra suma</a>");
                out.println("<p>tardaste: " + pegar + "</p>");
                out.println("<h1>Tienes  " + puntos1 + "  Puntos</h1>");
                out.println("<h1>Has Jugado  " + veces1 + "  Veces</h1>");
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
                out.println("<title>Sumas</title>");
                out.println("<a href='http://localhost:8090/IntegracioMatewe/suma.jsp'>Intentar de nuevo</a>");
                out.println("<p>tardaste: " + pegar + "</p>");
                out.println("<h1>Tienes  " + puntos1 + "  Puntos</h1>");
                out.println("<h1>Has Jugado  " + veces1 + "  Veces</h1>");
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
