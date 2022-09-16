// Part 1

const url = require("url");

const urlArr = process.argv.slice(2); // Ignores the first two elements of the 'argv' array (we don't need them)
// console.log("urlArr", urlArr);

for (let iUrl of urlArr) {
    const { protocol, host, hostname, port, pathname, query } = url.parse(iUrl); // Assign property values to a group of variables
    const urlObj = { protocol, host, hostname, port, pathname, query }; // Create a new object with variables as properties and their values. This method allow us to change property order
    // const { slashes, auth, hash, search, path, href, ...urlObj } = url.parse(iUrl); // Creates a shallow copy skipping the properties that we won't use. This
    //console.log("urlObj :", urlObj);

    for (let property in urlObj) {
        console.log(`The ${property} is ${urlObj[property]}`); // Iterates through each property and logs template literal
    }

    if (urlObj.query) {
        //console.log("urlObj.query.split('&') :", urlObj.query.split("&"));
        const queryArr = urlObj.query.split("&"); // Makes an array with each query parameter
        for (let para of queryArr) {
            console.log(`The value of the ${para.split("=")[0]} parameter is ${para.split("=")[1]}`); // Iterates through each parameter and logs a template literal
        }
    } // If query is not 'null', use another template literal to log its contents
    console.log(); // Creates an empty line for easier reading
}

// How to create a new object with the properties of another object (plus change some properties!)
/*
const obj1 = {
    name: "Barcelona",
    region: "Catalonia",
    country: "Spain",
};

const { name, region } = obj1;

const obj2 = { name, country: region };

console.log(obj2); // { name: 'Barcelona', country: 'Catalonia' }
*/
