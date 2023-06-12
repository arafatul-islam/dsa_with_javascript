// string comparison

// const a = "aca";
// const b = "ab";
// console.log(a < b);

// indexOf function
// function existsInString(string, search, pos) {
//   return string.indexOf(search, pos);
// }

// function countCharacter(string) {
//   let count = 0;
//   let pos = string.indexOf("a");
//   while (pos !== -1) {
//     pos = existsInString(string, "a", pos + 1);
//     count++;
//   }

//   return count;
// }

// const charCount = countCharacter("he's my king from this dy until my lst day");
// console.log(charCount);

// split function

// const countChar = (string) => {
//     return string.split("").filter((char) => char == "a").length;
//   };

//   console.log(countChar("he is my king from this day until his last day"));

// replace function

// const replaceWords = (string, word1, word2) => {
//   return string.replace(word1, word2);
// };

// console.log(replaceWords("hello iiuc", "hello", "hell"));

// search function

// console.log("hello, hello, buddy".search("hello"));

// RegExp
// test function
// const bool = /hello Arafat/.test(
//   "hello arafatul islam, are you giving enough time to learn code?"
// );
// console.log(bool);

// const pet = /dog|cat|fish/;
// const str = "I had a pet fishh";

// const val = pet.test(str);
// console.log(val);

// i flag
// const name = "ARAFAT";
// const regex = /arafat/i; //true
// // const regex = /arafat/; //true
// const val = regex.test(name);
// console.log(val);

// extract pattern
// const str = "he is my king";
// const regex = /king/;
// const val = str.match(regex);
// console.log(val);

// extract more than 1 matches
// const str =
//   "King Robert Baratheon died, and the next lawful heir is his brother Stannis Baratheon , but joefry become the king";

// const regex = /king/gi;

// const val = str.match(regex);
// console.log(val);

// match anything with wildcard period
// const exp = /./gi;
// const str =
//   "the king went to winterfell and asked Ned Stark's help.winter is coming";
// const val = str.match(exp);
// console.log(val.fi);

// char count with period
// const str = "I am a student and programmer";
// const charCount = str
//   .match(/./g)
//   .filter((char) => char.toLowerCase() == "i").length;
// console.log(charCount);

// match single char with multiple posibilities

// const vowelRegex = /[^ab]/gi;
// const str = "North will remember your hospitality lord Walder Frey";
// const res = str.match(vowelRegex);
// console.log(res);

// match letters of alphabets
// const regex = /[^a-z]/gi;
// const str = "hello".match(regex);
// console.log(str);

// match letters and numbers of the alphabets
// const regex = /[1-5i-z]/gi;
// const str = "North will remember your hospitality lord Walder Frey, 2021";
// const val = str.match(regex);
// console.log(val);

// math single characters not specified
// const regex = /[^0-9aeiou?]/gi;
// console.log("hello doctor, is your number 2441139?".match(regex).join(''));

// match characters that occur one or more times
// const regex = /o+/g;
// console.log("oooh, ooah, ahooio".match(regex));

// match characters that occurs zero or more times
// const regex = /il*/;
// console.log("illlllli".match(regex));

// find characters with lazy matching
// const regex = /t[a-z]*?i/;
// console.log("titanic".match(regex));

// const regex = /<.*?>/;
// console.log("<h1> time to manage time </h1>".match(regex));

// find one or more criminals in a hunt
// const regex = /c+/i;
// console.log("p1p2p3p4p5p6cccp7p8p9c".match(regex));

// match begining string pattern
// const regex = /^king/;
// console.log(regex.test('king of the seven kingdoms'));

// match ending string pattern
// const regex = /caboos$/;
// console.log(regex.test("the last car on the train is caboos, haha"));

// match all leters and numbers
// const str = "A string containing all the characters, numbers from 0-9 and _";
// console.log(str.match(/\w/g).length);

// match everything but letters and numbers
// const str = "A string containing all the characters, numbers from 0-9 and _";
// console.log(str.match(/\W/g).join(""));

