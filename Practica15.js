var x, y, z, suma;
x=prompt("Pon Numero")
y=x;
while(y=x){
    z=prompt("ingresa un numero mas");
    x-1;
    suma=suma+z;
    if(y=0){
        console.log(suma);
        break;
    }
}