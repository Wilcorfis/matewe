package Respuestas;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author USUARIO
 */
@WebServlet(name = "Opabaco", urlPatterns = {"/Opabaco"})
public class Opabaco extends HttpServlet {

    static public int puntos5 = 0;
    static public int veces5 = 0;

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
        puntos5 = puntos5 + 80;
        veces5 = veces5 + 1;
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Oprel</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Tienes  " + puntos5 + "  Puntos</h1>");
            out.println("<h1>Has Jugado  " + veces5 + "  Veces</h1>");
            out.println("<a href='http://localhost:8090/IntegracioMatewe/abaco/abaco.jsp'>Intentar de nuevo</a>");
            out.println("</body>");
            out.println("</html>");
        }

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
