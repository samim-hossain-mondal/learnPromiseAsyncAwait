let fs = require('fs');

function readFileFunc(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(`${filename}`, 'utf8', (err, data) => {
      if (Number.isNaN(Number(data))) {
        reject('Invalid Input');
      }
      else {
        resolve(data);
      }
    });
  });
}

let resultMul = 1;

readFileFunc('file1.txt')
  .then(data1 => {
    resultMul *= parseInt(data1);
    console.log(data1);
    return readFileFunc('file2.txt');
  })
  .catch((err) => console.log(err))
  .then(data2 => {
    resultMul *= parseInt(data2);
    console.log(data2);
    return readFileFunc('file3.txt');
  })
  .catch((err) => console.log(err))
  .then(data3 => {
    resultMul *= parseInt(data3);
    console.log(data3);
    return readFileFunc('file4.txt');
  })
  .catch((err) => console.log(err))
  .then(data4 => {
    resultMul *= parseInt(data4);
    console.log(data4);
    return readFileFunc('file5.txt');
  })
  .then(data5 => {
    resultMul *= parseInt(data5);
    console.log(data5);
    console.log(resultMul);
  })
  .catch((err) => {
    console.log(err);
    console.log(resultMul);
  });