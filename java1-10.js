// 1.	Write a js program to convert lowercase string to uppercase.
// function myFunction() {
//   var str1 = "hello world!";
  
//   var res1 = str1.toUpperCase();
  
//   document.getElementById("demo1").innerHTML = res1;

// }
// ..........................................................

// 2.	Write a js program to convert lowercase string to lowercase.

// function myFunction() {
  
//   var str2 = "HELLO WORLD!";
  
//   var res2 = str2.toLowerCase();
  
//   document.getElementById("demo2").innerHTML = res2;
// }
// ..........................................................
// 3.	Write a js program to toggle case of each character of a string.
// function myFunction() {
//   var str = 'ShoaiB';
//   var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   var LOWER = 'abcdefghijklmnopqrstuvwxyz';
//   var result = [];
  
//     for(var x=0; x<str.length; x++)
//     {
//       if(UPPER.indexOf(str[x]) !== -1)
//       {
//        result.push(str[x].toLowerCase());
//      }
//      else if(LOWER.indexOf(str[x]) !== -1)
//      {
//        result.push(str[x].toUpperCase());
//      }
//      else 
//       {
//         result.push(str[x]);
//      }
//     }
//     document.getElementById("demo1").innerHTML = result;
//   }

  // 4.	Write a js program to find total number of alphabets, digits or special character in a string.
// function countChars()
// {
//     var textarea  = document.getElementById('data').value;
//     var specialCharacters = textarea.match(/[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g);

//     if(specialCharacters == null) return;

//     document.getElementById('charcount').innerHTML = specialCharacters.length;
// }
// 5.	Write a js program to count total number of vowels and consonants in a string.
// const str = 'My Name is Shoaib Shahid';
// const countAlpha = str => {
//    return str.split('').reduce((acc, val) => {
//       const legend = 'aeiou';
//       let { vowels, consonants } = acc;
//       if(val.toLowerCase() === val.toUpperCase()){
//          return acc;
//       };
//       if(legend.includes(val.toLowerCase())){
//          vowels++;
//       }else{
//          consonants++;
//       };
//       return { vowels, consonants };
//    }, {
//       vowels: 0,
//       consonants: 0
//    });
// };
// console.log(countAlpha(str));

// 6.	Write a js program to count total number of words in a string.

// function countChars(countfrom,displayto)
// {
//   var len = document.getElementById(countfrom).value.length;
//   document.getElementById(displayto).innerHTML = len;
// }

// 7.	Write a JavaScript program to list the properties of a JavaScript object
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno


// function _keys(obj) 
//  {
//     if (!isObject(obj)) return [];
//     if (Object.keys) return Object.keys(obj);
//     var keys = [];
//     for (var key in obj) if (_.has(obj, key)) keys.push(key);
//     return keys;
//   }
// function isObject(obj) 
// {
//     var type = typeof obj;
//     return type === 'function' || type === 'object' && !!obj;
//   }
// console.log(_keys({name : "David Rayy", sclass : "VI", rollno : 12 }));

// 8.	 Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };


// var student =  { 
//   name : "David Rayy", 
//   sclass : "VI", 
//   rollno : 12  };
// console.log(student);
// delete student.rollno;
// console.log(student);


// Write a JavaScript program to get the length of a JavaScript object.   
// 9.	Sample object :
//            var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
 

// Object.objsize = function(Myobj) {
//   var osize = 0, key;
//   for (key in Myobj) {
//       if (Myobj.hasOwnProperty(key)) osize++;
//   }
//   return osize;
// };

// var student = { 
// name : "David Rayy", 
// sclass : "VI", 
// rollno : 12 };

// var objsize = Object.objsize(student);
// console.log('Size of the current object : '+objsize);


// 10. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.   

// var library = [ 
//    {
//      author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//   readingStatus: false
//    }];



// var library = [ 
//   {
//       title: 'Bill Gates',
//       author: 'The Road Ahead',
//       readingStatus: true
//   },
//   {
//       title: 'Steve Jobs',
//       author: 'Walter Isaacson',
//       readingStatus: true
//   },
//   {
//       title: 'Mockingjay: The Final Book of The Hunger Games',
//       author: 'Suzanne Collins',
//       readingStatus: false
//   }];

// for (var i = 0; i < library.length; i++) 
//  {
//   var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
//   if (library[i].readingStatus) {
//     console.log("Already read " + book);
//   } else
//   {
//    console.log("You still need to read " + book);
//   }
//  }