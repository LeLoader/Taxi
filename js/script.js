"use strict";

class Personnage{
    constructor(name = "Un personnage lambda"){
        this.name = name;
        this.mentalHealth = 10;
        this.redTrafficLight = 30;
    }
}

function sleep(ms) { //Timer
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function Main(name, timer = 0){ //Main fonction du programme
    var personnage = new Personnage(name);
    console.log(`${personnage.name} doit rentrer chez lui en taxi. Il deteste la musique Anissa de Wejdene, et changera de taxi. Il reste 30 feux.`)
    while (personnage.mentalHealth > 0 && personnage.redTrafficLight > 0){ //Conditions: victoire (Nombre de feux = 0) / défaite (Santé mentale = 0) 
        MusicSwitch(personnage);
        await sleep(timer);
        personnage.redTrafficLight -= 1; //On baisse le nombre de feu
        if (personnage.redTrafficLight == 1){ //Feu au singulier ou pluriel
            console.log(`Il reste ${personnage.redTrafficLight} feu`);
            document.title = `"Balade" en taxi: ${personnage.redTrafficLight} feu restant avant la maison.` //Changement du titre de la page (au singulier).
        }
        else{
            console.log(`Il reste ${personnage.redTrafficLight} feux`);
            document.title = `"Balade" en taxi: ${personnage.redTrafficLight} feux restants avant la maison.` //Changement du titre de la page.
        }
    }
    if (personnage.mentalHealth <= 0){ //Defaite
        console.log(`BOOM! ${personnage.name} explose en mille morceau à cause de santé mentale trop basse.. il aurait peut-être du marcher un peu.`);
    }
    else if (personnage.redTrafficLight <= 0){ //Victoire
        console.log(`Enfin arrivé! ${personnage.name} arrive chez lui sain (pas sur) et sauf. Il aura changé ${10-personnage.mentalHealth} fois de taxi au cours de cette "balade".`)
    }
    else { //Au cas où
        console.log("Problem")
    }
}

function MusicSwitch(personnage){ //On change la musique et affiche un message en fonction de celui-ci, puis on baisse la santé mentale si la musique est wejdene
    let index = Math.floor(Math.random()*musicList.length);
    console.log(`La musique change à la radio: ${musicList[index]}`);
    if (index == 0)
        {
            console.log(`Feu rouge! La musique change en ${musicList[index]} et ${personnage.name} sort du taxi pour en trouver un autre. (Sans cette musique de malheur)`);
            personnage.mentalHealth -= 1;
        }
    else {
        console.log(`Feu rouge! La musique change en ${musicList[index]}.`);
    }
}

let musicList = ["Anissa - Wejdene", "You make me feel like it's Halloween - Muse", "Will Of The People - Muse", "Feeling Good - Muse", "Compliance - Muse"]; //Init de la liste de musique
Main(); //Start