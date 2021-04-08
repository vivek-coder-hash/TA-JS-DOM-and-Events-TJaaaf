let boxOne  =document.querySelector(".first")
let boxTwo  = document.querySelector(".second")


function generaterandomcolor()  {
    let hexcharacter  = ['0' ,  '1' ,'2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , 'a' , 'b' , 'c' , 'd' , 'e' , 'f']

    let color  = "#"
    for (let i=0 ; i<6 ; i++)  {
        let randomNumber = Math.floor(Math.random() *16)
        color=color+hexcharacter[randomNumber]
    }

    return color
}


function handleClick()  {
    //Generate random color
    // change background color of box

    let randomcolor = generaterandomcolor() ;
    boxOne.style.backgroundColor  = randomcolor ;
    


}


function handleMouseMove()  {
    let randomcolor = generaterandomcolor() ;
    boxTwo.style.backgroundColor  = randomcolor ;

}


boxOne.addEventListener("click" , handleClick)
boxTwo.addEventListener("mousemove" , handleMouseMove)