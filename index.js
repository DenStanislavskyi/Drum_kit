

for (let i = 0; i < document.querySelectorAll('.drum').length; i++)
    document.querySelectorAll('.drum')[i].addEventListener('click', function (){    
        
        makeSoundKeyPress(document.querySelectorAll('.drum')[i].innerHTML);

        buttonAnimation(document.querySelectorAll('.drum')[i].innerHTML);
    });

document.addEventListener('keypress', function(event) { 
    
    makeSoundKeyPress(event.key);
    
    buttonAnimation(event.key);
});

function makeSoundKeyPress(key){
    switch(key){
        case "w":
            let w = new Audio('sounds/0.mp3');
            w.play();
            break;

        case "a":
            let a = new Audio('sounds/1.mp3');
            a.play();
            break;   

        case "s":
            let s = new Audio('sounds/2.mp3');
            s.play();
            break; 

        case "d":
            let d = new Audio('sounds/3.mp3');
            d.play();
            break;

        case "j":
            let j = new Audio('sounds/4.mp3');
            j.play();
            break;  

        case "k":
            let k = new Audio('sounds/5.mp3');
            k.play();
            break; 
            
        case "l":
            let l = new Audio('sounds/6.mp3');
            l.play();
            break;  
    }
}

function buttonAnimation(currentKey){

    let activeButton = document.querySelector('.'+ currentKey);

    activeButton.classList.add('pressed');
    
    setTimeout(function() {
        activeButton.classList.remove('pressed');
    }, 100)
}