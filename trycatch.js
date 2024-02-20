const variavell = "valor somente leitura";
var variavel2 = "valor editavel";

try {
    variavell = "valor não permitido";
    console.log("A variavell foi alterada para: ", variavell);
} catch (e) {
     console.error("Ops! Ocorreu o erro", e);
}

try{
    variavel2 = "valor permitido";
    console.log("A variavel2 foi alterada para ", variavel2);
} catch (e){
    console.error("Ops! Ocorreu o erro", e)
}