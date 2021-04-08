let container  = document.querySelector(".container")

for (i=0 ; i<500 ; i++)  {
    let div  = document.createElement("div") ;
    div.classList.add("box") ;
    div.style.width= "4rem" ;
    div.style.height ="4rem" ;
    
    container.append(div) ;
    
}


let boxes  = document.querySelectorAll(".box")

/*boxes.forEach(function(el) {
    el.innerHTML =Math.floor(Math.random()*10)  ;
})*/


function generaterandomcolor()  {
    let hexcharacter  = ['0' ,  '1' ,'2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , 'a' , 'b' , 'c' , 'd' , 'e' , 'f']

    let color  = "#"
    for (let i=0 ; i<6 ; i++)  {
        let randomNumber = Math.floor(Math.random() *16)
        color=color+hexcharacter[randomNumber]
    }

    return color
}




function randomnumberandcolor() {
    let randombox  = boxes.forEach(function(el) {
        let a = Math.floor(Math.random()*500) ;
        el.innerHTML =a ;
        let randomcolor  =generaterandomcolor() ;
        el.style.backgroundColor =  randomcolor;
    })
    return randombox
}


container.addEventListener('mousemove' , randomnumberandcolor)