// ==========================================
//  APPLY ALL STRING METHODS TO FULL NAME
//  Name: "Mohammad Ahmad Mohammad Al-Zebdieh"
// ==========================================

let fullName = "Mohammad Ahmad Mohammad Al-Zebdieh";

console.log("Original:", fullName);


// ============================
//   trim()
// ============================
// Removes spaces from both start and end
console.log("trim():", fullName.trim());


// ============================
//   trimStart()
// ============================
// Removes spaces ONLY from the start
console.log("trimStart():", fullName.trimStart());


// ============================
//   trimEnd()
// ============================
// Removes spaces ONLY from the end
console.log("trimEnd():", fullName.trimEnd());


// ============================
//   padStart()
// ============================
// Adds characters at the beginning until length is reached
console.log("padStart():", fullName.padStart(fullName.length + 5, "*"));


// ============================
//   padEnd()
// ============================
// Adds characters at the end until length is reached
console.log("padEnd():", fullName.padEnd(fullName.length + 5, "*"));


// ============================
//   charAt()
// ============================
// Returns the character at a specific index
console.log("charAt(6):", fullName.charAt(6));


// ============================
//   charCodeAt()
// ============================
// Returns the ASCII/Unicode code of the character
console.log("charCodeAt(5):", fullName.charCodeAt(6));


// ============================
//   split()
// ============================
// Splits the string into an array
console.log("split(' '):", fullName.split(" "));


// ============================
//   length
// ============================
// Returns number of characters
console.log("length:", fullName.length);


// ============================
//   slice()
// ============================
// Extracts part of string using (start, How many character I have to take )
console.log("slice(0, 7):", fullName.slice(0, -2));


// ============================
//   substring()
// ============================
// Similar to slice() but does NOT accept negative indexes
console.log("substring(9, 14):", fullName.substring(9, 14));


// ============================
//   substr()
// ============================
// Extracts by (start, length) — deprecated
console.log("substr(9, 5):", fullName.substr(9, 5));


// ============================
//   replace()
// ============================
// Replaces FIRST matched value
console.log("replace Ahmad→Ahmad♥:", fullName.replace("Ahmad", "Ahmad♥"));


// ============================
//   replaceAll()
// ============================
// Replaces ALL matches of a substring
let tempName = "Mohammad Ahmad Mohammad Ahmad";
console.log("replaceAll Ahmad→King:", tempName.replaceAll("Ahmad", "King"));


// ============================
//   toUpperCase()
// ============================
// Converts all letters to UPPERCASE
console.log("toUpperCase():", fullName.toUpperCase());


// ============================
//   toLowerCase()
// ============================
// Converts all letters to lowercase
console.log("toLowerCase():", fullName.toLowerCase());


// ============================
//   concat()
// ============================
// Joins two strings (same as +)
console.log("concat():", fullName.concat(" is learning JS!"));


// ============================
//   indexOf()
// ============================
// Finds FIRST index of substring
console.log("indexOf('Mohammad'):", fullName.indexOf("Mohammad"));


// ============================
//   lastIndexOf()
// ============================
// Finds LAST index of substring
console.log("lastIndexOf('a'):", fullName.lastIndexOf("a"));


// ============================
//   search()
// ============================
// Searches like indexOf but supports RegEx
console.log("search('Al-Zebdieh'):", fullName.search("Al-Zebdieh"));


// ============================
//   match()
// ============================
// Returns array of matches (RegEx)
console.log("match(/[A-Z]/g):", fullName.match(/[A-Z]/g));


// ============================
//   matchAll()
// ============================
// Returns iterator of ALL RegEx matches
for (const match of fullName.matchAll(/a/gi)) {
    console.log("matchAll 'a' at index:", match.index);
}


// ============================
//   includes()
// ============================
// Checks if substring exists (true/false)
console.log("includes('Ahmad'):", fullName.includes("Ahmad"));


// ============================
//   startsWith()
// ============================
// Checks if string begins with a substring
console.log("startsWith('Mohammad'):", fullName.startsWith("Mohammad"));


// ============================
//   endsWith()
// ============================
// Checks if string ends with a substring
console.log("endsWith('Al-Zebdieh'):", fullName.endsWith("Al-Zebdieh"));