// match all numbers
// const str = "A string containing all the characters, numbers from 0-9 and _";
// console.log(str.match(/\d/g).length);

// match all non-numbers
// const str = "A string containing all the characters, numbers from 0-9 and _";
// console.log(str.match(/\D/g).length);

// restrict possible username
// username validation
// *rules:
// 1. If there is any number , they must be at the end.
// 2. letters can be uppercase and lowercase
// 3. username is at least two characters low and two characters long username dont have numbers

// const regex = /^[A-Za-z]{4,}\d*$/;
// const username = "abcd1";
// console.log(regex.test(username));

// match white space
// const regex = /\s/g;
// console.log("the king is arrived.".match(regex));

// match non-white space characters
// const regex = /\S/g;
// console.log("the king is arrived.".match(regex));

// specify upper and lower number of matches
// const regex = /fun{1,3}y/;
// console.log(regex.test("funnnnnny"));

// specify exact number of matches

// const regex = /tim{4}ber/i;
// console.log(regex.test("Timmmmber"));

// check for all or none

// const regex = /favou?rite/i;
// console.log(regex.test("favourite"));

// positive and negative lookahead

// const positiveLookahead = /q(?=u)/;
// console.log("quite".match(positiveLookahead)); //checks if u presents after q
// const negativeLookahead = /q(?!u)/; //checks if u not present after q
// console.log("quitt".match(negativeLookahead));

// check greater than 5 characters, after 2 consecutive digits , after 1 or more non-digits

// const regex = /(?=\w{5})(?=\D*\d{2})/;
// console.log(regex.test("arafa12"));

// reuse patterns using capture groups
// const repeatStr = "regex regex";
// const regex = /(\w+)\s\1/;
// console.log(regex.test(repeatStr));
// console.log(repeatStr.match(regex));

// const repeatNum = "33 33 33 33 33 33 33 33";
// const regex = /(\d+)\s\1\s\1/;
// console.log(regex.test(repeatNum));
// console.log(repeatNum.match(regex));

// use capture groups to search and replace
// let wrongText = "the sky is violate";
// // const regex = /violate/;
// // console.log(wrongText.replace(regex, "blue"));
// console.log(wrongText.replace(/(\w+)\s(\w+)\s(\w+)\s(\w+)/, "$4 $3 $2 $1"));

// simple regex challenge
// 1. remove white spaces from start and end (trim)

// let str = "       hello world              ";
// console.log(str.replace(/^\s+|\s+$/g, "").length);

// regex from javascript data structure and algorithm book
// any numeric characters

// console.log(/\d+/.test("123")); // true
// console.log(/\d+/.test("123abc")); // true
// console.log(/\d+/.test("abc5")); // true
// console.log(/\d+/.test("u5t")); // true
// console.log(/\d+/.test("javascript ")); // false

// only numeric characters
// console.log(/^\d+$/.test("123")); // true
// console.log(/^\d+$/.test("1a3")); //false
// console.log(/^\d+$/.test("a123")); //false
// console.log(/^\d+$/.test("123a")); //false
// console.log(/^\d+$/.test("abc")); //false

// floating numeric characters
// console.log(/^[0-9]*.[0-9]*[1-9]+$/.test("123")); true
// console.log(/^[0-9]*.[0-9]*[1-9]+$/.test("123.00")); false
// console.log(/^[0-9]*.[0-9]*[1-9]+$/.test("123.023")); true
// console.log(/^[0-9]*.[0-9]*[1-9]+$/.test("123.7")); true

// only alphanumeric characters
// console.log(/[A-Za-z0-9]/.test("123"));
// console.log(/[A-Za-z0-9]/.test("123abc"));
// console.log(/[A-Za-z0-9]/.test("abc"));
// console.log(/[A-Za-z0-9]/.test("a1b2c3"));
// console.log(/[A-Za-z0-9]/.test("_"));

// alpha numeric and _
// console.log(/\w+/.test("123"));
// console.log(/\w+/.test("123abc"));
// console.log(/\w+/.test("avc123"));
// console.log(/\w+/.test("1a2v3"));
// console.log(/\w+/.test("---"));
