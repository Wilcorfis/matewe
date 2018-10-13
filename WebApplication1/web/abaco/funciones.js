var cadGET = location.search.substr(1,location.search.length);
var arrGET = cadGET.split("&");

/*arrGET[0]=arrGET[0].replace(/%20/gi," ")
nombres=arrGET[0].split(",");
codigoprofesor=nombres[0];
codigocentro=nombres[1];
usuario=nombres[2];*/
//****************************************************************************************************************
function obtenerelementos(micampo,posicion,mi_xmlDoc)
{
if (posicion!=-1){
return mi_xmlDoc.getElementsByTagName(mi_campo)[posicion].childNodes[0].nodeValue;
}
else
{
var mi_array=new Array();
mi_array=mi_xmlDoc.getElementsByTagName(mi_campo);
return mi_array;
//alert(mi_array[0].childNodes[0].nodeValue);
}
//return;
}
//****************************************************************************************************************

function filtro(cCad,cCar)
{
//alert("antes de filtro "+cCad+" *** "+cCar)
cOUT="";	
cIN=cCad;
caracter=cCar;
try
    {
    pos=cIN.indexOf(caracter);
    while(pos >= 1)
        {
        cIN=cIN.replace(caracter,"");
        pos=cIN.indexOf(caracter);
        }
    cOut=cIN;
    //alert("despues de filtro "+cOut+" *** "+cCar)
    return true;
    }
    catch(e)
    {
    //alert("filtro:"+e.message);
    return false;
    }
}
//****************************************************************************************************************
function verify(){
  // 0 Object is not initialized
  // 1 Loading object is loading data
  // 2 Loaded object has loaded data
  // 3 Data from object can be worked with
  // 4 Object completely initialized
  if (xmlDoc.readyState != 4)
  {
    return false;
  }
}
//****************************************************************************************************************
function totalcampo(campo,cadenaXML)
{
mi_xml=cadenaXML;
mi_campo=campo;
try //Probamos coN mICROSOFT
  {
  exito=filtro(mi_xml,"\r");
  if (!exito) { return;}
  exito=filtro(mi_xml,"\n");
  if (!exito) { return;}
  mi_xml=cOut;
  xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
  xmlDoc.async="false";
  xmlDoc.onreadystatechange=verify;
  xmlDoc.loadXML(mi_xml);
  }
catch(e)
  {
  try // PROBAMOS CON RESTO
    {
    parser=new DOMParser();
    xmlDoc=parser.parseFromString(mi_xml,"text/xml");
    }
  catch(e)
    {/*alert(e.message)*/}
   }
try
  {
   return parseInt(xmlDoc.getElementsByTagName(mi_campo).length);
  }
catch(e) {/*alert(e.message)*/}
}
//****************************************************************************************************************
function obtenercampo(campo,pos,cadenaXML)
{

 mi_xml=cadenaXML;
 mi_campo=campo;
 try {
  exito=filtro(mi_xml,"\r");
  if (!exito) { return;}
  exito=filtro(mi_xml,"\n");
  if (!exito) { return;}
  mi_xml=cOut;
  xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
  xmlDoc.async="false";
  xmlDoc.onreadystatechange=verify;
  exito=xmlDoc.loadXML(mi_xml);
  if (!exito) { alert("error"); return;}
  return obtenerelementos(mi_campo,pos,xmlDoc);
  //return xmlDoc.getElementsByTagName(mi_campo)[pos].childNodes[0].nodeValue;
	}
 catch(e){
 try // PROBAMOS CON RESTO
    {
    parser=new DOMParser();
    xmlDoc=parser.parseFromString(mi_xml,"text/xml");
    }
  catch(e)
    {/*alert(e.message)*/}}
 try
  {
  
   return obtenerelementos(mi_campo,pos,xmlDoc);//parseInt(xmlDoc.getElementsByTagName(mi_campo).value);
  }
catch(e) {/*alert(e.message)*/}
}
//*****************************************************************************************************************
function formatonum(numero,decimales)
{
if  (numero=="Infinity" ||numero=="-Infinity" || isNaN(numero)){return "0";}
var sig;
if (parseFloat(numero)<0)
{
sig="-";
}
else
{
sig="";
}

ent=Math.abs(parseInt(numero,10));
dec=parseInt((Math.abs(numero)-ent)*Math.pow(10,decimales)+.5,10);
if (decimales==0 && dec>=1){ent=ent+1;}
lar=ent.toString().length;
modul=lar%3;
co=parseInt(lar/3,10);
nuevonum=ent.toString().substring(0,modul)
var l=0;
while (l<co)
{
if (l>0 || modul>0){nuevonum+=".";}
nuevonum+=ent.toString().substring(l*3+modul,l*3+modul+3);
l++;
}
if (decimales>0)
{
dec=("0000000000"+dec).substring(10+dec.toString().length-decimales,10+dec.toString().length);
nuevonum+=","+(dec+"0000000000").substring(0,decimales);
}
return sig+nuevonum;
}
//****************
function guardaf(a)
{
return(a.substr(6,4)+"-"+a.substr(3,2)+"-"+a.substr(0,2))
}
//**************
function fechaguardada(a)
{
return(a.substr(8,2)+"-"+a.substr(5,2)+"-"+a.substr(0,4))
}
