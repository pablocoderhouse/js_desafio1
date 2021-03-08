let km_entrenados= prompt("Cuantos km entrenaste esta semana?")
let  horas_entrenadas= prompt("cuantas horas por semana entrenas?")




if (km_entrenados >250 && horas_entrenadas <=9) {
alert("Muy buen entrenamiento, Segui asi campeon!!!");
}

else if (( km_entrenados >=200 &&  km_entrenados<=250) && (horas_entrenadas <=12)) {
alert("Buen entrenamiento, la proxima semana podes mejorar!!!");
}

else if (( km_entrenados >=200 &&  km_entrenados<=250) && (horas_entrenadas >12 && horas_entrenadas <=18)) {
alert("Buen entrenamiento, tenes que hacerlo en menos horas,acelera el ritmo");
}

else if (( km_entrenados >=100 && km_entrenados<200)) {
alert("Esto se parece a un paseo en bici, No es un entrenamiento para competir!!!");
}

else {
alert("estoy confundido, no se que deporte estas practicando!")
}
