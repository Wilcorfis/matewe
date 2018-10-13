package Respuestas;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "Oprel", urlPatterns = {"/Oprel"})
public class Oprel extends HttpServlet {

    static public int puntos6 = 0;
    static public int veces6 = 0;

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
        String que = request.getParameter("val");
        int val = Integer.parseInt(que);
        puntos6=puntos6+val;
        veces6=veces6+1;
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Oprel</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Tienes  " +puntos6 + "  Puntos</h1>");
            out.println("<h1>Has Jugado  " +veces6 + "  Veces</h1>");
            out.println("<a href='http://localhost:8090/IntegracioMatewe/relacion/game.html'>Intentar de nuevo</a>");
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
