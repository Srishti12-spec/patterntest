let n = 5;
for(let i =1;i<=n;i++){
    let x = "";
    for(let j =n-i;j>=1;j--){
        x = x + " ";
    }
    for(let k = 1;k<=2*i -1;k++){
        x = x + "*";
    }
    console.log(x);
}
for(let m =1; m<=n-1;m++){
    let y = "";
   

    for(let r=1;r<=m;r++){
        y = y + " ";
        
    }
    for(let p =1;p<=2*(n-m)-1;p++){
        y = y + "*";
    }
    console.log(y);
}

