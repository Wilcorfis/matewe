package Servletdivision;

import Clases.Pegado;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "division", urlPatterns = {"/division"})
public class division extends HttpServlet {

    static public int numero1;
    static public int numero2;
    static public int rango;
    static public int resultado;
    static public String pegar;
    static public int residuo;
    static public boolean paso3;
    static public boolean paso4;
    static public int puntos4 = 0;
    static public int veces4 = 0;

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
        numero2 = (int) (Math.random() * 9) + 2;
        if (numero2 > numero1) {
            numero1 = numero2 * 2;

        }
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");

            out.println("<title>Divisiones</title>");

            out.println("</head>");
            out.println("<body >");
            out.println("<h1>Divide sin decimales!</h1>");
            out.println("<form name=\"formulario2\" action='division' method='POST'>");
            out.println("<label for='numero1'>Responde:</label>");
            out.println("<input  type='text' value=" + division.numero1 + " style='width:40px;height:15px' readonly='readonly'>");
            out.println("<label for='division'>/</label>");
            out.println("<input  type='text' value=" + division.numero2 + " style='width:40px;height:15px' readonly='readonly'>");
            out.println("<label for='igual'>=</label>");
            out.println("<input  type='text' name='respuesta'  ><br/><br/>");
            out.println("<label for='residuo'>Residuo:</label>");
            out.println("<input  type='text' name='residuo' value='0'  ><br/><br/>");
//            out.println("<input id='ir' type='submit' value='Comprobar respuesta'><br/><br/>");
            out.println("</form>");
            out.println("<input type='submit' value='Cambiar Rango' onclick = \"location='division.jsp'\"/><br/><br/>");
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
            paso3 = true;
        } catch (NumberFormatException excepcion) {
            paso3 = false;
        }
        return paso3;
    }

    public static boolean isNumeric2(String cadena) {
        try {
            Integer.parseInt(cadena);
            paso4 = true;
        } catch (NumberFormatException excepcion) {
            paso4 = false;
        }
        return paso4;
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
        resultado = numero1 / numero2;
        String respuesta = request.getParameter("respuesta");
        String resid = request.getParameter("residuo");
        isNumeric(respuesta);
        isNumeric2(resid);
        if ("".equals(respuesta) || "".equals(resid)) {
            request.getRequestDispatcher("division.jsp").forward(request, response);
        }
        int resp = 0;
        int resp1 = 0;
        if (paso3 == true && paso4 == true) {
            resp = Integer.parseInt(respuesta);
            resp1 = Integer.parseInt(resid);
        } else if (paso3 == false || paso4 == false) {
            request.getRequestDispatcher("division.jsp").forward(request, response);
        }

        pegar = Pegado.pegar();
        residuo = numero1 % numero2;

        veces4 = veces4 + 1;

        if (resp == resultado && resp1 == residuo) {
            puntos4 = puntos4 + 100;
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
                out.println("<title>Divisiones</title>");
                out.println("<a href='http://localhost:8090/IntegracioMatewe/division.jsp'>Resolver otra division</a>");
                out.println("<p>tardaste: " + pegar + "</p>");
                out.println("<h1>Tienes  " + puntos4 + "  Puntos</h1>");
                out.println("<h1>Has Jugado  " + veces4 + "  Veces</h1>");
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
                out.println("<title>Divisiones</title>");
                out.println("<a href='http://localhost:8090/IntegracioMatewe/division.jsp'>Intentar de nuevo</a>");
                out.println("<p>tardaste: " + pegar + "</p>");
                out.println("<h1>Tienes  " + puntos4 + "  Puntos</h1>");
                out.println("<h1>Has Jugado  " + veces4 + "  Veces</h1>");
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
