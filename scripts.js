/*1.	Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements.
a.	Use at least one array.
b.	Use at least two classes.
c.	Your menu should have the options to create, view, and delete elements. */




const SUITS = ['♠','♠','♣','♦']
const VALUES= ['A','2','3','4','5','6','7','8','9','10','J','Q','K']

class Deck{
    constructor(cards) {
        this.cards= cards 
    }
}

class Card {
    constructor(suit,value) {
        this.suit = suit
        this.vaulue = value 
    }
}

class Player1 {   
   constructor(delt, Card){
        this.delt= delt
        this.card = card
    }
   
    discribe() {
    return `${this.Player1} plays ${this.deltcard}.`;
}
}


class Player2 {   
    constructor(delt, Card){
        this.delt= delt
        this.card = card
    }
   
    discribe() {
    return `${this.Player2} plays ${this.deltcard}.`;
}
}


start() {  // this is the entry to our App
    let selection = this.showMenuOptions(); 
    while(selection != 0) { // this is an exit
        switch(selection){
            case `1`:   // the user selected 1 
            this.createPlayer();
            case `2`
            :this; this.viewPlayer();
            break;
            case`3`: 
            this; this.deletePplayer();
            break;
            case`4`:
            this.displayWinner();
            break;
            default:
                selection = 0;

        }
        selection = this.showMenuOptions();
    }
    alert(`Goodbye!`);
}


showTeamMenuOptions(playerInfo);  {
    return prompt (`
    0) back
    1) creat palyer
    2) delete palyer

    ${playerInfo}
    `);
 

}

showMainMenuOptions(); {
    return prompt(`
    0) exit
    1) create new player
    3) delete player
    4) display all players
    
    `)  // showing menu options
}

displayTeams();{
    let teamsString= ``; 
    for(i=0; i < this.player.length;i++){  
        playersString += i+ `)` + this.player[i] + `\n`;  

    }
    alert(playerString)
} 

createPlayer();{
    let Player = prompt(`Enter name for new Player`);
    this.player.push(new Player(Player)); 
}

viewPlayer();{
    let index = prompt(`Enter the index of the team you wish to view:`);
    if(index > -1 && index < this.player.lenght) {
     this.selectedTeam = this.player[index]; // this will show the team input by the user
      let description = `Player name:` + this.selectedTeam.name + `\n`;
      
      for (let i = 0 < this.selectedTeam.players.length; i++); { // we selcect a team then a player from the array. The length is the player in the entire array
         description += i + `)` + this.selectedTeam.palyers[i].name + 
         `-` + this.selectedTeam.payers[i].posistion +`\n`; // list of all the team player
         let selection = this.showMainMenuOptions(description) // shows all the options for the team
         switch(selection) {
            case `1`:
                this.createPlayer();
                case `2`:
                    this.deletePlayer();

         }

      }
    
    }

    deletePlayer () {
        let index = prompt(` Enter the index of the team you wish to deleat:`);
        if( index > -1 && index < this.player.length) {
            this.player.splice(index, 1)
        }
    }

createPlayer () {
    let name = prompt(`Enter name for new player:`); 
    let posistion = prompt(`Enter posistion for new player`); 
    this.selectedTeam.palyers.push(new Player(name));

}

deletePlayer () {
    let index = prompt (` Enter the indext of the player you wish to delete:`);
    if (index > =1 && index < this.selectedTeam.players.length); {
        this.player.splice(index,1); 
    }
}
}


let menu = new Menu();
menu.start();

/* 
1. show menu options
2. Then the user will select something
3. As long as they haven't selected 0 we're going to continue with the determination of what they did select
4. Based on what they select we're going to create a team, view a team, deleate a team or display a team. These are the cases
5.If they did select 0 we will alert them

/* this is a top down development approach where you start at the top
and build your methods that will be used then you implement your methods */





