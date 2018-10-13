
package Clases;

import java.awt.Toolkit;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.DataFlavor;
import java.awt.datatransfer.Transferable;
import java.awt.datatransfer.UnsupportedFlavorException;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Pegado {
     static public String resultado;

    static public String pegar(){
        resultado="";
        Clipboard cb=Toolkit.getDefaultToolkit().getSystemClipboard();
        Transferable contenido = cb.getContents(null);
        if (contenido.isDataFlavorSupported(DataFlavor.stringFlavor)) {
            try {
                resultado=(String) contenido.getTransferData(DataFlavor.stringFlavor);
            } catch (UnsupportedFlavorException ex) {
                Logger.getLogger(Pegado.class.getName()).log(Level.SEVERE, null, ex);
            } catch (IOException ex) {
                Logger.getLogger(Pegado.class.getName()).log(Level.SEVERE, null, ex);
            }
            
        }
        return resultado;
        
    }
    
}
