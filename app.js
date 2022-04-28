let stars = document.querySelectorAll('.fa-regular')
let span = document.querySelector('span')
let score = 0;

stars.forEach((targetStar, i) => {
  span.innerText = `${score}/5`

  /*Mouse over*/
  targetStar.addEventListener("mouseover",function(){

  score = i
  targetStar.style.color ="#CC0066"
  let areSolid = document.getElementsByClassName('fa-solid').length
  span.innerText = `${areSolid}/5`

    for(let starUnder = 0 ; starUnder <= score; starUnder++){
      stars[starUnder].style.color ="#CC0066"
      }
    })
    /*Mouse out*/
  targetStar.addEventListener("mouseout",function(){

      targetStar.style.color ="unset"

      for(let starUnder = 0 ; starUnder <= score; starUnder++){
        stars[starUnder].style.color ="unset"
      }
  })
  /*On click*/
  targetStar.addEventListener("click",function(e){

    for(let starUnder = 0 ; starUnder <= score; starUnder++){
      stars[starUnder].classList.replace("fa-regular","fa-solid")
      let areSolid = document.getElementsByClassName('fa-solid').length

      document.querySelector('span').innerText = `${areSolid}/5`
    }
  })

});
/*reset Button*/

function reload(){
stars.forEach((item, i) => {
  if(item.classList.contains("fa-solid")){
    stars[i].classList.replace("fa-solid","fa-regular")
    document.querySelector('span').innerText = `${0}/5`
  }


})};
