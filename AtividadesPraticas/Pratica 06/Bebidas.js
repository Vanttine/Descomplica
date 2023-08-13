var drink = ""
var leite = '4.50';
var cafe = '2.00';
var cha = '3.25';

switch (drink) {
    case "cafe":
        console.log('Voce devera pagar ' + cafe)

        break;
        
    case "cha":
        console.log('Voce devera pagar ' + cha)

        break;

    case "leite":
        console.log('Voce devera pagar ' + leite)

        break;

        default:
            console.log('A sua escolha deve ser feita entre cafe, leite ou cha.');
}


//Em caso de precisar transformar os valores das strings em numeros, eu faria a seguinte conversao abaixo
        var d1 = Number(leite); 
        var d2 = Number(cafe);
        var d3 = Number(cha); 

        console.log(d1)