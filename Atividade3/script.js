//exercicio 1

function ex1(n1,n2){
    if(n1 > n2){
        console.log(n1)
    }
    else{
        console.log(n2)
    }
}
console.log(ex1(25,51))

//exercicio 2

function ex2(n1){
    if(n1 > 0){
        console.log("o valor foi positivo")
    }
    else{
        console.log("o valor foi negativo")
    }
}
console.log(ex2(-1))

//exercicio 3

    switch(''){
        case 'a':
    console.log("vogal")
            break;
        case 'e':
    console.log("vogal")
            break;
        case 'i':
    console.log("vogal")
            break;
        case 'o':
    console.log("vogal")
            break;
        case 'u':
    console.log("vogal")
            break;
        default:
    onsole.log("consoante")
    }

//exercicio 4

function ex4(nota1,nota2,nota3,nota4){

    let media = (nota1 + nota2 + nota3 + nota4) / 4
    if(media > 7 && media <10){
        console.log("APROVADO")
    }
    else if(media == 10){
        console.log("APROVADO COM DISTINÇÃO")
    }
    else{
        console.log("REPROVADO")
    }
}
ex4(10,10,10,10)

//exercicio 5

function ex5(n1,n2,n3){
if(n1 > n2 && n1> n3){
    console.log(n1)
    }
    else if(n2 > n1 && n2 > n3){
        console.log(n2)
    }
    else{
        console.log(n3)
    }
}
ex5(1,83,54)

//exercicio 6

function ex6(preco1,preco2,preco3){
if(preco1 > preco2 && preco1> preco3){
    console.log(preco1)
    }
    else if(preco2 > preco1 && preco2 > preco3){
        console.log(preco2)
    }
    else{
    console.log(preco3)
    }
}
ex6(12.60,12.50,15.90)

//exercicio 7

function ex7(hora){
    switch(hora){
        case "m":
    console.log("Bom Dia!!")
            break;
        case "v":
    console.log("Boa Tarde!!")
            break;
        case "n":
    console.log("Boa Noite!!")
            break;
    default:
    console.log("Valor Invalido")
    }
}
ex7("n")

//exercicio 8

function ex8(n1){
if(n1 > 60 && n1 >= 90){
    console.log("sua nota é A")
    }
    else if(n1 > 80 && n1<= 89){
        console.log("sua nota é B")
    }
    else if(n1 > 70 && n1 <= 79){
        console.log("sua nota é C")
    }
    else if(n1 > 60 && n1 <= 69){
        console.log("sua nota é D")
    }else{
        console.log("sua nota é F")
    }
}
ex8(61)

//exercicio 9

function ex9(dia){
switch(dia){
        case "1":
    console.log("Domingo")
            break;
        case "2":
    console.log("Segunda")
            break;
        case "3":
    console.log("Terça")
            break;
        case "4":
    console.log("Quarta")
            break;
        case "5":
    console.log("Quinta")
            break;
        case "6":
    console.log("Sexta")
            break;
        default:
    console.log("Sabado")
            break;
    }
} ex9("1")