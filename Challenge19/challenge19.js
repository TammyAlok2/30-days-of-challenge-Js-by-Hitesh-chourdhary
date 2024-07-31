/******** Day 18 : Regular Expression  ******* */

  // Activity 1 : Basic regular expression 
   // Task 1: Write a regular expression to match in simple pattern (eg. match all occurence of the word "javascript " in a string ) log the matches 
   const text = "I love you ankita You come on my dream ankita and get to know about the world "
   const regex = 'ankita'

   const matches = text.match(regex)
   if (matches) {
    console.log("Matches found:", matches);
  } else {
    console.log("No matches found.");
  }

  // task 2 : write a regular expression to match all digits in a string . log hte mathces 
const text2 = "The price is 123 dollars and 45 cents. The code is 7890.";
  const regex2 = /\d+/g; // '\d' matches any digit, '+' matches one or more digits, 'g' for global match
  
  const matches2= text2.match(regex2);
  
  if (matches) {
    console.log("Matches found:", matches2);
  } else {
    console.log("No matches found.");
  }
  

  // Activity 2 : Charcter Classes and Quantifiers 
   // Task 3 : Write a regular expression to match all words in a string that start with a capital letter . log the matches 
   const text3 = "Hello, my name is John Doe. I live in New York City.";
   const regex3 = /\b[A-Z][a-z]*\b/g; // '\b' for word boundary, '[A-Z]' for capital letter, '[a-z]*' for zero or more lowercase letters
   
   const matches3 = text3.match(regex3);
   
   if (matches3) {
     console.log("Matches found:", matches3);
   } else {
     console.log("No matches found.");
   }
   

   // Task 4 : Write  a regular expression to match all sequence of one or more digits in astring . log the matches 
   const text4 = "hello this is my phone number 992939329393";
   const regex4 = /\d+/g; // '\d' matches any digit, '+' matches

   const matches4 = text4.match(regex4)
   if (matches4) {
    console.log("Matches found:", matches4);
  } else {
    console.log("No matches found.");
  }

  // ACTITVITY 3: GROUPING AND CAPTURING 
   // TASK 5 ;  wRITE a regular expression to capture the area code , central office code, and line number from a us phone number format .
   const phoneNumber = "(123) 456-7890";
const regex5 = /\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})/;

// Use the exec method to capture groups
const matches5 = regex5.exec(phoneNumber);
console.log(matches5)

if (matches) {
  const areaCode = matches5[1];
  const centralOfficeCode = matches5[2];
  const lineNumber = matches5[3];
  console.log(`Area Code: ${areaCode}`);
  console.log(`Central Office Code: ${centralOfficeCode}`);
  console.log(`Line Number: ${lineNumber}`);
} else {
  console.log("No matches found.");
}


 // Task 6 ; wriete a regular expression to capture the username and domain from an email address .l og
 const email = "aloktamrakar2@gmail.com";
const regex6 = /^([^@]+)@([^@]+)$/;

// Use the exec method to capture groups
const matches6 = regex6.exec(email);
console.log(matches6)
if (matches6) {
  const username = matches6[1];
  const domain = matches6[2];
  console.log(`Username: ${username}`);
  console.log(`Domain: ${domain}`);
} else {
  console.log("No matches found.");
}


// ASSERTION AND BOUDARIES 
// TASK 7 : WRITE A regular expressin to match a word only if it is beggining of a string . log hte matches 
const text7 = "Hello world! Hello everyone.";
const regex7 = /^\w+/; // '^' asserts position at start of the string, '\w+' matches one or more word characters

// Use the match method to find the matches
const matches7 = text7.match(regex7);

if (matches7) {
  console.log("Match found:", matches7[0]);
} else {
  console.log("No matches found.");
}



// task 8 ; Write a regular exprssion to match a word only if it sis at the end of a string . log the mataches 
const text8 = "This is a test string. The last word.";
const regex8 = /\b\w+\b$/; // '\b' for word boundary, '\w+' for one or more word characters, '$' for end of the string

// Use the match method to find the matches
const matches8 = text8.match(regex8);

if (matches8) {
  console.log("Match found:", matches8[0]);
} else {
  console.log("No matches found.");
}




// ACTIVITY 5 : PRATCTICAL APPLICATION 
 // TASK 9 : Wrtie a regular expression to validate a simple passord , (must include at least one uppercase letter, one lowercase letter , one digit , one specaial char ) log whether password is valid
 const password = "ExamplePass1*";
const regex9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Use the test method to validate the password
const isValid = regex9.test(password);

if (isValid) {
  console.log("Password is valid.");
} else {
  console.log("Password is not valid.");
}


// task 10 : wrtie a regular exprssion to validate a url . log the wheter url is valid 
const url = "https://www.example.com/path/to/resource?query=parameter#fragment";
const regex10 = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})(\/[a-zA-Z0-9-]*)*(\?[a-zA-Z0-9=&]*)?(#[a-zA-Z0-9-]*)?$/;

// Use the test method to validate the URL
const isValidUrl = regex10.test(url);

if (isValidUrl) {
  console.log("URL is valid.");
} else {
  console.log("URL is not valid.");
}
