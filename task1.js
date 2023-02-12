// Deteksi Palindrom
// - Diberikan sebuah teks, periksa apakah kata tersebut adalah palindrom atau
// tidak. Misalnya teks “Malam”, output = palindrom.

// / mark the beginning and end of a regular expression.
// [ ... ] merupakan sebuah pembungkus.
// \W means "non-word", yang digunakan untuk mengkognisi apakah suatu huruf/kata
// _ sama seperti \W namun ini mengkognisi underscore
// g means it's a global search.

const cekPalindrome = (query) => {
  return new Promise((resolve, reject) => {
    var x = /[\W_]/g;
    var queryStr = query.toLowerCase().replace(x, "");
    var queryDibalik = queryStr.split("").reverse().join("");
    if (queryDibalik === queryStr) {
      resolve(`${query} = ${queryDibalik}`);
    } else {
      reject(`${query} = ${queryDibalik}`);
    }
  });
};

cekPalindrome("malam")
  .then((result) => {
    console.log(`${result} = palindrome`);
  })
  .catch((error) => {
    console.log(`${error} = bukan palindrome`);
  });



// Reverse Words
// - Diberikan sebuah kalimat, ubah urutan kata-kata di dalam kalimat menjadi
// terbalik. Misalnya kalimat “Saya belajar Javascript”, output “Javascript belajar
// Saya”

// const cekReverseWord = (query) => {
//   return new Promise((resolve,reject) => {
//     var teks = query.split(' ')
//     var teksDibalik = teks.reverse().join(' ')

//     if(teksDibalik) {
//       resolve(teksDibalik)
//     } else {
//       reject(`gagal brow`)
//     }
//   })
// }

// cekReverseWord("Saya Belajar Javascript")
//   .then((result) => {
//     console.log(`${result}`);
//   })
//   .catch((error) => {
//     console.log(`${error}`);
//   });
