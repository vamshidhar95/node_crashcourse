const url = require('url');

const myUrl = new URL(
    'http://mywebsite.com:8000/hello?id=100&status=active'
);


// SERIALIZED URL
console.log(myUrl.href);
console.log(myUrl.toString());
// HOST (root domain)
console.log(myUrl.host);
// HOSTNAME (doesn;t get port)
console.log(myUrl.hostname);

// PaTH NAME
console.log(myUrl.pathname);

// serialized query
console.log(myUrl.search);

//params object
console.log(myUrl.searchParams);

// add params dynaically
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));