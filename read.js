let fs = require('fs');

function readFileFunc(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(`${filename}`, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(data);
      }
    });
  });
};

async function func() {
  let f1 = await readFileFunc('input1.txt');
  let f2 = await readFileFunc('input2.txt');
  let f3 = await readFileFunc('input3.txt');

  console.log(f1 + f2 + f3);
}
func();

// readFileFunc('input1.txt')
//   .then(data1 => {
//     console.log(data1);
//     return readFileFunc('input2.txt');
//   })
//   .then(data2 => {
//     console.log(data2);
//     return readFileFunc('input3.txt');
//   })
//   .then(data3 => {
//     console.log(data3);
//   })

// readFileFunc('input1.txt')
//   .then(data => {
//     console.log(data);
//     readFileFunc('input2.txt')
//       .then(data => {
//         console.log(data);
//         readFileFunc('input3.txt')
//           .then(data => {
//             console.log(data);
//           });
//       });
//   });

// fs.readFile('input1.txt', 'utf8', (err, data) => {
//   if (err) {
//     throw new Error('Error !');
//   }
//   console.log(data);
//   fs.readFile('input2.txt', 'utf8', (err, data) => {
//     if (err) {
//       throw new Error('Error !');
//     }
//     console.log(data);
//     fs.readFile('input3.txt', 'utf8', (err, data) => {
//       if (err) {
//         throw new Error('Error !');
//       }
//       console.log(data);
//     });
//   });
// });