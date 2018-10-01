class game{
    constructor(){

        this.tabCard = [
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

        
        /* nos variable */
        this.deckEls=document.querySelector('#game');
        this.gridEls = document.createElement('section');
        this.gridEls.setAttribute('class', 'grid');
        this.deckEls.appendChild(this.gridEls);

        // la fonction count
        this.count = 0;

        this.firstChoice ='';
        this.secondChoice ='';
        this.previousTarget = null;

        // le jeu complet
        this.totalCard=this.tabCard.concat(this.tabCard);
        // le random du jeu complet
        this.totalCard.sort(()=>0.5 - Math.random());

        //la boucle pour faire toute les div
        this.totalCard.forEach(item => {
            let card = document.createElement('div');
            card.classList.add('card');
            
            card.dataset.name=item.name;
            card.innerHTML =item.icon;

            this.gridEls.appendChild(card);
        
        });
    }
    start()
    {
        this.gridEls.addEventListener( 'click', event =>{
                
            let clicked = event.target;
            console.log('clicked');;

            if(clicked.nodeName === 'SECTION')
            {
                return;
            }
            // on peut pas clicker plus de deux fois
            if (this.count < 2) {
                this.count++;
                    
                // comparaison des deux cartes
                if (this.count === 1 ) {
                    this.firstChoice =  clicked.dataset.name;
                    clicked.classList.add('selected');
                }
                // si firstChoise et secondchoise n'est pas vide
                if ( this.firstChoice !== '' && this.secondChoice !== ''){
                    if (this.firstChoice === this.secondChoice){
                        this.match();
                        this.resetChoice();
                    }else {
                        this.unmatch();
                        this.resetChoice();
                     } 
                    }
                this.secondChoice===clicked.dataset.name;
                clicked.classList.add('selected');
            }

        });
    }
    match()
    {
        this.selected = document.querySelectorAll('.selected');
        this.selected.forEach(card => {
            card.classList.add('match');
        })
    }
    unmatch()
    {
        this.selected = document.querySelectorAll('.selected');
        this.selected.forEach( card => {
            card.classList.add('unmatch');
        })

    }
    resetChoice(){
        this.count= 0;
        
    }
    

    
}
let letplay = new game;
letplay.start();