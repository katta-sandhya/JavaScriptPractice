
const querystring = require('querystring');

const query = 'name=John Doe&city=New York';
const query1 = {name : "john", age : 23};
const escapedQuery = querystring.escape(query);
const parsedQuery = querystring.parse(query);
const stringifyQuery = querystring.stringify(query1);
const unescapeQuery = querystring.unescape(escapedQuery);


console.log(escapedQuery); // Output: name%3DJohn%20Doe%26city%3DNew%20York
console.log(parsedQuery);
console.log(stringifyQuery);
console.log(unescapeQuery);