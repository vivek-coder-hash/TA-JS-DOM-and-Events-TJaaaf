let form  =document.querySelector("form")
let userInfo  ={} ; 


function handlesubmit (event)  {
    event.preventDefault() ;
    userInfo.Name  = form.elements.text.value ; 
    userInfo.Email  = form.elements.email.value ; 
    userInfo.gender  =form.elements.gender.value ; 
    userInfo.color  =form.elements.color.value ;
    userInfo.range  = form.elements.range.value ; 
    userInfo.terms   = form.elements.terms.value; 
    console.log(userInfo)
}



form.addEventListener("submit" , handlesubmit)