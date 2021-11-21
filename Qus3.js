let n =5;
for(let i =1 ;i<n;i++){
    let x = "";
    for(let j = n-i;j>=1;j--){
        x = x + " ";
    }
    x=x+"*";
    if(i>1){
        for(let k =1;k<=2*i-3; k++){
            x = x + " ";
        }
        x= x+"*";
    }
    console.log(x)
}
let x = "";
for(let m = 1;m<=2*n-1;m++){
 x = x + "*"
}
console.log(x)
