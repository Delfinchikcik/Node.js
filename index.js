let a = 2;
let b = 98;

for (let i = a; i <= b; i++) {
   let fl = false;
   for (let j = 2; j < i; j++) {
    if(i % j === 0){
        fl = true;
        break;
    }
   }
    if(!fl) console.log(i);
}