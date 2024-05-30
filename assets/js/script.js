
let connexion =document.getElementsByClassName("btn-white btn-grd")[0]
console.log(connexion)


function modifier(){
    let analyse= document.getElementsByClassName("s1-titre")[0]
    console.log(analyse)
    analyse.innerText= ""
}



connexion.addEventListener("click", modifier)



let Sinscrire= document.getElementsByClassName("btn-black btn-grd")[0]
console.log(Sinscrire)

function apparaitre(){
    let analyse= document.getElementsByClassName("s1-titre")[0]
    console.log(analyse)
    analyse.innerHTML="<p>Analyser l'ensemble du territoire <br>pour une croissance plus intelligente</p>"
}
Sinscrire.addEventListener("click", apparaitre)