const { request } = require('express');
const fetch = require('node-fetch');
require('dotenv').config();
var cachedLocations = {}

async function unsplashApi(location) {
    if (cachedLocations[location]) {
        console.log("using cachedlocation for " + location)
        return cachedLocations[location]
    }
    if (!process.env.UNSPLASH_KEY) {
        console.error("UNSPLASH_KEY not set");
        return [];
    }
    var result = [];
    var requestImg = `https://api.unsplash.com//search/photos?client_id=${process.env.UNSPLASH_KEY}&query=${location}`
    let res = await fetch(requestImg);
    let json = await res.json()
    for (var index = 0; index < json.results.length; index++) {
        if (json.results[index].urls) {
            if (json.results[index].urls.regular) {
                result.push(json.results[index].urls.regular);
            }
        }
    }
    if (result.length) {
        cachedLocations[location] = result;
    }
    return result;
}
// async function main (){
//     console.log(await unsplashApi("hawaii"))
// }
// main();
// console.log(unsplashApi("hawaii"))
// unsplashApi("hawaii")

module.exports = unsplashApi;
