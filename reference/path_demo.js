const path = require('path');

//BASE FILE NAME    
// console.log(__filename);
console.log(path.basename(__filename));

//DIRECTORY NAME
console.log(path.dirname(__filename));

//FILE EXTENSION
console.log(path.extname(__filename));

//CREATE PATH OBJECT
console.log(path.parse(__filename).base);

//CONCATENATE PATHS
// ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));