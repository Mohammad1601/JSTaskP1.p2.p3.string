let mark = prompt("Enter The Mark to give you the grade !!!");

switch (mark){
    case (mark>=90): console.log("Your grade IS A+");break;
    case (mark>=80): console.log("Your grade IS A");break;
    case (mark>=70): console.log("Your grade IS B");break;
    case (mark>=60): console.log("Your grade IS C");break;
    case (mark>=50): console.log("Your grade IS D");break;
   default: console.log("Fail");break;
}