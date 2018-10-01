
/* La class  Memory card */
class MemoryGame {

    constructor(){

        this.cardSet = [
        {        
            'name' : 'name1',
            'icon' : '👾',
        },
        {        
            'name' : 'name2',
            'icon' : '🦎',
        },
        {        
            'name' : 'name3',
            'icon' : '💛',
        },
        {        
            'name' : 'name5',
            'icon' : '🦂',
        },
        {        
            'name' : 'name6',
            'icon' : '🇯🇵',
        },
        {        
            'name' : 'name7',
            'icon' : '🇬🇱',
        },
        {        
            'name' : 'name8',
            'icon' : '🇫🇷',
        }
        ];

        /* Mes VARIABLES */
        // Va aller chercher l'id game
        this.deckGame = document.querySelector('#game');
        
        // creation des éléments DOM
        this.gridEls =document.createElement('section');
        
        // rajout la class sur les élements DOM
        this.gridEls.setAttribute('class', 'grid');
        
        // l'ajouter sur l'élémént Dom
        this.deckGame.appendChild(this.gridEls);
        
        //initialisation de nombre de coup
        this.count = 0;

        //variable de choix
        this.firstChoice = '';
        this.secondChoice = '';
        this.previousTarget = null;

        //variables pour le compteur
        this.nbHit = 0;
        this.counterEls = document.querySelector('.nbHit');

        //variables pour le timer
        this.second = 0;
        this.minute = 0;
        this.hour = 0;
        this.timerEls = document.querySelector(".timer");
        this.timerEls.innerHTML = "0:0"
        this.interval;

        // le nombre de carte matched
        this.matchedCards = document.querySelectorAll('.match');

        // Variable totalCarte à l'aide d'une concaténation
        this.TotalCardSet = this.cardSet.concat( this.cardSet);
        //random de nos cartes
        this.TotalCardSet.sort(()=>0.5 - Math.random())


        /* LA BOUCLE FOREACH pour toute les mettre face question */
        this.TotalCardSet.forEach(item => {

            // création d'élements DOM (div)
            let cardEls = document.createElement('div');
            let backEls =document.createElement('div');
            let frontEls =document.createElement('div');
            
            // on ajoute les class aux élément dom
            //this.gridEls.setAttribute('class', 'grid');
            backEls.classList.add("back");
            frontEls.classList.add("front");
            cardEls.classList.add('card');

            // variable de l'item question 
            let iconQuestion = "❔";

            cardEls.dataset.name=item.name;

            //modification des icons
             frontEls.innerHTML = iconQuestion;
            backEls.innerHTML = item.icon;

            // rajouter lélément au DOM
            this.gridEls.appendChild(cardEls);
            cardEls.appendChild(frontEls);
            cardEls.appendChild(backEls);
        });
    }

    // méthode commencez le jeu 
    start()
    {
        // ("click", function (event)
        this.gridEls.addEventListener("click", event => {
             console.log('je clic');
            //récupére l'élément cliqué
            let clicked = event.target;
            console.log('je clic'+event.target);
            
            // empecher de cliquer sur la même carte
            if (clicked.parentNode.classList.contains('selected'))
            {
                console.log("ppl2");
                return;
            }    
            //empeche de cliquer sur la grid
            if ( clicked.parentNode.classList.contains('grid')){
                console.log("ppl3");
                return;
            } 
            // empeche aussi de cliquer sur la grid ( sécurité en plus, avec la triche on ne plaisente pas)
            if (clicked === clicked.classList.contains('grid_container'))
                {
                    console.log('PPL4');
                return;
            }
            // empeche de cliquer sur la grid
            if( clicked.nodeName === 'SECTION'){
                console.log("ppl5");
                return;
            }
 
            // tant que this.count est inférieur à 2
            if(this.count < 6) {
                this.count++;
                            
                /* PREMIER ESSAI */
                if(this.count === 1){
                    //récupération du date-name
                    this.firstChoice = clicked.parentNode.dataset.name;
                    console.log(this.firstChoice+'premier');
                    // on ajoute une class selected
                    clicked.parentNode.classList.add('selected'); 

                    // compte le nombre de coup
                    this.fnbHit();
                    
                } else {
                /*DEUXIEME ESSAI */
                    //récupération du data-name
                    this.secondChoice = clicked.parentNode.dataset.name;
                    console.log(this.secondChoice+'second');
                    // on ajoute une class selected
                    clicked.parentNode.classList.add('selected');
                }
                //Si NOS CHOIX DE SONT PAS VIDE
                if (this.firstChoice !== '' && this.secondChoice !== ''){

                    //Si les 2 choix sont identiques
                    if (this.firstChoice === this.secondChoice){
                        //Run la fonction match
                        this.match();
                        //Run la fonction resetChoices
                        this.resetChoices();
                    //Sinon
                    } else  {
                    //Run la fonction unmatch
                        this.unmatch();
                        setTimeout(()=>{
                            this.resetChoices()
                        },1000);
                    }
                }
            }
        })
    }
    match() {
        
        //récupération des class 'selected'
        this.selectedEls = document.querySelectorAll('.selected');
      
        //Ajout de la class 'match' à chacunes d'elles
        this.selectedEls.forEach(card => {
            card.classList.add('match');
        });
        let matchedCardsEls = document.getElementsByClassName('match');
        console.log(matchedCardsEls);
        
        //gestion de la vitoire 
        if (matchedCardsEls.length == 14){
            this.gg();
        }

    }

    unmatch() {
        //récupération des class 'selected'
        this.selectedEls = document.querySelectorAll('.selected');
        //Ajout de la class 'unmatch' à chacunes d'elles
        this.selectedEls.forEach(card => {
            card.classList.add('unmatch');
        });
        console.log('card unmatch');
    }

    resetChoices() {
        //reset des variables
        this.count = 0;
        this.firstChoice = '';
        this.secondChoice = '';

        //récupération des class 'selected'
        this.selectedEls = document.querySelectorAll('.selected');
        //Suppression de la class 'unmatch' à chacunes d'elles
        this.selectedEls.forEach(card => {
            card.classList.remove('selected', 'unmatch');
        });
    }
    gg()
    {
        //récupération du temps total
        let finalTime = this.timerEls.innerHTML;
        alert(" tu as gagné o.o en  " + this.nbHit + " coups. Temps : " + finalTime );
        //selectionner notre élement pop-up
        //appeler le css correspondant
    }
    Restard()
    {
        //on recharge la page
        window.location.reload();
    }
    //Méthode du timer
    startTimer() 
    {    
    //interval toutes les secondes
        this.interval = setInterval(() =>{
        
        //Affichage
        this.timerEls.innerHTML= this.minute+":"+this.second;
        this.second++;
        
        //Incrémente minute toutes les 60s
        if(this.second == 60){
            this.minute++;
            this.second = 0;
        }
        //Incrémente hour toutes les 60m
        if(this.minute == 60){
            this.hour++;
            this.minute = 0;
        }
        }, 1000);
    }
     //Méthode/function du compteur de coups
    fnbHit() 
    {
        this.nbHit++;
        this.counterEls.innerHTML = this.nbHit;

        if(this.nbHit == 1){
            this.startTimer();
        }

    }
}

let letsPlay = new MemoryGame; 
letsPlay.start();