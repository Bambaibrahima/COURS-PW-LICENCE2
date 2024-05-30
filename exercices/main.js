function addUp(num) {
    let s = 0
   for (let i=1; i<num+1;i++){
	s= s+i
    } 
    return s
}

let arr = [true, false, false, true, false ,true]
let compteur = 0
for (let i = 0;i <arr.length; i++) {
    if (arr[i] == true){
        compteur +=1
    }
}

console.log(compteur)

function countTrue(arr) {
   let compteur = 0
   for (let i = 0;i <arr.length; i++) {
      if (arr[i] == true) {
        compteur +=1
      }

   }
   console.log(compteur)
   return compteur
}

let listNumber =[ "1","2","3","4","5","6","7","8","9"]
let newArr = []
for (let elt of arr){
    for(let num of listNumber){
        if(elt.includes(num)){
            newArr.push(elt)
            br
        }
    }
}


