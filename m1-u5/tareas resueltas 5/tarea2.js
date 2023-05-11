document.addEventListener("DOMcontentloaded" , e=>{ 
    contadorletra()
})

const contadorletra = () =>{
const $input =document.getElementById("input")
const $number= document.getElementById("number")

$input.addEventListener("input",e=>{
 $number.value= e.target.value.length
 $number.textContent = e.target.value
}) 
}
  
  
  //var text = document.getElementById('text');
  //var number = document.getElementById('number');
  
  //text.addEventListener( function(){
   //   number.innerText = text.value.length;
    //})

 

