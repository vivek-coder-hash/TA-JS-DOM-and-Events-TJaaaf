let input = document.querySelector(".input")

let list = document.querySelector(".movie-list")

let allMovies  = [

    {
        name:"Inception",
        watched : false,
    }  ,

    {
        name:"Horses",
        watched : true,
    }
]

input.addEventListener("keyup" ,function(event) {
     //Adding a movie
    if (event.keyCode === 13) {
        //console.log(event.target.value) /*give name which we enter

        allMovies.push({
            name:event.target.value ,
            watched:false ,
        })
        event.target.value=""

        createMovieUi()
    }

})


function createMovieUi() {
    /* <li class="flex justify-between">
            <input type="checkbox" name="checkbox">
            <p class="text">list of first element</p>
            <a href="#" class="btn"><span>✖</span></a>
          </li>   */

          list.innerHTML=""

          allMovies.forEach((movie ,i)=> {

            let li =document.createElement("li")
          li.classList.add("flex" , "justify-between")

          let check = document.createElement("input")
          check.type="checkbox"
          check.name ="checkbox"
          check.id=i
          check.checked=movie.watched
          check.addEventListener("change" , function handlechange(event){
              let id  = event.target.id
              allMovies[id].watched =!allMovies[id].watched 
          })

          let p=document.createElement("p")
          p.innerText=movie.name

          let a = document.createElement("a")
          a.classList.add("btn")

          let span =document.createElement("span")
          span.classList.add("close")
          span.innerText ="✖"
          span.setAttribute("data-id" , i)

          span.addEventListener("click" , (event)=> {

                      event.target.parentElement.parentElement.remove();
          })

          a.append(span)

          li.append(check,p , a)
          list.append(li)

          })


          



}

createMovieUi()