/*function area(radius){
  let ar = 3.14*radius**2;
  console.log(ar);
};


area(4);*/

/*const Multiplication = function(){
for(let i=4; i<5; i++){
   
let j =0;
while(j<=10){
    let product = i*j;
       
    console.log(product+5)
    j++;
}
        
}
};

Multiplication();
*/
/*const ul = document.querySelector('.people');
const people =['beni','mario','luigi','super','travis'];
let html = ``;
people.forEach( person => {
  html += `<li style ="color: green"> ${person}</li>`;

});
console.log(html);
ul.innerHTML = html;*/

const grade = 'A';
switch (grade){
  case('A'):
  console.log("you got A!");
  break;
  case('B'):
  console.log("you got B!");
  break;
  default:
    console.log('not valid');
}

let number = [14,57,23,75,34,65,34,88,99,123,5456,676];
for(let i = 0; i<= number.length; i++){ 
  let max = 0;
  while(max < number[i]){
    max = number[i];
  }
  console.log(max);
}
 
 //let a = number.length;
 //console.log(a);