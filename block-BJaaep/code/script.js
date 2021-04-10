let div  = document.querySelectorAll(".wrapper")


let firstwrapper  = div[0]
let secondwrapper  =div[1]


let firstli = document.querySelectorAll("li") ;

const numbers  = [1,2,3,4,5,6,7,8,9,10,11,12] ;

numbers.forEach(function(el) {
    
    firstli[el-1].addEventListener("click" , function(){
        firstli[el-1].innerText =el
    })


})



const number  = [13,14,15,16,17,18,19,20,21,22,23,24]

number.forEach(function(el) {

    secondwrapper.addEventListener("click" , function(){
        firstli[el-1].innerText =el
    })

})