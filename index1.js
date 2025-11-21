let x = prompt("Enter the operation * / + - ");
let y = prompt("Enter the first  Number ");
let z = prompt("Enter the second  Number ");

switch (x){
    case '*': console.log("The result of (*) "+(y*z));break ;
    case '+':console.log("The result of (+) "+(y+z));break ;
    case '-': console.log("The result of (-) "+(y-z));break ;
    default: console.log("The result of (/) "+(y/z));break ;
}
