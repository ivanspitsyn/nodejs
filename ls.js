// Подключение модулей
const fs = require('fs');
const path = require('path');


//Переменные
var name = 'onx';
var test = 'Homework';
var some = "";
var bufferF ='';
var letters;
var name_folder ='';
var arr1 = [];
var dirs = path.join(__dirname,name,test);
var dir = path.join(__dirname,name);
var xfold = path.join(__dirname,name,name_folder);
var xfold2 = path.join(__dirname,name,name_folder);
var directory = "";
dir = path.join(dir,some);
var files = fs.readdirSync(dir);
var n_folder = fs.readdirSync(xfold);

var f_data;

//Проверка 
//console.log(dirs);
//console.log(some);


//--Создание главной папки

function delpi() {
  fs.mkdir(dirs, { recursive: true }, (err) => {
    if (err) throw err
    //console.log(dirs)
    //console.log('Created')
  })
};
delpi();

const base = './onx/test';

const readDir = (base, level) => {
  const files = fs.readdirSync(base);

  files.forEach(item => { //в item заносится значение перебора foreach 
    console.log('item',item)
    //console.log('level',level)
    let localBase = path.join(base, item); // в переменную заносится базовый путь с значением foreach
    console.log(localBase);
    let state = fs.statSync(localBase); // в state заносятся свойства 
    if (state.isDirectory()) {
      //console.log(' '.repeat(level) + 'DIR: ' + item);
      readDir(localBase, level + 1);
    } else {
      //console.log(' '.repeat(level) + 'File: ' + item);
    }
  })
}

readDir(base, 0);


// function Find_Folder () {
//   n_folder.forEach(function (filename) {
//     var fullname = path.join(xfold, filename),
//     stats = fs.statSync(fullname);
//     //console.log('full',fullname);
//     if (stats.isDirectory()) {
//     console.log(filename + '\t DIR \t');
//     name_folder = filename;
  
//     //fs.rmdir('stuff');
//     //console.log('папка найдена!!', filename);
//     // console.log(name_folder);
//     // console.log(xfold);
//     }
//   }
// )
// }
// console.log(xfold)

// Find_Folder ()
// console.log(xfold)


// console.log('2prog')

// function Find_Folder () {
//   console.log(n_folder );
//   n_folder.forEach(function (filename) {
//     var fullname = path.join(xfold, filename),
//     stats = fs.statSync(fullname);
    
//     if (stats.isDirectory()) {
//     console.log(filename + '\t DIR \t');
//     console.log(n_folder);
//     arr1.push(filename);
//     console.log(arr1);
//     console.log(dirs);
//     //fs.rmdir('stuff');
//     //console.log('папка найдена!!', filename);
//     // console.log(name_folder);
//     // console.log(xfold);
//     }
// })
// }
// Find_Folder ()


// //console.log(name_folder);
// xfold = path.join(__dirname,name,name_folder);
// //console.log(xfold);
// n_folder = fs.readdirSync(xfold);
// //console.log(n_folder );
// //Find_Folder ()






// function Pers()  {
//   files.forEach(function (filename) {
//   var fullname = path.join(dir, filename),
//   stats = fs.statSync(fullname);
  
//   if (stats.isDirectory()) {
//   //console.log(filename + '\t DIR \t');
//   some = filename;

//   //console.log(some);
  
  
//   } else  if (a=1) {
    
//     var namef = path.parse(filename)
//     //console.log('3',namef.base);
//    var letter = filename.slice(0, 1);
//    letters = letter;
//    //console.log('01',filename);
//    var create_let = path.join(__dirname,name,test, letter);
   
//    //создать папку
//    fs.mkdir(create_let, { recursive: true }, (err) => {
//     if (err) throw err
//     //console.log(dirs)
//     //console.log('Created')
//   })
  
// //  чтение файла
// function readf() {
//   //directory = path.join(__dirname, name, letter);
//   let rt1= namef.base;
//   console.log('66',rt1)
//   fs.readFile(path.join(dir, rt1), (err, data) => {
//     if (err) {
//       console.log('Error write to file!');
//     }
//     f_data = data;
//     //console.log(f_data);

//   })
// };
// readf() ;

//     //записать  файл

//     function writeF() {
//         let rt1 = namef.base;
//         var dir5 = path.join(__dirname,name,test,letters);
//         fs.writeFileSync(path.join(dir5, rt1), 'Hello world!')
//     }
//     writeF()
//   }


//  });
// };

// Pers();








//удаление файла

// function deleteF() {
//   fs.unlink(
//     path.join(__dirname, name, 'hello.txt'), (err) => {
//     if (err) throw err
  
//     console.log('Deleted1')
//   })
// }

//deleteF();

//  console.log(direct);
 
//  direct.forEach(function() {
//    console.log('hi1');
//  });

//чтение файла
// function readf() {
//   try {
// var fileContent = fs.readFileSync(
//   path.join(__dirname, name, 'hello.txt'),
// )
// console.log('12',fileContent)
// bufferF = fileContent;} catch (e) {
//   console.log(e)
// }
// };
// readf() ;


// fs.stat('new1', function(err) {
//   if (!err) {
//       console.log('папка уже существует');
//   }
//   else if (err.code === 'ENOENT') {
//     function delpy() {
//   fs.mkdirSync('new1');
// };

// delpy();

//       console.log('папка создана');
//   }
// });
