// let contacter=document.getElementsByClassName("sm-contact")[0]
// console.log(contacter)

// function replier(){
//   let R1=document.getElementsByClassName("sm-np")[0]
//     R1.innerHTML=""
//    let R2=document.getElementsByClassName("sm-adrs")[0]
//     R2.innerHTML=""
//    let R3=document.getElementsByClassName("sm-descrip")[0]
//     R3.innerHTML=""
//     console.log("hello")
// }
// contacter.addEventListener("click", replier)


//  contacter=document.getElementsByClassName("sm-contact")[0]
// console.log(contacter)

// function deplier(){
//   let R1=document.getElementsByClassName("sm-np")[0]
//     R1.innerHTML=""
//    let R2=document.getElementsByClassName("sm-adrs")[0]
//     R2.innerHTML=""
//    let R3=document.getElementsByClassName("sm-descrip")[0]
//     R3.innerHTML=""
//     console.log("hello")
// }
// contacter.addEventListener("click", deplier)



let contacter  = document.getElementsByClassName("sm-contact")[0];
let contenuVisible = true; // État initial : contenu visible

function deplier() {
    let R1 = document.getElementsByClassName("sm-np")[0];
    let R2 = document.getElementsByClassName("sm-adrs")[0];
    let R3 = document.getElementsByClassName("sm-descrip")[0];

    if (contenuVisible) {
        // Masquer le contenu
        R1.style.display = "none";
        R2.style.display = "none";
        R3.style.display = "none";
        contenuVisible = false;
    } else {
        // Afficher le contenu
        R1.style.display = "block";
        R2.style.display = "block";
        R3.style.display = "block";
        contenuVisible = true;
    }
}

contacter.addEventListener("click", deplier)