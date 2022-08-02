comedy = [
    {
        title:'Uma Ladra Sem Limites',
        director:'Seth Gordon',
        year:2012
    },
    {
        title:'As Branquelas',
        director:'Keenen Ivory Wayans',
        year:2004
    },
    {
        title:'Borat',
        director:'Larry Charles',
        year:2006
    }
]

console.log(comedy);

action = [
    {
        title:'007 - Operação Skyfall',
        director:'Sam Mendes',
        year:2012
    },
    {
        title:'Viúva Negra',
        director:'Cate Shortland',
        year:2021
    },
    {
        title:'Elysium',
        director:'Neill Blomkamp',
        year:2013
    }
]

console.log(action);

fantasy = [
    {
        title:'Monstros S.A',
        director:'Pete Docter',
        year:2001
    },
    {
        title:'Encanto',
        director:'Byron Howard e Jared Bush',
        year:2021
    },
    {
        title:'Alice no país das maravilhas',
        director:'Tim Burton',
        year:2010
    }
]

console.log(fantasy);

//*DESAFIO EXTRA* 

//Escolha uma variável e insira uma condição para ela, (condição de sua escolha), com a seguinte mensagem ao console: 
//IF: "MY FAVORIT MOVIE IS..."
//ELSE: "NOT EVEN 5 STARS..." 

if(action[1].year === 2012){
    console.log(`My favorite movie is ${fantasy[1].title}`);
} else{
    console.log("Not even 5 stars");
}