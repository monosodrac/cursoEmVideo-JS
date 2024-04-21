var agora = new Date()
var diaSem = agora.getDay()
/*
    0 = domingo
    1 = segunda
    2 = terça
    3 = quarta
    4 = quinta
    5 = sexta
    6 = sabado
*/
// console.log(diaSem)

switch (diaSem) {
    case 0:
        console.log('Dimanche')
        break
    case 1:
        console.log('Lundi')
        break
    case 2:
        console.log('Mardi')
        break
    case 3:
        console.log('Mercredi')
        break
    case 4:
        console.log('Jeudi')
        break
    case 5:
        console.log('Vendredi')
        break
    case 6:
        console.log('Samedi')
        break
    default:
        console.log('[ERRO] Dia inválido')
        break // opcional
}