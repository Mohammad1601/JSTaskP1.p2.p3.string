function doubleNumbers(arr){
  let newArr = arr.map(function(num){
    return num * 2;
  });

  return newArr;
}
// *************************
function stringItUp(arr){
  let result = arr.map(function(num){
    return num.toString();
  });

  return result;
}
// **********************************

function capitalizeNames(arr){
  let fixed = arr.map(function(name){
    let low = name.toLowerCase();
    let firstLetter = low[0].toUpperCase();
    let rest = low.slice(1);
    return firstLetter + rest;
  });

  return fixed;
}
// *******************************************
function namesOnly(arr){
  let names = arr.map(function(obj){
    return obj.name;
  });

  return names;
}
// *********************************************

function makeStrings(arr){
  let result = arr.map(function(person){
    if(person.age >= 18){
      return person.name + " can go to The Matrix";
    } else {
      return person.name + " is under age!!";
    }
  });

  return result;
}
// *********************
function readyToPutInTheDOM(arr){
  let result = arr.map(function(person){
    return "<h1>" + person.name + "</h1><h2>" + person.age + "</h2>";
  });

  return result;
}
// **********************
function doubleValues(arr){
  let result = arr.map(function(n){
    return n * 2;
  });

  return result;
}

// ***********************************
function valTimesIndex(arr){
  let result = arr.map(function(num, index){
    return num * index;
  });

  return result;
}
// *********************************
function extractKey(arr, key){
  let result = arr.map(function(obj){
    return obj[key];
  });

  return result;
}
// ***********************************
function extractFullName(arr){
  let result = arr.map(function(person){
    return person.first + " " + person.last;
  });

  return result;
}
// ***********************************
function doubleValues(arr){
  let newArr = [];

  arr.forEach(function(num){
    newArr.push(num * 2);
  });

  return newArr;
}
// ****************************************
function onlyEvenValues(arr){
  let evens = [];

  arr.forEach(function(num){
    if(num % 2 === 0){
      evens.push(num);
    }
  });

  return evens;
}
// *******************************************
function showFirstAndLast(arr){
  let result = [];

  arr.forEach(function(word){
    let first = word[0];
    let last = word[word.length - 1];
    result.push(first + last);
  });

  return result;
}
// ***********************************************
function addKeyAndValue(arr, key, value){
  arr.forEach(function(obj){
    obj[key] = value;
  });

  return arr;
}
// **************************************************
function vowelCount(str){
  let vowels = "aeiou";
  let result = {};
  let lower = str.toLowerCase();

  lower.split("").forEach(function(char){
    if(vowels.includes(char)){
      if(result[char]){
        result[char] += 1;
      } else {
        result[char] = 1;
      }
    }
  });

  return result;
}

