function contarVocales(texto){
    return texto.replace(/[^aeiouAEIOUáeiouÁEIÓU]/g,"").length;

}
var o=prompt("Coloca tu frase");
console.log(contarVocales(o));